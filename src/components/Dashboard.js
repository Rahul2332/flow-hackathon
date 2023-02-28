import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Avatar, Button, TextField } from '@mui/material';
import { blue, pink, purple } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

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

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const Dashboard = () => {
    return (
        <>
            <div className='m-0 p-0' style={{ backgroundColor: 'rgb(244,239,255)', minHeight: '100vh' }}>
                <Navbar className='dashboard-header' style={{ marginLeft: '4.313rem', paddingRight:'4.313rem' }} sticky="top">
                    <Container className='ps-5 me-0'>
                        <Navbar.Brand className='fw-bold' style={{ fontSize: '30px', color: '#362465' }}>
                            {/* <DashboardIcon className='me-3' style={{fontSize:'30px'}}/> */}
                            <svg className='me-3' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="11" width="4" height="4" rx="2" fill="#2A353A"></rect><rect x="11" width="4" height="4" rx="2" fill="#2A353A"></rect><rect x="22" width="4" height="4" rx="2" fill="#2A353A"></rect><rect x="11" y="11" width="4" height="4" rx="2" fill="#2A353A"></rect><rect x="11" y="22" width="4" height="4" rx="2" fill="#2A353A"></rect><rect width="4" height="4" rx="2" fill="#2A353A"></rect><rect y="11" width="4" height="4" rx="2" fill="#2A353A"></rect><rect x="22" y="22" width="4" height="4" rx="2" fill="#2A353A"></rect><rect y="22" width="4" height="4" rx="2" fill="#2A353A"></rect></svg>
                            Dashboard
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
                                <IconButton sx={{ p: '10px' }} aria-label="menu" style={{color:'#9568ff'}}>
                                    <MenuIcon />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search here ..."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" style={{color:'#9568ff'}}>
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
                            <Avatar src="https://cryptozone.dexignzone.com/react/demo/static/media/pic1.1bdeb2403f02f0457cc6.jpg" />
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
                            <Avatar style={{ backgroundColor: 'rgba(149,104,255,.1)' }}>
                                <QuestionMarkIcon style={{ color: '#9568ff' }} />
                            </Avatar>
                        </div>
                    </div>

                    <div className="row" style={{ backgroundColor: 'rgb(244,239,255)' }}>
                        <div className="col-8">
                            <div className='container shadow-sm bg-white rounded-5' style={{ position: 'relative', overflow: 'hidden' }}>
                                <div className='row bubbles-down'>
                                    <div className='p-5 col-6 text-dark'>
                                        <h4 className='fw-bold mb-4' style={{ color: '#362465' }}>Buy & Sell 100+ Coins Instantly</h4>
                                        <p style={{ color: '#a098ae' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                        <Button variant='contained' className='rounded fw-bold mt-3' style={{ textTransform: 'capitalize', fontSize: '12px', backgroundColor: '#9467fe' }}>Buy Coin</Button>
                                    </div>
                                    <div className='col-6' style={{ alignSelf: 'self-end', transform: 'scaleX(-1)', zIndex: '2' }}>
                                        <img className='w-100' src='https://cryptozone.dexignzone.com/react/demo/static/media/coin.0c1dd5809911ec6b47f2.png' />
                                    </div>
                                    {/* <div className='bubbles-down'></div> */}
                                </div>
                            </div>

                            <div className='container mt-4'>
                                <div className='row'>
                                    <div className='col-4 d-flex justify-content-start'>
                                        <div className='bg-white shadow-sm rounded-5 py-4' style={{ width: '200px', height: '250px' }}>
                                            <div className='px-4'>
                                                <h4 className='fw-bold'>$ 2,478.90</h4>
                                                <h5 className='text-muted'>Total Balance</h5>
                                            </div>
                                            <img className='w-100' src={graph1} />
                                        </div>
                                    </div>

                                    <div className='col-4 d-flex justify-content-center'>
                                        <div className='bg-white shadow-sm rounded-5 py-4' style={{ width: '200px', height: '250px' }}>
                                            <div className='px-4'>
                                                <h4 className='fw-bold'>$ 3,27.23</h4>
                                                <h5 className='text-muted'>Profit & Loss</h5>
                                            </div>
                                            <img className='w-100' src={graph2} />
                                        </div>
                                    </div>

                                    <div className='col-4 d-flex justify-content-end'>
                                        <div className='bg-white shadow-sm rounded-5 py-4' style={{ width: '200px', height: '250px' }}>
                                            <div className='px-4'>
                                                <h4 className='fw-bold'>$ 2,478.90</h4>
                                                <h5 className='text-muted'>Total Deposit</h5>
                                            </div>
                                            <img className='w-100' src={graph3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4" style={{ backgroundColor: 'rgb(244,239,255)' }}>
                            <Tabs
                                defaultActiveKey="buy"
                                id="justify-tab-example"
                                className=""
                                style={{ borderRadius: '20px 20px 0 0' }}
                                justify
                            >
                                <Tab className='pt-5 shadow-sm bg-white' style={{ borderRadius: '0 0 20px 20px' }} eventKey="buy" title="BUY">
                                    <div className='container px-5 pb-4'>
                                        <div className='row'>
                                            <span className='col-4 text-gradient'>Price</span>
                                            <span className='col-8 text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{ background: 'none' }}> $3123.9</mark></span>
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">USDT</span>
                                        </div>

                                        <div className='row'>
                                            <span className='col text-gradient'>Amount</span>
                                            {/* <span className='col text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{background:'none'}}> $3123.9</mark></span> */}
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">BTC</span>
                                        </div>

                                        <div className='row'>
                                            <span className='col text-gradient'>Total</span>
                                            {/* <span className='col text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{background:'none'}}> $3123.9</mark></span> */}
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">USDT</span>
                                        </div>
                                        <div className='d-flex justify-content-center py-3'>
                                            <Button className='fw-bold px-5 py-2' style={{ background: '#9568ff' }} variant='contained'>Buy BTC</Button>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab className='pt-5 shadow-sm bg-white' style={{ borderRadius: '0 0 20px 20px' }} eventKey="sell" title="SELL">
                                    <div className='container px-5 pb-4'>
                                        <div className='row'>
                                            <span className='col-4 text-gradient'>Price</span>
                                            <span className='col-8 text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{ background: 'none' }}> $3123.9</mark></span>
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">USDT</span>
                                        </div>

                                        <div className='row'>
                                            <span className='col text-gradient'>Amount</span>
                                            {/* <span className='col text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{background:'none'}}> $3123.9</mark></span> */}
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">BTC</span>
                                        </div>

                                        <div className='row'>
                                            <span className='col text-gradient'>Total</span>
                                            {/* <span className='col text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{background:'none'}}> $3123.9</mark></span> */}
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">USDT</span>
                                        </div>
                                        <div className='d-flex justify-content-center py-3'>
                                            <Button className='fw-bold px-5 py-2' style={{ background: '#9568ff' }} variant='contained'>Sell BTC</Button>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    {/* <img className='mt-5' src={timeline}/> */}

                </div>


                {/* REDUNDANT */}
                <div className="container p-0 py-5" style={{ marginLeft: '6.313rem' }}>
                    <div className='dz-side-menu h-100 shadow-lg'>
                        <div className='h-100 d-flex flex-column justify-content-between align-items-center'>
                            <Avatar src="https://cryptozone.dexignzone.com/react/demo/static/media/pic1.1bdeb2403f02f0457cc6.jpg" />
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
                            <Avatar style={{ backgroundColor: 'rgba(149,104,255,.1)' }}>
                                <QuestionMarkIcon style={{ color: '#9568ff' }} />
                            </Avatar>
                        </div>
                    </div>

                    <div className="row" style={{ backgroundColor: 'rgb(244,239,255)' }}>
                        <div className="col-8">
                            <div className='container shadow-sm bg-white rounded-5' style={{ position: 'relative', overflow: 'hidden' }}>
                                <div className='row bubbles-down'>
                                    <div className='p-5 col-6 text-dark'>
                                        <h4 className='fw-bold mb-4' style={{ color: '#362465' }}>Buy & Sell 100+ Coins Instantly</h4>
                                        <p style={{ color: '#a098ae' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                        <Button variant='contained' className='rounded fw-bold mt-3' style={{ textTransform: 'capitalize', fontSize: '12px', backgroundColor: '#9467fe' }}>Buy Coin</Button>
                                    </div>
                                    <div className='col-6' style={{ alignSelf: 'self-end', transform: 'scaleX(-1)', zIndex: '2' }}>
                                        <img className='w-100' src='https://cryptozone.dexignzone.com/react/demo/static/media/coin.0c1dd5809911ec6b47f2.png' />
                                    </div>
                                    {/* <div className='bubbles-down'></div> */}
                                </div>
                            </div>

                            <div className='container mt-4'>
                                <div className='row'>
                                    <div className='col-4 d-flex justify-content-start'>
                                        <div className='bg-white shadow-sm rounded-5 py-4' style={{ width: '200px', height: '250px' }}>
                                            <div className='px-4'>
                                                <h4 className='fw-bold'>$ 2,478.90</h4>
                                                <h5 className='text-muted'>Total Balance</h5>
                                            </div>
                                            <img className='w-100' src={graph1} />
                                        </div>
                                    </div>

                                    <div className='col-4 d-flex justify-content-center'>
                                        <div className='bg-white shadow-sm rounded-5 py-4' style={{ width: '200px', height: '250px' }}>
                                            <div className='px-4'>
                                                <h4 className='fw-bold'>$ 3,27.23</h4>
                                                <h5 className='text-muted'>Profit & Loss</h5>
                                            </div>
                                            <img className='w-100' src={graph2} />
                                        </div>
                                    </div>

                                    <div className='col-4 d-flex justify-content-end'>
                                        <div className='bg-white shadow-sm rounded-5 py-4' style={{ width: '200px', height: '250px' }}>
                                            <div className='px-4'>
                                                <h4 className='fw-bold'>$ 2,478.90</h4>
                                                <h5 className='text-muted'>Total Deposit</h5>
                                            </div>
                                            <img className='w-100' src={graph3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4" style={{ backgroundColor: 'rgb(244,239,255)' }}>
                            <Tabs
                                defaultActiveKey="buy"
                                id="justify-tab-example"
                                className=""
                                style={{ borderRadius: '20px 20px 0 0' }}
                                justify
                            >
                                <Tab className='pt-5 shadow-sm bg-white' style={{ borderRadius: '0 0 20px 20px' }} eventKey="buy" title="BUY">
                                    <div className='container px-5 pb-4'>
                                        <div className='row'>
                                            <span className='col-4 text-gradient'>Price</span>
                                            <span className='col-8 text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{ background: 'none' }}> $3123.9</mark></span>
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">USDT</span>
                                        </div>

                                        <div className='row'>
                                            <span className='col text-gradient'>Amount</span>
                                            {/* <span className='col text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{background:'none'}}> $3123.9</mark></span> */}
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">BTC</span>
                                        </div>

                                        <div className='row'>
                                            <span className='col text-gradient'>Total</span>
                                            {/* <span className='col text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{background:'none'}}> $3123.9</mark></span> */}
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">USDT</span>
                                        </div>
                                        <div className='d-flex justify-content-center py-3'>
                                            <Button className='fw-bold px-5 py-2' style={{ background: '#9568ff' }} variant='contained'>Buy BTC</Button>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab className='pt-5 shadow-sm bg-white' style={{ borderRadius: '0 0 20px 20px' }} eventKey="sell" title="SELL">
                                    <div className='container px-5 pb-4'>
                                        <div className='row'>
                                            <span className='col-4 text-gradient'>Price</span>
                                            <span className='col-8 text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{ background: 'none' }}> $3123.9</mark></span>
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">USDT</span>
                                        </div>

                                        <div className='row'>
                                            <span className='col text-gradient'>Amount</span>
                                            {/* <span className='col text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{background:'none'}}> $3123.9</mark></span> */}
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">BTC</span>
                                        </div>

                                        <div className='row'>
                                            <span className='col text-gradient'>Total</span>
                                            {/* <span className='col text-end text-secondary'>BALANCE: <mark className='text-gradient fw-bold' style={{background:'none'}}> $3123.9</mark></span> */}
                                        </div>
                                        {/* <TextField className='w-100' id="filled-basic" label="USDT" placeholder='0.00' variant="filled" /> */}
                                        <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">USDT</span>
                                        </div>
                                        <div className='d-flex justify-content-center py-3'>
                                            <Button className='fw-bold px-5 py-2' style={{ background: '#9568ff' }} variant='contained'>Sell BTC</Button>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    {/* <img className='mt-5' src={timeline}/> */}

                </div>
            </div>
        </>
    );
}