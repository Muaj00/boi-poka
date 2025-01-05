import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[600px] px-16 rounded-xl mt-10 mb-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bookImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-wrap">Books to freshen up your bookshelf</h1>
                    <p className="py-6 w-2/3">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn bg-green-500 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;