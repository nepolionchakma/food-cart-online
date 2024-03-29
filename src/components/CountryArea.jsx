import React from 'react';
import { Link } from 'react-router-dom';

const CountryArea = ({ data, code }) => {

    // console.log(data, code, 'data');
    // strArea
    return (
        <div>
            <Link to={`/country/food/${data}`} className=' hover:bg-orange-400 duration-500 flex flex-col cursor-pointer items-center justify-center content-center p-3 rounded-lg group'>

                <div className='w-[100px] h-[100px] flex'>
                    <img className='group-hover:scale-90 duration-500' src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`} alt="" />
                </div>
                <span className='group-hover:scale-125 duration-500'>{data}</span>
            </Link>
        </div>
    );
};

export default CountryArea;