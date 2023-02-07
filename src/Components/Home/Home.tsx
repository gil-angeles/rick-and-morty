import React from 'react'
import Header from '../Header';
import SearchBar from '../SearchBar';
import DisplayGrid from '../DisplayGrid';
import Pagination from '../Pagination';

const Home = () => {
    return(
        <div>
            <Header />
            <SearchBar />
            <Pagination />
            <DisplayGrid />
        </div>        
    )
}

export default Home;