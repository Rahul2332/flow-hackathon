import * as React from "react";
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

function generate(element) {

    const dbRef = ref(db);
    get(child(dbRef, `Companies`)).then((snapshot) => 
    {
        if (snapshot.exists()) {
            var allCompanies = snapshot.val();
            console.log("mc", allCompanies)
        } else {
            console.log("No data available");
        }
    });
    // console.log("hehe", allCompanies)
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
export const Admin = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  var allCompanies = []
  const MintTokens= async (e) => 
  {
    e.preventDefault();
    
  }


  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
   
      <Grid container spacing={2}>
       
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                    <Button onClick={MintTokens}> Click</Button>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
};
