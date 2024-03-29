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
            <div className='py-2 max-w-[1200px] mx-auto'>
                <h5 className='text-center'>Seach Word : '{searchValue}'</h5>
                <div className={load.meals == null ? "" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 px-4 my-8 mx-auto"} >
                    {
                        load.meals == null ? <DataNotFound searchValue={searchValue}></DataNotFound> : load.meals.map((d, i) => {
                            return (
                                <div key={i} className='shadow group flex flex-col justify-center items-center p-4 hover:bg-orange-600 hover:text-white font-bold duration-500 my-4'>
                                    <div className='w-[200px] overflow-hidden'>
                                        <img className='group-hover:scale-150 duration-[600ms]' src={d.strMealThumb} alt="" />
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