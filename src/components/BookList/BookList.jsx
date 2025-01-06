import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredList } from '../../Utilities/addToLocalDatabase';
import ReadList from '../ReadList/ReadList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { IoMdArrowDropdown } from "react-icons/io";

const BookList = () => {
    //state for read book list
    const [readList, setReadList] = useState([]);

    //state for sorting
    const [sort, setSort] = useState('');

    //loading the data
    const allBooks = useLoaderData();

    //handling side effects while geting data from local storage
    useEffect(() => {
        const storedBookList = getStoredList();
        const storedBookListInt = storedBookList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedBookListInt.includes(book.bookId));
        setReadList(readBookList);
    }, []);

    // sorting click handler
    const handleSort = sortType => {
        setSort(sortType);

        if(sortType === 'Ratings'){
            const sortedReadList = [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(sortedReadList);
            toast.success('Books are sorted by ratings with assending order')
        }
        if(sortType === 'Pages'){
            const sortedReadList = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);
            toast.success('Books are sorted by pages with assending order')
        }
    }
    return (
        <div>
            <h2 className="text-5xl my-10 bg-slate-200 text-center p-4 rounded-2xl">Books</h2>

            {/* Sort By function starts*/}
            <details className="dropdown">
                <summary className="btn m-1 bg-green-500 text-white">
                    {
                        sort ? `Sort By ${sort}` : 'Sort by'
                    }
                    <IoMdArrowDropdown />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSort('Pages')}><a>Number of Pages</a></li>
                </ul>
            </details>
            {/* Sort By function ends*/}

            <div role="tablist" className="tabs tabs-bordered ">
                <a role="tab" className="tab my-5 justify-start text-2xl mb-2 font-bold text-green-600">Total book reads {readList.length}</a>
            </div>

            <div>
                {
                    readList.map(readBooks => <ReadList key={readBooks.bookId} readBooks={readBooks}></ReadList>)
                }
            </div>

        </div>
    );
};

export default BookList;