import React, { useState } from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';

const CategoryItemDetails = (handleCart) => {

    // console.log(data.idCategory);
    // const [cart, setCart] = useState([]);
    const ser = useSearchParams();
    // searchParams.get("__firebase_request_key")
    const load = useLoaderData();
    // console.log(load.meals, "data");
    // console.log(handleCart);
    // const handleCart = (id) => {
    //     // setCart(id);
    //     console.log(alert("clicked"));
    // }
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

export default CategoryItemDetails;