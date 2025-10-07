import React from 'react';
import Banner from '../../Header/Banner';
import Books from '../books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const BooksData = useLoaderData();
    // console.log(BooksData)
    return (
        <div>
            <Banner></Banner>
            <Books BooksData={BooksData}></Books>
        </div>
    );
};

export default Home;