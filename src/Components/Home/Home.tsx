import React from 'react'
import Header from '../Header';
import SearchBar from '../SearchBar';
import DisplayGrid from '../DisplayGrid';

const Home = () => {
    return(
        <div>
            <Header />
            <SearchBar />
            <DisplayGrid />
        </div>        
    )
}

export default Home;