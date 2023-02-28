import { Button } from "@mui/material";
import * as fcl from "@onflow/fcl";
import { useNavigate } from "react-router-dom";
import companyNameLogo from '../images/companyName.png';

export const SignupPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-100 signup-div" style={{ height: '100vh' }}>
                <div className="bg-white h-100" style={{ width: '35%' }}>
                    <div className="container d-flex flex-column my-auto h-100 justify-content-center">
                        <img className="w-50 ps-2" src={companyNameLogo} />
                        <div className="px-3 py-4">
                            <h4 className="fw-bold">Personal Information</h4>
                            <p className="text-secondary">Enter Company Name</p>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="companyName" placeholder="Company Name" />
                            </div>
                            <Button onClick={fcl.logIn} className="container fw-bold my-3" variant='contained' style={{backgroundColor:'#9467fe',textTransform:'capitalize'}}>Login</Button>

                            <p className="mt-5">Don't have an account ?</p>
                            <Button onClick={()=>{navigate("/signup")}} className="container fw-bold mb-3" variant='outlined' style={{borderColor:'#9467fe', color:'#9467fe',textTransform:'capitalize'}}>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}