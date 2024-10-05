// Step 1: Redirect user to GitHub for authentication
const clientId = "Ov23liyKADrsIpbypKkj"; // Replace with your actual Client ID
const redirectUri = "http://localhost:3000/job-marketplace/"; // Replace with your callback URL

// Check if the authorization code is present in the URL
//const urlParams = new URLSearchParams(window.location.search);
//const code = urlParams.get('code');
const code = '49ec91e43a730114c36b'

if (code) {
    exchangeCodeForToken(code);
} else {
    // Redirect user to GitHub for authentication
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user,repo`;
}

// Function to exchange code for an access token
function exchangeCodeForToken(code) {
    const clientSecret = "73d257ec4248e9b39f0553402443ddc82e0e305b"; // Replace with your actual Client Secret
    
    const authUrl = `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUri}`;
    
    fetch(authUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const accessToken = data.access_token;
        console.log('Access Token:', accessToken);

        // Fetch user details with the access token
        fetchGitHubUser(accessToken);
        fetchUserCommits(accessToken);
    })
    .catch(error => {
        console.error('Error retrieving access token:', error);
    });
}

// Function to fetch user data
function fetchGitHubUser(accessToken) {
    fetch('https://api.github.com/user', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(userData => {
        console.log('GitHub User Data:', userData);
        // Handle the user data (e.g., display it in the UI)
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });
}

// Function to fetch user repositories
function fetchUserRepos(accessToken) {
    return fetch('https://api.github.com/user/repos', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error fetching user repositories:', error);
    });
}

// Function to fetch commits for a repository
function fetchRepoCommits(accessToken, owner, repo) {
    return fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .catch(error => {
        console.error(`Error fetching commits for repo ${repo}:`, error);
    });
}

// Function to fetch user commits from all repositories
function fetchUserCommits(accessToken) {
    fetchUserRepos(accessToken)
        .then(repos => {
            const commitPromises = repos.map(repo => 
                fetchRepoCommits(accessToken, repo.owner.login, repo.name)
            );

            return Promise.all(commitPromises);
        })
        .then(allCommits => {
            const commits = allCommits.flat();
            // Get the total number of commits
            const totalCommits = commits.length;
            console.log('Total Commits:', totalCommits);

            // You can also display the totalCommits in your UI if needed
        })
        .catch(error => {
            console.error('Error fetching user commits:', error);
        });
}

