import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredList } from '../../Utilities/addToLocalDatabase';
import ReadList from '../ReadList/ReadList';

const BookList = () => {
    const [readList, setReadList] = useState([]);
    console.log(readList);
    const allBooks = useLoaderData();
    //geting data from local storage
    useEffect(() => {
        const storedBookList = getStoredList();
        const storedBookListInt = storedBookList.map(id => parseInt(id));
        // console.log(storedBookList, allBooks);

        const readBookList = allBooks.filter(book => storedBookListInt.includes(book.bookId));
        setReadList(readBookList);
    }, []);
    return (
        <div>
            <h2 className="text-5xl my-10">Book List</h2>
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