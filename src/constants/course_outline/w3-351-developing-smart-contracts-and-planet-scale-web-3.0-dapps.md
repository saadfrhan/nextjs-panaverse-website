# Web 3 and Metaverse Specialization

## Quarter III

### W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps

Duration: 13 Weeks

### Course Description

In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.

[The reasons for learning Web 2 before Web 3](
<https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db>)

## Course Outline

### Blockchain and Metaverse Theory

[The Metaverse: And How It Will Revolutionize Everything by Matthew Ball](https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0)

[Mastering Blockchain - Fourth Edition by Imran Bashir](
<https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067>)

### Smart Contract Development in Solidity

[Solidity Programming Essentials - Second Edition By Ritesh Modi](
<https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181>)

[Solidity Learning Repo](
<https://github.com/panaverse/defi-dapps-solidity-smart-contracts>)

### Dapp Development using Ethers.js and Next.js 13

[Dapp Learning Repo](
<https://github.com/panaverse/dapps-nextjs>)

### Tokennomics

Blockchain Project: Create a Token and Launch ICO/IEO/IDO

As you probably know, the ICO ("Initial Coin Offering") industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest crowdfunding projects  <https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects>, and you'll notice that blockchain projects absolutely dominate the list.

[Understand the difference between IDO vs. IEO vs. ICO](https://phemex.com/blogs/what-is-a-dex-ido)

Also check these links for latest listings:

ICO list at ICO Drops <https://icodrops.com>

ICO List of Best New Initial Coin Offerings <https://topicolist.com/>

Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs <https://cryptototem.com/ico-list/>

ICO List Online <https://www.icolistingonline.com>

Binance IEO List <https://coincodex.com/ieo-list/binance/>

Binance Launchpad <https://www.coinspeaker.com/ieo/platform/binance-launchpad/>

IEO List <https://icomarks.com/ieo>

Polkastarter <https://polkastarter.com>

Project Part 1: How to Launch a IEO on Binance Launchpad

Read How to Launch an IEO <https://appinventiv.com/blog/how-to-launch-an-ieo/>

Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad <https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04>

Note: Also document the alternatives to Binance Launchpad.

Project Part 2: How to Launch a IDO on Polkastarter

Review the [list of top fundraising platforms <https://cryptorank.io/fundraising-platforms>

Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter <https://polkastarter.com/>

Project Part 3: Create a Pako Token

By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.

Therefore, for the sake of this chapter, let's imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).

Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.

Project Part 4: Develop Crowd Sale Contract

This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)

Implement a payable buyToken() function.

Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought

Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.

Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.

You can use the openzeppelin crowd sale contracts <https://docs.openzeppelin.com/contracts/4.x/crowdsales> however you will have to update the code to the latest solidity version.

Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.

Note: Before you get started writing the token contract we suggest you review access control
<https://docs.openzeppelin.com/contracts/4.x/access-control>

Project Part 5: Trying it with MetaMask

While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!

We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.

When it's done, take note of what addresses the contracts were uploaded to and copy it!

Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.

After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!

To do this, open the side menu and click on the "Add token" button to get started:

Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.

After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!

Project Part 6: Trying it with Multisignature Wallets

Read <https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/>

Now use Gnosis Safe]{<https://gnosis-safe.io/> with multi-sigs to do what you did in the last part.

Project Part 7: Sending Tokens using Ethers.js

Write a Typescript program to send Pako Token to some friend's address using Ethers.js.

You may follow this tutorial <https://ethereum.org/en/developers/tutorials/send-token-etherjs/>

Project Part 8 Advance: Create, Deploy, Mint, and Sell a NFT

Read this NFT tutorial series <https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/>

Create a NFT contract using the [OpenZepplen ERC721 NFT Standard <https://docs.openzeppelin.com/contracts/4.x/erc721>

You may use the Preset ERC721 contract <https://docs.openzeppelin.com/contracts/4.x/erc721#Presets>

Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace <https://opensea.io/>  for sale.

Implement a ERC721 Market <https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/>
