# Social-Media-Dapp

## Abstract

The popularity of websites like Facebook, Twitter, and YouTube is evidence of the social media's significance and the effects it has had on people and businesses.One of the most often used social media sites for people in the cryptocurrency space is Twitter. However, cryptocurrency users understand that a decentralized version of Twitter would be quite advantageous because it would get rid of all the drawbacks of its centralized platform. As part of our project we will be creating a Web3 Twitter clone. Such a platform may house the numerous benefits that blockchain technology offers and can offer users real decentralization by developing and deploying a Twitter clone with Web3 capability.

## Architechture
![Dapp](https://user-images.githubusercontent.com/80235375/236331919-00b64bb4-94d2-450a-8082-f006c8f19819.png)


## Implementation

Once our application is developed, we import the ethers library and then we also import the abi of the smart contract as well as its address we're going to need both of these pieces of information to create a javascript pointer. We are also importing some components from react bootstrap. We now write the web3 handler function which will connect our wallet to the application and it's going to be fired whenever the user presses the connect wallet button in the nav bar so first things first we're going to define the state of our app component so we're going to have a piece of loading state state to store the account and the decentral twitter contract. We need a piece of state to store when the app is loading or not because we don't want to display the contents of the application when blockchain data is being fetched so we're going to set loading to true initially and down here we have this ternary operator so it checks if loading is true then it displays loading page. We also have an account which we'll use to store the address of the account that's connected to our application. We're also going to store a pointer to the smart contract

## Workflow

1. Mint an NFT that will represent your avatar and username users can mint more than one NFT and select the one they want to serve as their profile. NFT holders can post and tip other people's posts. The posts with the most tips will appear first on their feed. In most cases storing images and files directly onto the blockchain is infeasible due to the blockchain's limited storage capacity. So, as a workaround this content - also referred to as metadata - is stored outside of the blockchain on a decentralized file storage system called IPFS - InterPlanetary File System. 
2. The NFT smart contracts store a fixed length hash that points to where the metadata is located on IPFS and in addition to storing the NFT metadata onto IPFS we will also store each post made on our social media app on IPFS and store the hash that points to it inside of our smart contract. Once smart contracts are coded and tests are written against them, they are deployed to a local blockchain. 
3. Next the client side application of the dapp is built, using the react.js framework by connecting it to the blockchain and the smart contracts we deployed to it. Hard hat is a smart contract development framework which provides us with a set of tools that allow us to develop smart contracts right for ethereum. It comes with a solidity compiler
4. On running the deploy.js script, it we'll deploy this smart contract to a local development blockchain. It uses the moca testing framework and the chai assertion library to execute the tests and it uses the ethers library as a library for blockchain interactions it allows us to talk to ethereum nodes from a javascript environment. Inside the hardhat.config file we specify the version of the solidity compiler we're going to be using to compile our smart contracts. 
5. We used react bootstrap to style the front end portion of our website. We're also using react router dom dependency to allow us to route between a home page and a profile page for the app. 
6. The IPFS http client is set up to store the metadata of the NFTs and the posts programmatically. Also open zeppelin smart contract library is used to reference a ERC 721 NFT standard contract inside of our decentral twitter smart contract.

```shell

npx hardhat help

npx hardhat test

npx hardhat node

npx hardhat run scripts/deploy.js
```

