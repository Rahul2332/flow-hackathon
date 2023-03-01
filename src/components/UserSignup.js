import { Button } from "@mui/material";
import * as fcl from "@onflow/fcl";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import companyNameLogo from '../images/angelFlow.png';

export const UserSignup = () => {
    const [user, setUser] = useState({ loggedIn: null })
    const navigate = useNavigate();

    const contractName = "AngelFlow";
    const adminAddress = "0x9f78a1504db85885";

    useEffect(() => {
        fcl.currentUser.subscribe(setUser)
      }, []);

    useEffect(() => {
        if(user.loggedIn){
            createTrader();

            navigate("/");
        }
        const createTrader = async () => {
            const transactionId = await fcl.mutate({
                cadence: `
                    import ${contractName} from ${adminAddress}
                    
                    transaction {
                        prepare(acct: AuthAccount) 
                        {
                            let vaultA <- ${contractName}.createVault(amount: 0.0)

                            let TraderA = ${contractName}.createTrader(tId: 123, tName: "User1", tWallet: 0xeb14454b4855b22f)
                            
                            acct.save<${contractName}.Trader>(TraderA, to: /storage/MainTrader)
                            acct.save<@${contractName}.Vault>(<-vaultA, to: /storage/MainVault)
                            log("Empty Vault stored")
                        
                            acct.link<&${contractName}.Vault{${contractName}.Receiver, ${contractName}.Balance}>(/public/MainReceiver, target: /storage/MainVault)
                            log("Public Receiver reference created!")

                            acct.link<&${contractName}.Trader{${contractName}.TraderProfile}>(/public/TraderProfile, target: /storage/MainTrader)
                            log("Public TraderProfile reference created!")
                    
                        }
                        post
                        {
                            getAccount(${user.addr}).getCapability<&${contractName}.Vault{${contractName}.Receiver}>(/public/MainReceiver)
                            .check():
                            "Vault Receiver Reference was not created correctly!"
                        
                            getAccount(${user.addr}).getCapability<&${contractName}.Trader{${contractName}.TraderProfile}>(/public/TraderProfile)
                            .check():
                            "Trader Profile Reference was not created correctly!"
                        }
                    }
                `,
                // args: (arg, t) => [arg("Apple",t.String), arg("apple@gmail.com",t.String), arg(1,t.UInt64), arg(user.addr,t.Address), arg(30.0,t.UFix64), arg(1.0,t.UFix64)],
                payer: fcl.authz,
                proposer: fcl.authz,
                authorizations: [fcl.authz],
                limit: 50,
            });
            const transaction = await fcl.tx(transactionId).onceSealed();
            console.log(transaction);
        }
    }, [user]);

    const signup = () => {
        if(!user.loggedIn){
            fcl.logIn()
        }
    }

    return (
        <>
            <div className="w-100 signup-div" style={{ height: '100vh' }}>
                <div className="bg-white h-100" style={{ width: '35%' }}>
                    <div className="container d-flex flex-column my-auto h-100 justify-content-center">
                        <img className="w-50 ps-2" src={companyNameLogo} />
                        <div className="px-3 py-4">
                            <h4 className="fw-bold">User Information</h4>
                            <p className="text-secondary">Enter Name</p>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="companyName" placeholder="User Name" />
                            </div>
                            <Button onClick={signup} className="container fw-bold my-3" variant='contained' style={{backgroundColor:'#9467fe',textTransform:'capitalize'}}>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}