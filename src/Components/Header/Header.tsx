import React from 'react'
import RickMortyLogo from './img/logo.png'

const Header = () => {
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={RickMortyLogo} alt="logo" width="550px"/>
     </div>
         
    )
}

export default Header;