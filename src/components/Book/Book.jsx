import React from 'react';
import { IoMdStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookName, author, image, rating, bookId, tags, category } = book;
    return (
        //Daisy UI templates
        <div className="card bg-base-100 w-96 shadow-xl p-6 border">
            <figure className='bg-gray-200 py-8'>
                <img
                    src={image}
                    alt={bookName}
                    className='h-[180px] w-[120px]' />
            </figure>
            <div className="card-body">
                <div className='flex gap-4 items-center'>
                    {
                        tags.map((tag, idx) => <div key={idx} className="bg-gray-100 text-green-500 px-3 py-1 rounded-2xl text-sm">{tag}</div>)
                    }

                </div>
                <h2 className="card-title">
                    {bookName}
                </h2>
                <p className='pb-4 border-b-2 border-dashed'>By: {author}</p>
                <div className="card-actions justify-between pt-4">
                    <div className="font-bold text-sky-700">{category}</div>
                    <div className='flex gap-1 items-center'>
                        <div className="">Ratings: {rating} </div>
                        <IoMdStarOutline className='text-xl' />
                    </div>
                </div>
                <Link to={`/books/${bookId}`}>
                    <div className="card-actions justify-center mt-4">
                        <button className="btn bg-green-500 text-white">Show Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Book;