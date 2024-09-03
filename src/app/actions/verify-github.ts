"use server"
export default async function githubVerification(code: any) {
    // const urlParams = new URLSearchParams(window.location.search);
    // const code = urlParams.get('code');
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
async function fetchUserRepos(accessToken) {
    try {
        const response = await fetch('https://api.github.com/user/repos', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching user repositories:', error);
    }
}

// Function to fetch commits for a repository
async function fetchRepoCommits(accessToken, owner, repo) {
    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return await response.json();
    } catch (error) {
        console.error(`Error fetching commits for repo ${repo}:`, error);
    }
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