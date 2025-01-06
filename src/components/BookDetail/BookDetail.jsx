import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)
    console.log(book);
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='bg-base-200 min-w-[500px] py-28 rounded-2xl'>
                    <img
                        src={book.image}
                        className="max-w-72 rounded-lg shadow-2xl  mx-auto" />
                </div>
                <div className='px-14 space-y-2'>
                    <h1 className="text-5xl font-bold text-sky-800">{book.bookName}</h1>
                    <p className='text-base pt-2 text-gray-800 font-semibold'>By: {book.author}</p>
                    <div className="divider"></div>
                    <h3 className='text-green-600 bg-sky-200 px-4 py-2 rounded-xl w-20'>{book.category}</h3>
                    <div className="divider"></div>
                    <p className="py-6"><span className='font-bold text-xl'>Review: </span>
                        {book.review}
                    </p>
                    <div className='flex gap-4 items-center'>

                        <span>Tags </span>
                        {
                            book.tags.map((tag, idx) => <div key={idx} className="bg-gray-100 text-green-500 px-3 py-1 rounded-2xl text-xs">#{tag}</div>)
                        }

                    </div>
                    <div className='gap-14 flex items-center'>
                        <p className='font-bold'>Number of Pages:</p>
                        <p>{book.totalPages}</p>
                    </div>

                    <div className='gap-28 flex items-center'>
                        <p className='font-bold'>Publisher:</p>
                        <p>{book.publisher}</p>
                    </div>

                    <div className='gap-12 flex items-center'>
                        <p className='font-bold'>Year of Publishing:</p>
                        <p>{book.yearOfPublishing}</p>
                    </div>

                    <div className='gap-32 flex items-center'>
                        <p className='font-bold'>Rating:</p>
                        <p>{book.rating}</p>
                    </div>
                    <div className='flex-col md:flex-row pt-6'>
                        <button className="btn btn-success mr-4 px-8 text-white">Read</button>
                        <button className="btn btn-accent btn-outline">Wish List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;