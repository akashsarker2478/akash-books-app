import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../utility/addTODB';
import BookData from '../books/BookData';

const Readlist = () => {
    const [readlist,setReadlist] = useState([])
    const data = useLoaderData();
    console.log(data)
    useEffect(()=>{
        const getLsData = getStoredBook()
        const convertLsData = getLsData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertLsData.includes(book.bookId))
        setReadlist(myReadList)
    },[])
    
    return (
        <div>
           <Tabs>
    <TabList>
      <Tab><span className='font-semibold'>Read book List</span></Tab>
      <Tab><span className='font-semibold'>My wish List</span></Tab>
    </TabList>

    <TabPanel>
      <h2>My read book : {readlist.length}</h2>
     <div className='grid md:grid-cols-2 gap-5 my-5'>
         {
        readlist.map(b =><BookData key ={b.bookId} bookData ={b}></BookData>)
      }
     </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Readlist;