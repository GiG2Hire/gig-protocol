
  # GIG2hire:
  ## The trustless, zero fees, freelance hiring platform.

  # **Inspiration**

In an ever changing world we have evolved from physical manual labor to digital and remote jobs. But as always big companies are the ones that have the upper hand, and instead of benefiting the freelancers they seem to affect them by taking away a big chunk of their payment, and  not offering secure tools to keep users away from dishonest players.

Current freelance recruiting platforms fail in so many aspects like trust, speed of payments and transparency. Blockchain has all the technology to bring back trust to work and give power back to whom with their skills make companies grow and flourish.

***

# **What it does**

## GIG2Hire is a trust-less and zero-fees freelance hiring platform. 

Thanks to blockchain we can solve two main issues in current hiring platforms:

### 1. Bring back trust.

  - We can bring back trust for freelancers as clients will commit escrowing their money until the job is correctly done so the payment can be transferred instantly as soon as the job is completed. Or get refunded if the freelancer fails to deliver.

  - Also clients can trust back freelancers skills as they will be verified on-chain following a different set of rules. e.g. A developer can join if has more than 10 commits during the last month. And a voting system to check if every task of the job is completed.

### 2. Fees down to zero

The platform won’t charge any abusive fees to users as escrowed payments will be deposited on lending platforms like AAVE during the duration of the job to collect interests that will be deposited on the platform treasury.

***
# **How it works?**

Here's a detailed userflow of the GIG2Hire app.
[GIG2Hire UserFlow](https://gig2hire.com/assets/userflow.png)

# **How we built it**

GIG2Hire was brought to life with a different set of tools.

>**Scaffold-ETH 2:** To make a seamless integration of Smart Contracts and Frontend.

>**ChainLink CCIP:** For escrowed money to be deposited cross-chain depending on the chain that is paying the highest interests in AAVE.

>**ChainLink Functions:** Using API functions to read data that will allow to verify users skills, experience, or followers given certain parameters. e.g A developer can join if it’s GitHub profile has more than 10 commits during the last month. An influencer can join if it’s X profile has more than 5000 followers. Or a Designer can join if it’s Behance profile has more than 5 projects.

# Running the dApp

  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm run dev` to view project in browser
  