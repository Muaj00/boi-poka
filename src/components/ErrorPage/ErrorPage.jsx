import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mx-auto w-1/2 mt-24'>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?semt=ais_hybrid" alt="" className='w-1/2 mx-auto' />
            <h1 className='text-4xl text-red-800 font-bold text-center'>Page not found</h1>
            <div className='mt-9 ms-80'>
                <Link to="/" className=' bg-gray-700 text-white font-bold p-2'>Go Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;