import React from 'react';
import { Link } from 'react-router-dom';

const ABCD = () => {
    const abcdefg = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return (
        <div className='p-6 max-w-[1200px] mx-auto my-6'>
            <h5 className=''></h5>
            <div className='font-bold text-center my-5'>Filter By Alphabate</div>
            <div className=' flex flex-wrap justify-center'>
                {abcdefg.map((a, i) => {
                    return (
                        <div key={i} className='mx-2'>
                            <p className='font-bold cursor-pointer'><span className='hover:text-orange-600 uppercase text-xl duration-500'>{a}</span></p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ABCD;