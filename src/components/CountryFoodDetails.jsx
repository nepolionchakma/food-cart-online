import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CountryFoodDetails = () => {
    const load = useLoaderData();
    // const loadedData = load.meals;
    console.log(load.meals, "foof");
    return (
        <div>
            <div className='py-2 max-w-[1200px] mx-auto flex justify-center items-center xlsm:justify-around'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8 p-6'>
                    {
                        load.meals.map((d, i) => {
                            return (
                                <div key={i} className='group shadow flex flex-col justify-center items-center p-4 hover:bg-orange-600 hover:text-white font-bold duration-500 my-4'>
                                    <div className='w-[200px] overflow-hidden'>
                                        <img className='group-hover:scale-150 duration-[600ms] ' src={d.strMealThumb} alt="" />
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

export default CountryFoodDetails;