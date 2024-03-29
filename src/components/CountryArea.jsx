import React from 'react';
import { Link } from 'react-router-dom';

const CountryArea = ({ data, code }) => {

    // console.log(data, code, 'data');
    // strArea
    return (
        <div>
            <Link to={`/country/food/${data}`} className=' hover:bg-orange-400 duration-500 flex flex-col cursor-pointer items-center justify-center content-center'>

                <div className='w-[100px] h-[100px] flex'>
                    <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`} alt="" />
                </div>
                {data}
            </Link>
        </div>
    );
};

export default CountryArea;