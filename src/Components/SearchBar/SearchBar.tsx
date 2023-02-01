import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SnowBallIcon from './img/snowball.png'

const SearchBar = () => {
    return(
        <FormControl variant="standard" style={{display: "flex", justifyContent: "center", alignItems: "center", width:"100%"}} >
        <OutlinedInput
          sx={{
            width:'500px'
          }}
          id="input-with-icon-adornment"          
          startAdornment={
            <InputAdornment position="start">
                <img src={SnowBallIcon} alt="logo" width="40px"/>              
            </InputAdornment>
          }
        />
      </FormControl>
    )
}

export default SearchBar;