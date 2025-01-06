import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredList } from '../../Utilities/addToLocalDatabase';

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)
    console.log(book);

    const handleRead = (id) =>{
        addToStoredList(id)
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='bg-base-200 min-w-[400px] lg:min-w-[550px] py-16 lg:py-36 rounded-2xl'>
                    <img
                        src={book.image}
                        className="max-w-44 lg:max-w-72 rounded-lg shadow-2xl  mx-auto" />
                </div>
                <div className='px-14 space-y-2 text-start'>
                    <h1 className="text-3xl lg:text-5xl font-bold text-sky-800">{book.bookName}</h1>
                    <p className='text-base pt-2 text-gray-800 font-semibold'>By: {book.author}</p>
                    <div className="divider"></div>
                    <h3 className='text-green-600 bg-sky-200 px-4 py-2 rounded-xl w-20'>{book.category}</h3>
                    <div className="divider"></div>
                    <p className="py-6 text-gray-600 text-justify"><span className='font-bold lg:text-xl text-sm'>Review: </span>
                        {book.review}
                    </p>
                    <div className='flex gap-4 items-center pb-4'>

                        <span>Tags </span>
                        {
                            book.tags.map((tag, idx) => <div key={idx} className="bg-gray-100 text-green-500 px-3 py-1 rounded-2xl text-xs">#{tag}</div>)
                        }

                    </div>
                    <div className="divider"></div>
                    <div className='gap-14 flex items-center'>
                        <p className='text-gray-600'>Number of Pages:</p>
                        <p className='font-bold'>{book.totalPages}</p>
                    </div>

                    <div className='gap-28 flex items-center'>
                        <p className='text-gray-600'>Publisher:</p>
                        <p className='font-bold'>{book.publisher}</p>
                    </div>

                    <div className='gap-12 flex items-center'>
                        <p className='text-gray-600'>Year of Publishing:</p>
                        <p className='font-bold'>{book.yearOfPublishing}</p>
                    </div>

                    <div className='gap-32 flex items-center'>
                        <p className='text-gray-600'>Rating:</p>
                        <p className='font-bold'>{book.rating}</p>
                    </div>
                    <div className='pt-6'>
                        <button onClick={() => handleRead(bookId)} className="btn btn-success mr-4 px-8  btn-outline">Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;