import * as React from 'react';
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

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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