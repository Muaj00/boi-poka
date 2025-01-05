import React from 'react';

const Book = ({ book }) => {

    const { bookName, author, image, rating, bookId } = book;
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6">
            <figure className='bg-gray-200 py-8'>
                <img
                    src={image}
                    alt={bookName}
                    className='h-[180px] w-[120px]' />
            </figure>
            <div className="card-body">
                <div className='flex gap-4 items-center'>
                    <div className="bg-gray-100 text-green-500 px-3 py-1 rounded-2xl">Young Adult</div>
                    <div className="bg-gray-100 text-green-500 px-3 py-1 rounded-2xl">Identity {bookId}</div>
                </div>
                <h2 className="card-title">
                    {bookName}
                </h2>
                <p className='pb-4 border-b-2 border-dashed'>By: {author}</p>
                <div className="card-actions justify-between pt-4">
                    <div className="">Ratings</div>
                    <div className="">{rating}</div>
                </div>
            </div>
        </div>
    );
};

export default Book;