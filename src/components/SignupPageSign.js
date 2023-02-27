import { Button } from "@mui/material";
import companyName from '../images/companyName.png';

export const SignupPageSign = () => {
    return (
        <>
            <div className="w-100 signup-div" style={{ height: '100vh' }}>
                <div className="bg-white h-100" style={{ width: '35%' }}>
                    <div className="container d-flex flex-column my-auto h-100 justify-content-center">
                        <img className="w-50 ps-2" src={companyName} />
                        <div className="px-3 py-4">
                            <h4 className="fw-bold mb-4">Sign Up Forum</h4>
                            <p className="text-secondary mb-2">Enter Company Name</p>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="companyName" placeholder="Company Name" />
                            </div>
                            <p className="text-secondary mb-2">Enter Company Email</p>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="companyEmail" placeholder="Company Email" />
                            </div>
                            <p className="text-secondary mb-2">Enter Company Valuation</p>
                            <div className="mb-3">
                                <input type="number" className="form-control" id="companyVal" placeholder="Company Valuation" />
                            </div>
                            <p className="text-secondary mb-2">Enter Company Token Supply</p>
                            <div className="mb-3">
                                <input type="number" className="form-control" id="companyToken" placeholder="Company Token Supply" />
                            </div>
                            <Button className="container fw-bold my-3" variant='contained' style={{backgroundColor:'#9467fe',textTransform:'capitalize'}}>Sign Up</Button>

                            <p className="mt-3">Already Registered ?</p>
                            <Button className="container fw-bold mb-3" variant='outlined' style={{borderColor:'#9467fe', color:'#9467fe',textTransform:'capitalize'}}>Login</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}