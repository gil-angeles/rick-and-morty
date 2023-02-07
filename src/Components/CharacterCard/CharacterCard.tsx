import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const classes = {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 20,
      textAlign: "center",
      color: "blue",
      fontFamily: "Roboto"
    }
  };

const CharacterCard = ({item}: any) => {    
    return(
        <Card sx={{ width: 450, margin: 1 }}>
            <Grid key={item.id} container >            
                <Grid key={`${1}-item.name`} item xs={6}>
                <img src={item.image} alt="logo" width="200px"/>
                </Grid>
                <Grid key={`${2}-item.name`}item xs={6} >
                <Typography variant="h6">
                    {item.name}
                </Typography>
                <Typography>
                    {item.species}
                </Typography>
                <Typography>
                    {item.status}
                </Typography>
                </Grid>
                <Grid key={`${3}-item.name`}item xs={12}>
                <Typography variant="h6">
                    {item.location.name}                
                </Typography>
                </Grid>
            </Grid>
      </Card>
   
    )
}

export default CharacterCard