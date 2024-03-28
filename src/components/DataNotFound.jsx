import React from 'react';
import { Link } from 'react-router-dom';

const DataNotFound = (searchValue) => {
    console.log(searchValue.searchValue);
    return (
        <div className='flex flex-col justify-center items-center my-[100px]'>
            <h1 className='text-red-600 font-bold text-4xl my-5'>OOPS!!</h1>
            <h5>"{searchValue.searchValue}"</h5>
            <h5 className='font-bold'>Data not Found</h5>
            <button><Link to='/'>Home</Link></button>
        </div>
    );
};

export default DataNotFound;