import React, { useState } from 'react';
import Header from './Header';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';

const CategoryItemDetails = () => {

    // console.log(data.idCategory);
    // const [cart, setCart] = useState([]);
    const ser = useSearchParams();
    // searchParams.get("__firebase_request_key")
    console.log(ser);
    const load = useLoaderData();
    // console.log(load.meals, "data");
    // console.log(handleCart);
    // const handleCart = (id) => {
    //     setCart(id);
    //     console.log(cart);
    // }
    return (
        <div>
            <div className='py-2 max-w-[1200px] mx-auto flex justify-center items-center xlsm:justify-around'>
                <div className='grid grid-cols-5 gap-5 my-8 '>
                    {
                        load.meals.map((d, i) => {
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

export default CategoryItemDetails;