import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button, TextField } from '@mui/material';

import graph1 from '../images/graph1.png';
import graph2 from '../images/graph2.png';
import graph3 from '../images/graph3.png';
import timeline from '../images/timeline.png'

export const Dashboard = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <div className='container shadow-lg bg-dark rounded-5'>
                            <div className='row'>
                                <div className='p-5 col-6 text-white'>
                                    <h4 className='fw-bold mb-4'>Buy & Sell 100+ Coins Instantly</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                    <Button variant='contained' className='rounded fw-bold mt-3' style={{ textTransform: 'capitalize', fontSize: '12px', backgroundColor: '#9467fe' }}>Buy Coin</Button>
                                </div>
                                <div className='col-6' style={{ alignSelf: 'self-end', transform: 'scaleX(-1)' }}>
                                    <img className='w-100' src='https://cryptozone.dexignzone.com/react/demo/static/media/coin.0c1dd5809911ec6b47f2.png' />
                                </div>
                            </div>

                        </div>

                        <div className='container mt-4'>
                            <div className='row'>
                                <div className='col-4 d-flex justify-content-center'>
                                    <div className='bg-white shadow-lg rounded-5 py-4' style={{ width: '200px', height: '250px' }}>
                                        <div className='px-4'>
                                            <h4 className='fw-bold'>$ 2,478.90</h4>
                                            <h5 className='text-muted'>Total Balance</h5>
                                        </div>
                                        <img className='w-100' src={graph1} />
                                    </div>
                                </div>

                                <div className='col-4 d-flex justify-content-center'>
                                    <div className='bg-white shadow-lg rounded-5 py-4' style={{ width: '200px', height: '250px' }}>
                                        <div className='px-4'>
                                            <h4 className='fw-bold'>$ 3,27.23</h4>
                                            <h5 className='text-muted'>Profit & Loss</h5>
                                        </div>
                                        <img className='w-100' src={graph2} />
                                    </div>
                                </div>

                                <div className='col-4 d-flex justify-content-center'>
                                    <div className='bg-white shadow-lg rounded-5 py-4' style={{ width: '200px', height: '250px' }}>
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
                    <div className="col-4">
                        <Tabs
                            defaultActiveKey="buy"
                            id="justify-tab-example"
                            className=""
                            justify
                        >
                            <Tab className='pt-5 shadow bg-white' eventKey="buy" title="BUY">
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
                            <Tab className='pt-5 shadow bg-white' eventKey="sell" title="SELL">
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
        </>
    );
}