import React, { useEffect } from "react";
import { GetPageCharacters } from "../Hooks/ServerRequests";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CharacterCard from "../CharacterCard";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../Store/store";
import { setCount } from "../Reducer/SelectPageReducer";


const DisplayGrid = () => {
    const dispatch = useDispatch();
        
    const currentPage = useSelector((state: RootState)=> {
      return state.pagination.page})
    
    const {isLoading, data, error, refetch} = GetPageCharacters(currentPage);

    useEffect(()=> {          
      if(data){
        dispatch(setCount(data.info.pages));        
      }      
    }, [data]);

    useEffect(()=> {      
      refetch();     
    }, [currentPage]);


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