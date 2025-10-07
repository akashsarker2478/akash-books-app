const getStoredBook = ()=>{
const storedBookSTR = localStorage.getItem('readList');
if(storedBookSTR){
   const storedBookData = JSON.parse(storedBookSTR)
    return storedBookData
}
else{
    return []
}
}

const addBookStoreDB = (id)=>{
const storedBookData = getStoredBook()
if(storedBookData.includes(id)){
    alert('this ID already exist')
    return;
}
else{
    storedBookData.push(id)
    const data = JSON.stringify(storedBookData)
    localStorage.setItem('readList',data)
}
}
export {addBookStoreDB,getStoredBook}