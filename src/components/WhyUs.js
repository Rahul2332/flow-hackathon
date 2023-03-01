import { Button } from "@mui/material";
import homePage from "../images/homePage.png"
import { useNavigate } from "react-router-dom";
import page1 from "../images/page1.png"
import page2 from "../images/page2.png"
import page3 from "../images/page3.png"

export const WhyUs = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="my-5">
                <div className="mb-5 pt-5">
                    <h1 className="display-5 fw-bold text-center" style={{ color: '#362465' }}>Invest</h1>
                    <h5 className='text-center w-50 mx-auto' style={{ color: '#7e87bf' }}>Buy, sell & swap the cryptocurrencies you want anytime, anywhere.</h5>
                </div>
                <div className="d-flex mb-5 pb-5">
                    <div className="w-50 px-4">
                        <div className="row p-4 text-white rounded-4 icon-bx-wraper style-2" style={{ width: '100%', backgroundColor: '#362465' }}>
                            <div className="pt-3 col-4">
                                <img src="https://cryptozone.dexignzone.com/frontend/react/static/media/wallet.bc0e49e4da0c0f41493831eb288692a6.svg" alt=""></img>
                            </div>
                            <div className="col-8">
                                <h4 className="fw-bold">Stock Exchange</h4>
                                <p className='mt-3' style={{ color: '#c5cdff' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                <Button onClick={()=>{navigate("/dashboard")}} variant='contained' style={{ textTransform: 'capitalize' }} className="my-2 fw-bold px-4 py-2 rounded-3 btn-gradient" >Invest Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 px-4">
                        <div className="row p-4 text-white rounded-4 icon-bx-wraper style-2" style={{ width: '100%', backgroundColor: '#362465' }}>
                            <div className="pt-3 col-4">
                                <img src="https://cryptozone.dexignzone.com/frontend/react/static/media/friend.6fca92a3966e56a26a49c10fd40ae9b3.svg" alt=""></img>
                            </div>
                            <div className="col-8">
                                <h4 className="fw-bold">Liquidity Pool</h4>
                                <p className='mt-3' style={{ color: '#c5cdff' }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                <Button onClick={()=>{navigate("/liquidity-pool")}} variant='contained' style={{ textTransform: 'capitalize' }} className="my-2 fw-bold px-4 py-2 rounded-3 btn-gradient" >Invest Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="" style={{height:'100vh'}}>
                <div className="mb-5 pt-5">
                    <h1 className="display-5 fw-bold text-center" style={{ color: '#362465' }}>The AngelFlow Universe</h1>
                    <h5 className='text-center w-50 mx-auto' style={{ color: '#7e87bf' }}>A whole ecosystem of modern investment apps
                        tailored to specific needs, built from the ground up</h5>
                </div>
                <div className="mb-5 py-5">
                    <div className="w-50 mx-auto" style={{zIndex:'3', position:'absolute', left:'25%'}}>
                        <div className="p-0 text-white rounded-4 icon-bx-wraper style-2" style={{ width: '100%', backgroundColor: '#362465' }}>
                            <img className="w-100 p-0 rounded-4" src={page1} />
                        </div>
                    </div>
                    <div className="ms-0" style={{width:'40%',zIndex:'2', position:'absolute', left:'8%'}}>
                        <div className="p-0 text-white rounded-4 icon-bx-wraper style-2" style={{ width: '100%', backgroundColor: '#362465', marginTop:'120px' }}>
                            <img className="w-100 p-0 rounded-4" src={page2} />
                        </div>
                    </div>
                    <div className="me-0" style={{width:'40%',zIndex:'2', position:'absolute', right:'8%'}}>
                        <div className="p-0 text-white rounded-4 icon-bx-wraper style-2" style={{ width: '100%', backgroundColor: '#362465', marginTop:'120px' }}>
                            <img className="w-100 p-0 rounded-4" src={page3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}