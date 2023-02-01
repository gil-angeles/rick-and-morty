import React from "react";
import { GetAllCharacters } from "../Hooks/ServerRequests";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CharacterCard from "../CharacterCard";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const DisplayGrid = () => {
    const {isLoading, data, error} = GetAllCharacters();
    
    if(isLoading) return <div> Loading... </div>;
    
    if(error) return <div> Error </div>;
    
    return(
        <Box sx={{ flexGrow: 1, marginLeft: 10, marginRight: 10, marginTop: 10 }}>        
        <Grid key={`maincontainer`}container justifyContent="space-around" alignItems="center" >
          {data.results &&
            data.results.map((item: any) => (
                <CharacterCard item={item} />              
            ))
          }
        </Grid>
      </Box>
    )
}

export default DisplayGrid;