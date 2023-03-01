<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
* I'm using markdown "reference style" links for readability.
* Reference links are enclosed in brackets [ ] instead of parentheses ( ).
* See the bottom of this document for the declaration of the reference variables
* for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
* https://www.markdownguide.org/basic-syntax/#reference-style-links


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h1 align="center"> Angel-Flow </h1>

  <p align="center">
    Unlock your financial potential with Angel-Flow - Invest, Earn and Grow !
    <br />
    <a href="https://docs.google.com/presentation/d/1uvFwt2GruwrIuoNV-BMZAMZIU03C1OPS25AiXVhrz_o/edit?usp=sharing"><strong>View PPT»</strong></a>
    <br />
    <a href="https://youtu.be/m3xArqbYJ1A">View Demo</a>
    .
    <a href="https://decentralizedangellist.web.app">View Site</a>
  </p>
</div>

<!-- <img src='assets/devilslist-pic.jpg'> -->

<!-- TABLE OF CONTENTS -->

  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Tech-Stack</a></li>
    <li><a href="#usage">Challenges Faced</a></li>
    <li><a href="#contributing">Future Aspects and Scope</a></li>
    <li><a href="#license">Guide to setup the project locally</a></li>
    <li><a href="#contract-address">Contract Address</a></li>
    <li><a href="#acknowledgments">Acknowledgments and References</a></li>
    <li><a href="#contact">Project Demo Pictures</a></li>

  </ol>

## About The Project

### Inspiration

With the world rapidly accepting and appreciating blockchain and decentralised ecosystems, it is imperative that major financial instruments such as Stock Exchange Market migrate to WEB3. New firms will be built on WEB3, and blockchain token transactions will be a major element of monetary transactions in the near future.
Moreover Payments, loans, and borrowing were formerly only available through established financial institutions including banks. However, things changed with the arrival of blockchain technology. When the notion of cryptocurrencies began to grow in popularity, the conversation switched to a new set of issues, namely, decentralised finance (DeFi) Decentralized finance fosters an equitable and transparent financial system in which anybody may participate. It uses blockchain technology to provide unbanked individuals with access to financial and banking services.

While the Flow blockchain is gaining traction as a platform for building DeFi applications, it is still relatively new and AngelFLow will boost up the Defi Ecosystem on Flow. As a result, having a platform like AngelFlow is essential for Flow.

### Introduction

The Flow blockchain has emerged as a popular platform for creating DeFi applications, and one such application is our Angel-Flow platform that offers various investment options. Our platform brings Stock Exchange Market on Chain. This platform enables users to invest in a range of assets, including tokens representing stocks of companies, liquidity pools, and staking pools. By leveraging the decentralized and transparent nature of blockchain technology, this application provides users with secure and efficient investment opportunities that can potentially yield significant returns.

### AngelFlow Stock Exchange

<img src='assets/workflow-devilslist.png'>

### AngelFlow Liquidity Pools

<img src='assets/market-place-working.png'>

### Tech-Stack

<p align="center">
<a href="https://tezos.com/"><img src="./src/assets/images/Firebase.png"   width="40%" height="40%"></a>
<p align="center" float="left">
<a href="https://smartpy.io/"><img src="./src/assets/images/flow2.png" width="30%" height="30%"></a>
<a href="https://reactjs.org/"><img src="./src/assets/images/React.png"  width="30%" height="30%"></a>
</p>
<p align="center" float="left">
<a href="https://ipfs.io/"><img src="./src/assets/images/Increment.Fi.jpeg" width="30%" height="30%"></a>
</p>
<p align="center" float="left">
<a href="https://ipfs.io/"><img src="./src/assets/images/Flowns.png" width="30%" height="30%"></a>
</p>


<p align="right"><a href="#readme-top">Top</a></p>

## Challenges Faced

We are new to the Flow Block chain are so we ran into some issues while the duration of this project,

1. It took major time to resolve erros in cadence due to lack of proper error messages and documentation regarding the errors.
2. Flow Playground - We also faced problems with the flow playground as it puts a limit on the number of contracts that can be deployed at once. This posed problems when we wanted to interact with existing contracts provided by increment.fi
3. Wallets - We had to spend much of our initial time to find a suitable wallet, as most wallets did not provide private keys. We required private keys to deploy contract to testnet.
4. Flow CLI - The documentation for the flow cli was confusing and it did not provide any information or examples for testnet.
5. Increment.Fi - The increment.fi contracts are not documented for its cadence functions to use easily.
                - We face major issue to do the swap transaction while passing an argument requiring the  unix timestamp. Due to this swapping the tokens were not working.

<p align="right"><a href="#readme-top">Top</a></p>

## Future Aspects and Scope

Staking Pools:
Staking pool allows investors to earn a passive income on their cryptocurrency holdings by staking them on the blockchain. It is low-risk investment option compared to other investment options in the crypto space. By staking their cryptocurrency holdings in a pool, investors will actively contribute to the security and stability of the blockchain, which can help to promote the long-term growth and success of the ecosystem.

Crypto Exchanges : Crypto exchanges offer access to a wide variety of cryptocurrencies and tokens, which can provide investors with greater diversification in their portfolios. Crypto exchanges often offer access to new investment opportunities such as initial coin offerings (ICOs) and new token launches.Provides investors with the opportunity to generate substantial returns on their investments.

Expansion of investment options: As the DeFi ecosystem on the Flow blockchain grows, the AngelFlow platform could expand its investment options to include new types of investments such as cryptocurrency trading, ICOs, and NFTs. This could provide users with more opportunities to generate returns and attract new investors to the platform.

<p align="right"><a href="#readme-top">Top</a></p>

## Guide to setup the project locally

### Prerequisites

- Node v12.x +

<p align="right"><a href="#readme-top">Top</a></p>

### Setup, Run, Compile & Deploy Steps :

1.  `npm install` it will install all your dependencies

2.  `npm start` it will install all the client dependencies i.e in React

<p align="right"><a href="#readme-top">Top</a></p>

## AngelFLow Contract Address

### 0x9f78a1504db85885

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments and References

- [Flow](https://developers.flow.com/)
- [FCL](https://developers.flow.com/tools/fcl-js/index)
- [Cadence Playground](https://play.flow.com/local-project)
- [FlowViews](https://testnet.flowview.app/)
- [Increment.Fi](https://docs.increment.fi)
- [Firebase](https://firebase.google.com/)
- [React](https://reactjs.org/docs/getting-started.html)
- [README Template](https://github.com/othneildrew/Best-README-Template/edit/master/README.md)

<p align="right"><a href="#readme-top">Top</a></p>

## Project Demo Pictures

You can refer the sample shots our projects <a href="https://drive.google.com/drive/folders/1vyppSZRm_aS8BcY_G4efxLQuYp651AkP?usp=sharing">Click Here</a>

<p align="right">(<a href="#readme-top">Top</a>)</p>
