import * as React from "react";
import { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ref,
  set,
  push,
  update,
  get,
  child,
} from "firebase/database";

import {db} from "../firebase"


const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const Admin = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const contractName = "AngelFlow";
  const adminAddress = "0x9f78a1504db85885";

  const [companyData, setCompanyData] = useState(null)
  const companyElement = [];
  useEffect(() => {
      // fetching companies
      if (companyData === null) {
        const dbRef = ref(db);
        get(child(dbRef, `Companies`)).then((snapshot) => 
        {
            if (snapshot.exists()) {
                var allCompanies = snapshot.val();
                // console.log("mc", allCompanies)
                setCompanyData(allCompanies);

                console.log(companyData)
            } else {
                console.log("No data available");
            }
        });
      }
      else{
        console.log(companyData)
      }
  }, []);

  const mintTokens = async (CompanyAddress, transactionAmount) => {
    transactionAmount = transactionAmount + ".0";
    const transactionId = await fcl.mutate({
      cadence: `
      // Mint Tokens

      import ${contractName} from ${adminAddress}
      
      // This transaction mints tokens and deposits them into account 3's vault
      transaction {
      
          // Local variable for storing the reference to the minter resource
          let mintingRef: &AngelFlow.TokenMinter
      
          // Local variable for storing the reference to the Vault of
          // the account that will receive the newly minted tokens
          var receiver: Capability<&AngelFlow.Vault{AngelFlow.Receiver}>
      
        prepare(acct: AuthAccount) {
              // Borrow a reference to the stored, private minter resource
              self.mintingRef = acct.borrow<&AngelFlow.TokenMinter>(from: /storage/MainMinter)
                  ?? panic("Could not borrow a reference to the minter")
              
              // Get the public account object for account 0x03
              let recipient = getAccount(${CompanyAddress})
      
              // Get their public receiver capability
              self.receiver = recipient.getCapability<&AngelFlow.Vault{AngelFlow.Receiver}>
              (/public/MainReceiver)
      
        }
      
          execute {
              // Mint 30 tokens and deposit them into the recipient's Vault
              self.mintingRef.mintTokens(amount: 30.0, recipient: self.receiver, cId: 122 )
      
              log("30 tokens minted and deposited to account 0xc2353367241c3a69")
          }
      }
      `,
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50,
    });

    const transaction = await fcl.tx(transactionId).onceSealed();
    console.log(transaction);
  };

  const createAdmin = async () => {
    const transactionId = await fcl.mutate({
      cadence: `
        // Transaction to be called from Admin (AngleFlow) Account
        import ${contractName} from ${adminAddress}
        
        transaction {
          prepare(acct: AuthAccount)
          {
        
            acct.link<&${contractName}.Vault{${contractName}.Provider}>(/public/MainProvider, target: /storage/MainVault)
            log("Public Provider reference created!")

            acct.link<&${contractName}.Vault{${contractName}.Receiver, ${contractName}.Balance}>(/public/MainReceiver, target: /storage/MainVault)
            log("Public Receiver reference created!")
            acct.link<&${contractName}.Company{${contractName}.CompanyProfile}>(/public/CompanyProfile, target: /storage/MainCompany)
            log("Public CompanyProfile reference created!")
            acct.link<&${contractName}.Trader{${contractName}.TraderProfile}>(/public/TraderProfile, target: /storage/MainTrader)
            log("Public TraderProfile reference created!") 
        
            //${contractName}.createCompany(cName: "Apple", cEmail: "abc", cId: 122, cWallet: 0x02, cTokenSupply: 0.0, cTokenPrice: 0.0)
            //${contractName}.createTrader(tId: 123, tName: "Rakshit", tWallet: 0x04)
        
        
          }
          post
          {

            getAccount(${adminAddress}).getCapability<&${contractName}.Vault{${contractName}.Provider}>(/public/MainProvider)
            .check():
            "Vault Provider Reference was not created correctly!"

            getAccount(${adminAddress}).getCapability<&${contractName}.Vault{${contractName}.Receiver}>(/public/MainReceiver)
            .check():
            "Vault Receiver Reference was not created correctly!"
        
            getAccount(${adminAddress}).getCapability<&${contractName}.Company{${contractName}.CompanyProfile}>(/public/CompanyProfile)
            .check():
            "Company Profile Reference was not created correctly!"
        
            getAccount(${adminAddress}).getCapability<&${contractName}.Trader{${contractName}.TraderProfile}>(/public/TraderProfile)
            .check():
            "Trader Profile Reference was not created correctly!"
          }
        }
      `,
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50,
    });

    const transaction = await fcl.tx(transactionId).onceSealed();
    console.log(transaction);
  };

  function makeCompanyList(){
    console.log(companyData)
    for(let company in companyData){
      if(!companyData[company].Minted){
        companyElement.push(
          <ListItem key={company.Name}>
            <Button onClick={()=>{mintTokens(companyData[company].Address, companyData[company].TransactionAmount)}}> Click</Button>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary={companyData[company].Name} secondary={secondary ? companyData[company].Name : null}/>
          </ListItem>
        )
      }
    }
  }

  if(companyData != null)
    makeCompanyList();

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <button onClick={createAdmin}>Create Admin</button>
      <Grid container spacing={2}>
       
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>
          <Demo>
            <List dense={dense}>
              {companyElement}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
};

/*
<ListItem>
  <Button onClick={MintTokens}> Click</Button>
  <ListItemIcon>
    <FolderIcon />
  </ListItemIcon>
  <ListItemText primary="Single-line item" secondary={secondary ? "Secondary text" : null}/>
</ListItem>
*/