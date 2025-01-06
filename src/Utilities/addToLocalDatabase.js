const getStoredList = () => {
    const storedListStr = localStorage.getItem('book-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        console.log(typeof storedList);
        return [...storedList];
    }
    else{
        return [];
    }
}

const addToStoredList = (id) => {
    const storedList = getStoredList(); 
    if(storedList.includes(id)){
        window.alert(id + 'is already exist in the list');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('book-list', storedListStr);
    }
}

export {addToStoredList, getStoredList}