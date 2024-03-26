import React from 'react';
import { Link } from 'react-router-dom';

const ABCD = () => {
    const abcdefg = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return (
        <div className='py-2 max-w-[1200px] mx-auto items-center my-6 grid grid-cols-12'>
            {abcdefg.map((a, i) => {
                return (
                    <div key={i}>
                        <p>{a}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default ABCD;