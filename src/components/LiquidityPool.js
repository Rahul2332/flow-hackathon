import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as fcl from "@onflow/fcl";
import { FooterMini } from './FooterMini';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Avatar, Button, TextField } from '@mui/material';
import { blue, pink, purple } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import graph1 from '../images/graph1.png';
import graph2 from '../images/graph2.png';
import graph3 from '../images/graph3.png';
import timeline from '../images/timeline.png'

import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DashboardIcon from '@mui/icons-material/Dashboard';

import walletCoins from '../images/walletWithCoins.svg';
import coinExchange from '../images/coinExchange.svg'

export const LiquidityPool = () => {

    const [age, setAge] = React.useState('');

    var lpAddress = "0xd5a801ab74372f66"

    const [user, setUser] = useState({ loggedIn: null })

    useEffect(() => {
        fcl.currentUser.subscribe(setUser)
      }, []);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const createPair = async () => {
        try {
          const transactionId = await fcl.mutate({
            cadence: `
            import FiatToken from 0xa983fecbed621163
            import FUSD from 0xe223d8a629e49c68
            
            /// Pair creator needs to pay the deployment fee of 0.001 Flow.
            import FlowToken from 0x7e60df042a9c0868
            import SwapFactory from 0xcbed4c301441ded2
            
            /// Deploy a trading pair for USDC <-> FUSD if it doesn't exist; otherwise do nothing.
            transaction() {
                prepare(deployer: AuthAccount) {
                    let token0Vault <- FiatToken.createEmptyVault()
                    let token1Vault <- FUSD.createEmptyVault()
            
                    /// 'A.0xADDRESS.TokenName.Vault'
                    var token0Key = token0Vault.getType().identifier
                    /// Get token0 identifier
                    token0Key = token0Key.slice(from: 0, upTo: token0Key.length - 6)
                    var token1Key = token1Vault.getType().identifier
                    token1Key = token1Key.slice(from: 0, upTo: token1Key.length - 6)
                    /// Check whether pair has already existed or not.
                    let pairAddress = SwapFactory.getPairAddress(token0Key: token0Key, token1Key: token1Key)
                
                    if (pairAddress == nil) {
                        let flowVaultRef = deployer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)!
                        assert(flowVaultRef.balance >= 0.002, message: "Insufficient balance to create pair, minimum balance requirement: 0.002 flow")
                        let fee <- flowVaultRef.withdraw(amount: 0.001)
                        SwapFactory.createPair(token0Vault: <-token0Vault, token1Vault: <-token1Vault, accountCreationFee: <-fee)
                    } else {
                        /// Pair already exists
                        destroy token0Vault
                        destroy token1Vault
                    }
                }
            }
            `,
            payer: fcl.authz,
            proposer: fcl.authz,
            authorizations: [fcl.authz],
            limit: 999,
          });
    
          const transaction = await fcl.tx(transactionId).onceSealed();
          console.log(transaction);
        } catch (error) {
          console.error("Transaction error:", error);
        }
      };
    
    const createEmptyVault = async () => {
    const transactionId = await fcl.mutate({
        cadence: `
        import FungibleToken from 0x9a0766d93b6608b7
        import FiatToken from 0xa983fecbed621163

        transaction() {
            prepare(signer: AuthAccount) {
                let vaultPath = /storage/USDCVault
                let receiverPath = /public/USDCVaultReceiver
                let balancePath = /public/USDCVaultBalance

                if signer.borrow<&FungibleToken.Vault>(from: vaultPath) == nil {
                    signer.save(<- FiatToken.createEmptyVault(), to: vaultPath)
                    signer.link<&FiatToken.Vault{FungibleToken.Receiver}>(receiverPath, target: vaultPath)
                    signer.link<&FiatToken.Vault{FungibleToken.Balance}>(balancePath, target: vaultPath)
                }
            }
        }
        `,
        payer: fcl.authz,
        proposer: fcl.authz,
        authorizations: [fcl.authz],
        limit: 50
        })
        
        const transaction = await fcl.tx(transactionId).onceSealed()
        console.log(transaction)
    }

    const getAllLp = async () => {
    const address = await fcl.query({
        cadence: `
        import SwapFactory from 0xcbed4c301441ded2

        pub fun main(): [Address] {
            let len = SwapFactory.getAllPairsLength()
            if (len == 0) {
            return []
            } else {
            return SwapFactory.getSlicedPairs(from: 0, to: UInt64.max)
            }
        }
        `,
    })
    console.log(address)
    if(lpAddress == null)
    lpAddress = address[address.length - 1];
    }

    const getPairInfo = async ()=>{
    if(lpAddress == null)
        await getAllLp();

    const pairInfo = await fcl.query({
        cadence: `
        import SwapInterfaces from 0xddb929038d45d4b3                                     
        import SwapConfig from 0xddb929038d45d4b3                                         
                                                                                            
        pub fun main(pairAddr: Address): [AnyStruct] {                                                                                                                                                            
            let pairPublicRef = getAccount(pairAddr)                                         
            .getCapability<&{SwapInterfaces.PairPublic}>(SwapConfig.PairPublicPath)
            .borrow()                         
            ?? panic("cannot borrow reference to PairPublic resource")                     
                                                                                            
            return pairPublicRef.getPairInfo()                                               
        }
        `,
        args: (arg, t) => [arg(lpAddress, t.Address)]
    })
    console.log(pairInfo)
    return(pairInfo)
    }

    const addLiquidity = async () => {
    const pairInfo = await getPairInfo();

    const transactionId = await fcl.mutate({
        cadence: `
        import FungibleToken from 0x9a0766d93b6608b7
        import SwapFactory from 0xcbed4c301441ded2
        import SwapInterfaces from 0xddb929038d45d4b3
        import SwapConfig from 0xddb929038d45d4b3

        transaction(
            token0Key: String,
            token1Key: String,
            token0InDesired: UFix64,
            token1InDesired: UFix64,
            token0InMin: UFix64,
            token1InMin: UFix64
        ) {
            prepare(lp: AuthAccount) {
                let pairAddr = SwapFactory.getPairAddress(token0Key: token0Key, token1Key: token1Key)
                    ?? panic("AddLiquidity: nonexistent pair ".concat(token0Key).concat(" <-> ").concat(token1Key).concat(", create pair first"))
                let pairPublicRef = getAccount(pairAddr).getCapability<&{SwapInterfaces.PairPublic}>(SwapConfig.PairPublicPath).borrow()!
                /*
                    pairInfo = [
                        SwapPair.token0Key,
                        SwapPair.token1Key,
                        SwapPair.token0Vault.balance,
                        SwapPair.token1Vault.balance,
                        SwapPair.account.address,
                        SwapPair.totalSupply
                    ]
                */
                let pairInfo = pairPublicRef.getPairInfo()
                var token0In = 0.0
                var token1In = 0.0
                var token0Reserve = 0.0
                var token1Reserve = 0.0
                if token0Key == (pairInfo[0] as! String) {
                    token0Reserve = (pairInfo[2] as! UFix64)
                    token1Reserve = (pairInfo[3] as! UFix64)
                } else {
                    token0Reserve = (pairInfo[3] as! UFix64)
                    token1Reserve = (pairInfo[2] as! UFix64)
                }
                if token0Reserve == 0.0 && token1Reserve == 0.0 {
                    token0In = token0InDesired
                    token1In = token1InDesired
                } else {
                    var amount1Optimal = SwapConfig.quote(amountA: token0InDesired, reserveA: token0Reserve, reserveB: token1Reserve)
                    if (amount1Optimal <= token1InDesired) {
                        assert(amount1Optimal >= token1InMin, message: "SLIPPAGE_OFFSET_TOO_LARGE expect min".concat(token1InMin.toString()).concat(" got ").concat(amount1Optimal.toString()))
                        token0In = token0InDesired
                        token1In = amount1Optimal
                    } else {
                        var amount0Optimal = SwapConfig.quote(amountA: token1InDesired, reserveA: token1Reserve, reserveB: token0Reserve)
                        assert(amount0Optimal <= token0InDesired)
                        assert(amount0Optimal >= token0InMin, message: "SLIPPAGE_OFFSET_TOO_LARGE expect min".concat(token0InMin.toString()).concat(" got ").concat(amount0Optimal.toString()))
                        token0In = amount0Optimal
                        token1In = token1InDesired
                    }
                }
                
                let token0Vault <- lp.borrow<&FungibleToken.Vault>(from: /storage/USDCVault)!.withdraw(amount: token0In)
                let token1Vault <- lp.borrow<&FungibleToken.Vault>(from: /storage/fusdVault)!.withdraw(amount: token1In)
                /// SwapPair.addLiquidity()
                let lpTokenVault <- pairPublicRef.addLiquidity(
                    tokenAVault: <- token0Vault,
                    tokenBVault: <- token1Vault
                )
                
                let lpTokenCollectionStoragePath = SwapConfig.LpTokenCollectionStoragePath
                let lpTokenCollectionPublicPath = SwapConfig.LpTokenCollectionPublicPath
                var lpTokenCollectionRef = lp.borrow<&SwapFactory.LpTokenCollection>(from: lpTokenCollectionStoragePath)
                /// Initialize LpTokenCollection resource for lp if necessary.
                if lpTokenCollectionRef == nil {
                    destroy <- lp.load<@AnyResource>(from: lpTokenCollectionStoragePath)
                    lp.save(<-SwapFactory.createEmptyLpTokenCollection(), to: lpTokenCollectionStoragePath)
                    lp.link<&{SwapInterfaces.LpTokenCollectionPublic}>(lpTokenCollectionPublicPath, target: lpTokenCollectionStoragePath)
                    lpTokenCollectionRef = lp.borrow<&SwapFactory.LpTokenCollection>(from: lpTokenCollectionStoragePath)
                }
                lpTokenCollectionRef!.deposit(pairAddr: pairAddr, lpTokenVault: <- lpTokenVault)
            }
        }`,
        args: (arg, t) => [
        arg(pairInfo[0], t.String), 
        arg(pairInfo[1], t.String), 
        arg("10.0", t.UFix64), 
        arg("4.0", t.UFix64), 
        arg("8.0", t.UFix64), 
        arg("3.0", t.UFix64)
        ],
        payer: fcl.authz,
        proposer: fcl.authz,
        authorizations: [fcl.authz],
        limit: 999
        })
        
        const transaction = await fcl.tx(transactionId).onceSealed()
        console.log(transaction)
    }

    const InToOut = async () => {
    const Out = await fcl.query({
        cadence: `
        import SwapRouter from 0x2f8af5ed05bbde0d                           
        
        pub fun main(amountIn: UFix64, tokenKeyPath: [String]): [AnyStruct] {
        return SwapRouter.getAmountsOut(amountIn: amountIn, tokenKeyPath: tokenKeyPath)
        }
        `,
        args: (arg, t) => [
        arg("2.0", t.UFix64),
        arg(["A.a983fecbed621163.FiatToken", "A.7e60df042a9c0868.FlowToken", "A.e223d8a629e49c68.FUSD"], t.Array(t.String))
        ],
        payer: fcl.authz,
        proposer: fcl.authz,
        authorizations: [fcl.authz],
        limit: 999
        })
        
        return(Out)
    }

    const OutToIn = async () => {
    const In = await fcl.query({
        cadence: `
        import SwapRouter from 0x2f8af5ed05bbde0d                           
        
        pub fun main(amountOut: UFix64, tokenKeyPath: [String]): [AnyStruct] {
        return SwapRouter.getAmountsIn(amountOut: amountOut, tokenKeyPath: tokenKeyPath)
        }
        `,
        args: (arg, t) => [
        arg("2.0", t.UFix64),
        arg(["A.a983fecbed621163.FiatToken", "A.7e60df042a9c0868.FlowToken", "A.e223d8a629e49c68.FUSD"], t.Array(t.String))
        ],
        payer: fcl.authz,
        proposer: fcl.authz,
        authorizations: [fcl.authz],
        limit: 999
        })
        
        return(In)
    }

    const swapUsdcFusd = async () => {
    const transactionId = await fcl.mutate({
        cadence: `
        import FungibleToken from 0x9a0766d93b6608b7
        import SwapRouter from 0x2f8af5ed05bbde0d

        transaction(
            exactAmountIn: UFix64,
            amountOutMin: UFix64,
            path: [String],
            to: Address,
            deadline: UFix64
        ) {
            prepare(userAccount: AuthAccount) {
                let tokenInVaultPath = /storage/flowTokenVault
                let tokenOutReceiverPath = /public/USDCVaultReceiver

                let inVaultRef = userAccount.borrow<&FungibleToken.Vault>(from: tokenInVaultPath)
                    ?? panic("Could not borrow reference to the owner's in FT.Vault")
                /// Note: Receiver (to) should already have out FT.Vault initialized, otherwise tx reverts.
                let outReceiverRef = getAccount(to).getCapability(tokenOutReceiverPath)
                    .borrow<&{FungibleToken.Receiver}>()
                    ?? panic("Could not borrow receiver reference to the recipient's out FT.Vault")

                let exactVaultIn <- inVaultRef.withdraw(amount: exactAmountIn)
                let vaultOut <- SwapRouter.swapExactTokensForTokens(
                    exactVaultIn: <-exactVaultIn,
                    amountOutMin: amountOutMin,
                    tokenKeyPath: path,
                    deadline: deadline
                )
                outReceiverRef.deposit(from: <-vaultOut)
            }
        }
        `,
        args: (arg, t) => [
        arg("1.0", t.UFix64),
        arg("2.0", t.UFix64),
        arg(["A.a983fecbed621163.FiatToken", "A.7e60df042a9c0868.FlowToken", "A.e223d8a629e49c68.FUSD"], t.Array(t.String)),
        arg("0x3e0b67751ae9a885", t.Address),
        arg(Date.now().toString(), t.UFix64)
        ],
        payer: fcl.authz,
        proposer: fcl.authz,
        authorizations: [fcl.authz],
        limit: 999
        })
        
        const transaction = await fcl.tx(transactionId).onceSealed()
        console.log(transaction)
    }

    return (
        <>
            <div className='m-0 p-0' style={{ backgroundColor: 'rgb(244,239,255)', minHeight: '100vh' }}>
                <Navbar className='dashboard-header' style={{ marginLeft: '4.313rem', paddingRight: '4.313rem' }} sticky="top">
                    <Container className='ps-5 me-0'>
                        <Navbar.Brand className='fw-bold' style={{ fontSize: '30px', color: '#362465' }}>
                            {/* <DashboardIcon className='me-3' style={{fontSize:'30px'}}/> */}
                            <svg className='me-3' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="11" width="4" height="4" rx="2" fill="#2A353A"></rect><rect x="11" width="4" height="4" rx="2" fill="#2A353A"></rect><rect x="22" width="4" height="4" rx="2" fill="#2A353A"></rect><rect x="11" y="11" width="4" height="4" rx="2" fill="#2A353A"></rect><rect x="11" y="22" width="4" height="4" rx="2" fill="#2A353A"></rect><rect width="4" height="4" rx="2" fill="#2A353A"></rect><rect y="11" width="4" height="4" rx="2" fill="#2A353A"></rect><rect x="22" y="22" width="4" height="4" rx="2" fill="#2A353A"></rect><rect y="22" width="4" height="4" rx="2" fill="#2A353A"></rect></svg>
                            Liquidity Pool
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            {/* <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text> */}
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250 }}
                            >
                                <IconButton sx={{ p: '10px' }} aria-label="menu" style={{ color: '#9568ff' }}>
                                    <MenuIcon />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search here ..."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" style={{ color: '#9568ff' }}>
                                    <SearchIcon />
                                </IconButton>
                                {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                                    <DirectionsIcon />
                                </IconButton> */}
                            </Paper>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className="container p-0 py-5" style={{ marginLeft: '6.313rem' }}>
                    <div className='dz-side-menu h-100 shadow-lg'>
                        <div className='h-100 d-flex flex-column justify-content-between align-items-center'>
                            <Avatar style={{ backgroundColor: 'rgba(149,104,255,.1)' }}>
                                <AccountBalanceWalletIcon style={{ color: 'white' }} />
                            </Avatar>
                            <div className='d-flex flex-column justify-content-between h-25 '>
                                <Avatar style={{ backgroundColor: 'rgba(149,104,255,.1)' }} variant="rounded">
                                    <SettingsIcon style={{ color: 'white' }} />
                                </Avatar>
                                <Avatar style={{ backgroundColor: 'rgba(149,104,255,.1)' }} variant="rounded">
                                    <MailIcon style={{ color: 'white' }} />
                                </Avatar>
                                <Avatar style={{ backgroundColor: 'rgba(149,104,255,.1)' }} variant="rounded">
                                    <NotificationsIcon style={{ color: 'white' }} />
                                </Avatar>
                            </div>
                            <Avatar src="https://cryptozone.dexignzone.com/react/demo/static/media/pic1.1bdeb2403f02f0457cc6.jpg" />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-4'>
                            <div className='bg-light shadow rounded-4' style={{ width: '100%' }}>
                                <div className='w-100 text-center text-white py-3' style={{ borderRadius: '20px 20px 0 0', backgroundColor: 'rgb(237,230,251)' }}>
                                    <span className='fw-bold text-darkpurple' style={{ fontSize: '20px' }}>Liquidity Pool 1</span>
                                </div>
                                <img className='w-100' src={walletCoins} />
                                <div className='p-4'>
                                    <div className='row'>
                                        <div className='col'>
                                            <h4 className='fw-bold' style={{ color: '#362465' }}>Bitcoin</h4>
                                        </div>
                                        <div className='col-8'>
                                            <div className="input-group mb-3 w-100">
                                                <input disabled type="text" className="form-control" placeholder="Coin Value" aria-label="Coin Value" aria-describedby="basic-addon2" />
                                                <span className="input-group-text" id="basic-addon2">BTC</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col'>
                                            <h4 className='fw-bold' style={{ color: '#362465' }}>Flow</h4>
                                        </div>
                                        <div className='col-8'>
                                            <div className="input-group mb-3 w-100">
                                                <input disabled type="text" className="form-control" placeholder="Coin Value" aria-label="Coin Value" aria-describedby="basic-addon2" />
                                                <span className="input-group-text" id="basic-addon2">FLOW</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-dark shadow w-100' style={{ borderRadius: '0 0 20px 20px' }}>
                                    <Button className='py-3 w-50 fw-bold' style={{ borderRadius: '0 0 0 20px', fontSize: '15px' }} variant='contained'>Invest</Button>
                                    <Button className='py-3 w-50 fw-bold' style={{ borderRadius: '0 0 20px 0', fontSize: '15px' }} variant='contained'>Swap</Button>
                                </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='bg-light shadow rounded-4' style={{ width: '100%' }}>
                                <div className='w-100 text-center text-white py-3' style={{ borderRadius: '20px 20px 0 0', backgroundColor: 'rgb(237,230,251)' }}>
                                    <span className='fw-bold text-darkpurple' style={{ fontSize: '20px' }}>Liquidity Pool 1</span>
                                </div>
                                <img className='w-100' src={walletCoins} />
                                <div className='p-4'>
                                    <div className='row'>
                                        <div className='col'>
                                            <h4 className='fw-bold' style={{ color: '#362465' }}>Bitcoin</h4>
                                        </div>
                                        <div className='col-8'>
                                            <div className="input-group mb-3 w-100">
                                                <input disabled type="text" className="form-control" placeholder="Coin Value" aria-label="Coin Value" aria-describedby="basic-addon2" />
                                                <span className="input-group-text" id="basic-addon2">BTC</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col'>
                                            <h4 className='fw-bold' style={{ color: '#362465' }}>Flow</h4>
                                        </div>
                                        <div className='col-8'>
                                            <div className="input-group mb-3 w-100">
                                                <input disabled type="text" className="form-control" placeholder="Coin Value" aria-label="Coin Value" aria-describedby="basic-addon2" />
                                                <span className="input-group-text" id="basic-addon2">FLOW</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-dark shadow w-100' style={{ borderRadius: '0 0 20px 20px' }}>
                                    <Button className='py-3 w-50 fw-bold' style={{ borderRadius: '0 0 0 20px', fontSize: '15px' }} variant='contained'>Invest</Button>
                                    <Button className='py-3 w-50 fw-bold' style={{ borderRadius: '0 0 20px 0', fontSize: '15px' }} variant='contained'>Swap</Button>
                                </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='bg-light shadow rounded-4' style={{ width: '100%' }}>
                                <div className='w-100 text-center text-white py-3' style={{ borderRadius: '20px 20px 0 0', backgroundColor: 'rgb(237,230,251)' }}>
                                    <span className='fw-bold text-darkpurple' style={{ fontSize: '20px' }}>Liquidity Pool 1</span>
                                </div>
                                <img className='w-100' src={walletCoins} />
                                <div className='p-4'>
                                    <div className='row'>
                                        <div className='col'>
                                            <h4 className='fw-bold' style={{ color: '#362465' }}>Bitcoin</h4>
                                        </div>
                                        <div className='col-8'>
                                            <div className="input-group mb-3 w-100">
                                                <input disabled type="text" className="form-control" placeholder="Coin Value" aria-label="Coin Value" aria-describedby="basic-addon2" />
                                                <span className="input-group-text" id="basic-addon2">BTC</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col'>
                                            <h4 className='fw-bold' style={{ color: '#362465' }}>Flow</h4>
                                        </div>
                                        <div className='col-8'>
                                            <div className="input-group mb-3 w-100">
                                                <input disabled type="text" className="form-control" placeholder="Coin Value" aria-label="Coin Value" aria-describedby="basic-addon2" />
                                                <span className="input-group-text" id="basic-addon2">FLOW</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-dark shadow w-100' style={{ borderRadius: '0 0 20px 20px' }}>
                                    <Button className='py-3 w-50 fw-bold' style={{ borderRadius: '0 0 0 20px', fontSize: '15px' }} variant='contained'>Invest</Button>
                                    <Button className='py-3 w-50 fw-bold' style={{ borderRadius: '0 0 20px 0', fontSize: '15px' }} variant='contained'>Swap</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-100 p-5 m-0' style={{ height: '500px', backgroundColor: 'rgb(237,230,251)' }}>
                    <div className='row' style={{ marginLeft: '6.313rem' }}>
                        <h1 className='text-center fw-bold text-darkpurple'>Check</h1>
                        <div className='bg-white rounded-4 shadow row'>
                            <div className='col-4'>
                                <div className='p-5 rounded-4'>
                                    <h4>Choose Coin</h4>
                                    <FormControl className='w-100'>
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <h4 className='mt-4'>Number of Coins</h4>
                                    <div className="input-group mb-3 w-100">
                                        <input type="text" className="form-control py-3" placeholder="Coin Value" aria-label="Coin Value" aria-describedby="basic-addon2" />
                                        <span className="input-group-text" id="basic-addon2">Coin</span>
                                    </div>
                                </div>
                            </div>

                            <div className='col-4 align-self-center'>
                                <img className='w-100' src={coinExchange} />
                            </div>

                            <div className='col-4'>
                                <div className='p-5 rounded-4'>
                                    <h4>Final Coin</h4>
                                    <FormControl className='w-100'>
                                        <Select
                                            value={age}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <h4 className='mt-4'>Number of Coins</h4>
                                    <div className="input-group mb-3 w-100">
                                        <input type="text" className="form-control py-3" placeholder="Coin Value" aria-label="Coin Value" aria-describedby="basic-addon2" />
                                        <span className="input-group-text" id="basic-addon2">Coin</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <FooterMini/>
        </>
    );
}