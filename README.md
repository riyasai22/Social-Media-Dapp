# Social-Media-Dapp

## Abstract

The popularity of websites like Facebook, Twitter, and YouTube is evidence of the social media's significance and the effects it has had on people and businesses. One of the most often used social media sites for people in the cryptocurrency space is Twitter. However, cryptocurrency users understand that a decentralized version of Twitter would be quite advantageous because it would get rid of all the drawbacks of its centralized platform. As part of our project we will be creating a Web3 Twitter clone. Such a platform may house the numerous benefits that blockchain technology offers and can offer users real decentralization by developing and deploying a Twitter clone with Web3 capability.

## Architechture
![Dapp](https://user-images.githubusercontent.com/80235375/236331919-00b64bb4-94d2-450a-8082-f006c8f19819.png)


## Implementation

Once the application is developed, the ethers library and smart contract abi is imported along with the address. These two pieces of information are used to create a javascript pointer. Some design components are further imported from react bootstrap. The web3 handler function will connect the wallet to the application and it's going to be fired whenever the user presses the connect wallet button in the nav bar. The state of our app component is defined so we're going to have a piece of loading state state to store the account and the decentral twitter contract. Another state is used to store when the app is loading as the display of contents of the application are hidden till the blockchain data is being fetched using a ternary operator for displaying all the screens. The account state is used to store the address of the account that's connected to our application. A pointer is created to store the smart contract. 

Loading Screen

![image](https://user-images.githubusercontent.com/80235375/236333023-d4a9fbf9-a69d-4820-a55f-27befa348861.png)

Connected to MetaMask

![image](https://user-images.githubusercontent.com/80235375/236334095-295bb76b-478e-48c8-b8b8-02519958baeb.png)

Add Post

![image](https://user-images.githubusercontent.com/80235375/236334293-025f1934-b2aa-457d-a4a5-e3002b09009e.png)

Profile Page

![image](https://user-images.githubusercontent.com/80235375/236334482-e373f816-467c-40b3-9793-e5ee83553a67.png)




## Workflow

1. Mint an NFT that will represent your avatar and username users can mint more than one NFT and select the one they want to serve as their profile. NFT holders can post and tip other people's posts. The posts with the most tips will appear first on their feed. In most cases storing images and files directly onto the blockchain is infeasible due to the blockchain's limited storage capacity. So, as a workaround this content - also referred to as metadata - is stored outside of the blockchain on a decentralized file storage system called IPFS - InterPlanetary File System. 
2. The NFT smart contracts store a fixed length hash that points to where the metadata is located on IPFS and in addition to storing the NFT metadata onto IPFS we will also store each post made on our social media app on IPFS and store the hash that points to it inside of our smart contract. Once smart contracts are coded and tests are written against them, they are deployed to a local blockchain. 
3. Next the client side application of the dapp is built, using the react.js framework by connecting it to the blockchain and the smart contracts we deployed to it. Hard hat is a smart contract development framework which provides us with a set of tools that allow us to develop smart contracts right for ethereum. It comes with a solidity compiler
4. On running the deploy.js script, it we'll deploy this smart contract to a local development blockchain. It uses the moca testing framework and the chai assertion library to execute the tests and it uses the ethers library as a library for blockchain interactions it allows us to talk to ethereum nodes from a javascript environment. Inside the hardhat.config file we specify the version of the solidity compiler we're going to be using to compile our smart contracts. 
5. We used react bootstrap to style the front end portion of our website. We're also using react router dom dependency to allow us to route between a home page and a profile page for the app. 
6. The IPFS http client is set up to store the metadata of the NFTs and the posts programmatically. Also open zeppelin smart contract library is used to reference a ERC 721 NFT standard contract inside of our decentral twitter smart contract.

## Run and Execute

```shell

npx hardhat help

npx hardhat test

npx hardhat node

npx hardhat run scripts/deploy.js
```

