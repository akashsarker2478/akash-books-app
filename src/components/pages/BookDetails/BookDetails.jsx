import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addBookStoreDB } from '../utility/addTODB';


const BookDetails = () => {

    const {id}= useParams()
    const bookId = parseInt(id)
   const detailsBook  = useLoaderData()
   const singleBook = detailsBook.find(book => book.bookId===bookId)
   console.log(singleBook)
   const {image,bookName,author,category,review,tags,yearOfPublishing,totalPages,publisher,rating} = singleBook;
    const handleMarkAsRead = (id)=>{
        addBookStoreDB(id)
    }
    return (
        <div>
    <div className="card md:card-side bg-base-100 shadow-sm my-5 rounded-xl rounded-r-xl">
  <figure className='bg-gray-200 h-[700px] mx-20 my-5'>
    <img className='w-[350px]  p-6'src={image}/>
  </figure>
  <div className='md:w-[700px] mt-5 px-4'>
    <h2 className="card-title font-bold md:text-4xl">{bookName}</h2>
    <p className='font-semibold'>By : {author}</p>
    <div className='border-t border-dotted mt-3'></div>
    <h2 className='text-[20px] font-medium'>{category}</h2>
    <div className='border-t border-dotted mt-2'></div>
    <div className='mt-5'>
        <p><span className='font-bold'>Review :</span> {review}</p>
    </div>
    <div className='flex gap-10 font-bold mt-3'>Tag :
        {
            tags.map(tag => <p className='text-[#23BE0A] bg-[#ebf1ea] px-3 rounded-xl'>#{tag}</p>)
        }
    </div>
    <div className='border-t border-dotted mt-5'></div>
    <div className='my-5'>
         <div className='flex'>
        <p className='w-48 font-semibold text-gray-700'>Publisher:</p>
        <p className='ml-2 font-medium'>{publisher}</p>
    </div>
    <div className='flex'>
        <p className='w-48 font-semibold text-gray-700'>Page :</p>
        <p className='ml-2 font-medium'>{totalPages}</p>
    </div>

    <div className='flex'>
        <p className='w-48 font-semibold text-gray-700'>Year of Publishing :</p>
        <p className='ml-2 font-medium'>{yearOfPublishing}</p>
    </div>
    
    <div className='flex'>
        <p className='w-48 font-semibold text-gray-700'>Rating:</p>
        <p className='ml-2 font-medium'>{rating}</p>
    </div>
 
    </div>
    <button onClick={()=>handleMarkAsRead(id)} className="btn btn-secondary m-3">Mark as read</button>
    <button className="btn btn-accent m-3">Add to Wish List</button>
  </div>
</div>
    </div>
    );
};

export default BookDetails;