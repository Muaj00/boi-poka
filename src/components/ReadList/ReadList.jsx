import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

const ReadList = ({ readBooks }) => {


    return (
        <div className="card card-side bg-base-100 shadow-xl my-8 flex-col lg:flex-row">
            <figure className='bg-gray-200 py-8 px-8'>
                <img
                    src={readBooks.image}
                    className='h-[180px] w-[150px]'
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h1 className="text-4xl font-bold text-sky-800">{readBooks.bookName}</h1>
                <p className='text-base pt-2 text-gray-800 font-semibold'>By: {readBooks.author}</p>
                <div className="divider"></div>
                <div className='flex gap-4 items-center pb-4'>

                    <span>Tags </span>
                    {
                        readBooks.tags.map((tag, idx) => <div key={idx} className="bg-gray-100 text-green-500 px-3 py-1 rounded-2xl text-xs">#{tag}</div>)
                    }
                    <span className='flex items-center gap-2'>
                        <CiLocationOn className='text-lg' />
                        Year of Publishing: {readBooks.yearOfPublishing}
                    </span>

                </div>

                <div className='flex items-center gap-5'>
                    <span className='flex items-center gap-2'>
                        <CiLocationOn className='text-lg' />
                        Publisher: {readBooks.publisher}
                    </span>
                    
                    <span className='flex items-center gap-2'>
                        <CiLocationOn className='text-lg' />
                        Total Pages: {readBooks.totalPages}
                    </span>

                </div>
                
                <div className="divider"></div>

                <div className='flex items-center gap-5'>
                    <span className='px-3 py-1 bg-sky-200 text-sky-600 font-semibold rounded-2xl'>
                        Category: {readBooks.category}
                    </span>
                    <span className='px-3 py-1 bg-orange-200 text-orange-600 font-semibold rounded-2xl'>
                        Rating: {readBooks.rating}
                    </span>
                </div>
                
                <div className="card-actions justify-end">
                    <Link to={`/books/${readBooks.bookId}`}  className="btn btn-success text-white">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ReadList;