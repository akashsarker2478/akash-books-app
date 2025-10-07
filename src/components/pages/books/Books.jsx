import React from 'react';
import BookData from './BookData';

const Books = ({BooksData}) => {
    // console.log(BooksData)
    return (
        <div>
            <h2 className='font-bold text-center text-3xl'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 shadow-lg'>
                {
                BooksData.map(bookData=><BookData key={bookData.bookId} bookData={bookData}></BookData>)
            }
            </div>
        </div>
    );
};

export default Books;