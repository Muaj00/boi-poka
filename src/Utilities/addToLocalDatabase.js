import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const getStoredList = () => {
    const storedListStr = localStorage.getItem('book-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return [...storedList];
    }
    else{
        return [];
    }
}

const addToStoredList = (id) => {
    const storedList = getStoredList(); 
    if(storedList.includes(id)){
        toast.warning('This book is already exist in the list');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('book-list', storedListStr);
        toast.success('This book is added to your read list');
    }
}

export {addToStoredList, getStoredList}