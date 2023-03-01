import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref, update } from "firebase/database";
import { db } from "../firebase"
import * as fcl from "@onflow/fcl";
import { Button } from "@mui/material";
import companyNameLogo from "../images/angelFlow.png";
import "../config"

export const SignupPageSign = () => {
  const [user, setUser] = useState({ loggedIn: null });
  const [companyId, setCompanyId] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState(null); // NEW

  const navigate = useNavigate();

  const companyName = useRef("");
  const companyEmail = useRef("");
  const companyWallet = useRef("");
  const companyTokenPrice = useRef("");
  const numberOfTokens = useRef("");

  const contractName = "AngelFlow";
  const adminAddress = "0x9f78a1504db85885";

  useEffect(() => {
    fcl.currentUser.subscribe(setUser)
  }, []);

  useEffect( () => {

    const createUser = async () => {
      console.log(companyName.current.value);
      let CompanyId = hashCode(companyName.current.value);
      console.log(CompanyId);

      const transactionId = await fcl.mutate({
        cadence: `
        import ${contractName} from ${adminAddress}
        transaction {
            prepare(acct: AuthAccount)
            {
            let vaultA <- ${contractName}.createVault(amount: 0.0)

            let companyA = ${contractName}.createCompany(cName: "google", cEmail: "google@gmail.com", cId: 2, cWallet: 0xb82fd25a873578cf, cTokenSupply: 30.0, cTokenPrice: 1.0)

            acct.save<${contractName}.Company>(companyA, to: /storage/MainCompany)
            acct.save<@${contractName}.Vault>(<-vaultA, to: /storage/MainVault)
            log("Empty Vault stored")

            acct.link<&${contractName}.Vault{${contractName}.Receiver, ${contractName}.Balance}>(/public/MainReceiver, target: /storage/MainVault)
            log("Public Receiver reference created!")
            acct.link<&${contractName}.Company{${contractName}.CompanyProfile}>(/public/CompanyProfile, target: /storage/MainCompany)
            log("Public CompanyProfile reference created!")
            }
            post
            {
            getAccount(${user.addr}).getCapability<&${contractName}.Vault{${contractName}.Receiver}>(/public/MainReceiver)
            .check():
            "Vault Receiver Reference was not created correctly!"

            getAccount(${user.addr}).getCapability<&${contractName}.Company{${contractName}.CompanyProfile}>(/public/CompanyProfile)
            .check():
            "Company Profile Reference was not created correctly!"
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
      
      update(ref(db, `Companies/${CompanyId}`), {
        Wallet: String(user.addr),
        Name: companyName.current.value,
        Minted: false,
        TransactionAmount: numberOfTokens.current.value
      });
      navigate("/")
    }
    if (user.loggedIn) {
      createUser();
    }
    
  }, [user]);

  const hashCode = function (str) {
    var hash = 0,
      i,
      chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  };

  let companyStruct = [];

  const setCompanyAccount = async (e) => {
    e.preventDefault();
    if (!user.loggedIn)
      fcl.signUp();
  };


  return (
    <>
      {user.loggedIn ? 
      <>
        <h2>{user.addr}</h2>
        <button onClick={fcl.unauthenticate}>logout</button>
      </> 
      : <></>}
      <div className="w-100 signup-div" style={{ height: "100vh" }}>
        <div className="bg-white h-100" style={{ width: "35%" }}>
          <div className="container d-flex flex-column my-auto h-100 justify-content-center">
            <img className="w-50 ps-2" src={companyNameLogo} />
            <div className="px-3 py-4">
              <h4 className="fw-bold mb-4">Sign Up Forum</h4>
              <p
                className="text-black fw-bold mb-1"
                style={{ fontSize: "13px" }}
              >
                Enter Company Name
              </p>
              <div className="mb-4">
                <input
                  style={{ fontSize: "13px" }}
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Company Name"
                  ref={companyName}
                />
              </div>
              <p
                className="text-black fw-bold mb-1"
                style={{ fontSize: "13px" }}
              >
                Enter Company Email
              </p>
              <div className="mb-4">
                <input
                  style={{ fontSize: "13px" }}
                  type="email"
                  className="form-control"
                  id="companyEmail"
                  placeholder="Company Email"
                  ref={companyEmail}
                />
              </div>
              <p
                className="text-black fw-bold mb-1"
                style={{ fontSize: "13px" }}
              >
                Enter Company Valuation
              </p>
              <div className="mb-4">
                <input
                  style={{ fontSize: "13px" }}
                  type="number"
                  className="form-control"
                  id="companyTokenPrice"
                  placeholder="Company Valuation"
                  ref={companyTokenPrice}
                />
              </div>
              <p
                className="text-black fw-bold mb-1"
                style={{ fontSize: "13px" }}
              >
                Enter Company Token Supply
              </p>
              <div className="mb-4">
                <input
                  style={{ fontSize: "13px" }}
                  type="number"
                  className="form-control"
                  id="numberOfTokens"
                  placeholder="Company Token Supply"
                  ref={numberOfTokens}
                />
              </div>
              <Button
                className="container fw-bold my-3"
                variant="contained"
                onClick={setCompanyAccount}
                style={{
                  backgroundColor: "#9467fe",
                  textTransform: "capitalize",
                }}
              >
                Sign Up
              </Button>

              <p className="mt-3">Already Registered ?</p>
              <Button
                className="container fw-bold mb-3"
                variant="outlined"
                style={{
                  borderColor: "#9467fe",
                  color: "#9467fe",
                  textTransform: "capitalize",
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
