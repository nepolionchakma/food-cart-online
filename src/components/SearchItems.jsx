import React from 'react';
import { Link, useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import DataNotFound from './DataNotFound';

const SearchItems = () => {
    // const id = new URLSearchParams(window.location.search);
    // console.log(id);
    const { searchValue } = useParams();
    const load = useLoaderData();
    // console.log(searchValue, "searchValue");
    return (
        <div>
            <div className='py-2 max-w-[1200px] mx-auto flex flex-col justify-center items-center xlsm:justify-around'>
                <h5>Seach Word : '{searchValue}'</h5>
                <div className={load.meals == null ? "" : "grid grid-cols-5 gap-4 my-8"} >
                    {
                        load.meals == null ? <DataNotFound searchValue={searchValue}></DataNotFound> : load.meals.map((d, i) => {
                            return (
                                <div key={i} className='shadow flex flex-col justify-center items-center p-4 hover:bg-orange-600 hover:text-white font-bold duration-500 my-4'>
                                    <div className='w-[100px]'>
                                        <img src={d.strMealThumb} alt="" />
                                    </div>
                                    <p className='my-3'>{d.strMeal}</p>
                                    <Link to={`/details/food/${d.idMeal}`}>Ditails</Link>
                                    <button>Cart</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchItems;