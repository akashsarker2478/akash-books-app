
import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const BookData = ({bookData}) => {
    const {image,bookName,author,rating,bookId,totalPages,category,yearOfPublishing,tags} = bookData
    // console.log(bookData)
    return (
        <div>
          <Link to={`/bookDetails/${bookId}`}>
             <div className="card bg-base-100 border-1 shadow-lg">
  <figure className='bg-gray-200 m-5 rounded-2xl'>
    <img className='p-6 w-36 h-44'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex'>
      {
        tags.map(tag =><p className='text-center text-[16px] font-semibold'>{tag}</p>)
      }
    </div>
    <h2 className="card-title text-2xl">
      {bookName}
      <div className="badge badge-secondary"> page:{totalPages}</div>
    </h2>
    <h4 className='font-semibold text-xl'>By : {author} </h4>
    <h3 className='font-semibold'>Publishing Year : {yearOfPublishing}</h3>
    <div className='border-t border-dashed border-gray-500 p-4'></div>
    <div className="card-actions justify-between">
      <div className="badge font-semibold">{category}</div>
      <div className="badge font-semibold">{rating}<Star size={15}></Star></div>
    </div>
  </div>
</div>
          </Link>
        </div>
    );
};

export default BookData;