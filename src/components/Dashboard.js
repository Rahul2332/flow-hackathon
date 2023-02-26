import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button, TextField } from '@mui/material';

export const Dashboard = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <div className='container bg-dark p-5 rounded-5'>
                            <div className='row'>
                                <div className='col-6 text-white'>
                                    <h4>Buy & Sell 100+ Coins Instantly</h4>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                                </div>
                                <div className='col-4'>
                                    <img className='w-100' src='https://cryptozone.dexignzone.com/react/demo/static/media/coin.0c1dd5809911ec6b47f2.png' />
                                </div>
                            </div>
                            <Button variant='contained' className='rounded fw-bold mt-3' style={{textTransform:'capitalize', fontSize:'12px', backgroundColor:'#9467fe'}}>Buy Coin</Button>
                        </div>
                    </div>
                    <div className="col-4">
                        <Tabs
                            defaultActiveKey="buy"
                            id="justify-tab-example"
                            className="mb-3 rounded-4"
                            justify
                        >
                            <Tab className='shadow rounded-4' eventKey="buy" title="BUY">
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
                            <Tab className='shadow rounded-4' eventKey="sell" title="SELL">
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
            </div>
        </>
    );
}