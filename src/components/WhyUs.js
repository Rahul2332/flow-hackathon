import { Button } from "@mui/material";

export const WhyUs = () => {
    return (
        <>
            <div className="my-5">
                <div className="mb-5">
                    <h1 className="display-5 fw-bold text-center" style={{ color: '#362465' }}>Why Trust Us?</h1>
                    <h5 className='text-center w-50 mx-auto' style={{ color: '#7e87bf' }}>Trust comes from experience. Many of the pleased customers may function as a guide for you.</h5>
                </div>
                <div className="d-flex">
                    <div className="w-50 px-4">
                        <div className="row p-4 text-white rounded-4 icon-bx-wraper style-2" style={{width:'100%', backgroundColor:'#362465'}}>
                            <div className="pt-3 col-4">
                                <img src="https://cryptozone.dexignzone.com/frontend/react/static/media/wallet.bc0e49e4da0c0f41493831eb288692a6.svg" alt=""></img>
                            </div>
                            <div className="col-8">
                                <h4 className="fw-bold">Buy Cryptocurrency with cash</h4>
                                <p className='mt-3' style={{color:'#c5cdff'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                <Button variant='contained' style={{textTransform:'capitalize'}} className="my-2 fw-bold px-4 py-2 rounded-3 btn-gradient" >Read More</Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 px-4">
                        <div className="row p-4 text-white rounded-4 icon-bx-wraper style-2" style={{width:'100%', backgroundColor:'#362465'}}>
                            <div className="pt-3 col-4">
                                <img src="https://cryptozone.dexignzone.com/frontend/react/static/media/friend.6fca92a3966e56a26a49c10fd40ae9b3.svg" alt=""></img>
                            </div>
                            <div className="col-8">
                                <h4 className="fw-bold">Cryptocurrency Consultancy</h4>
                                <p className='mt-3' style={{color:'#c5cdff'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                <Button variant='contained' style={{textTransform:'capitalize'}} className="my-2 fw-bold px-4 py-2 rounded-3 btn-gradient" >Read More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}