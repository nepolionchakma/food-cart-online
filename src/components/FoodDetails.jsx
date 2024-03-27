import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';

const FoodDetails = () => {
    const loadData = useLoaderData();
    const { strMeal, strArea, strCategory, strInstructions, strMealThumb, strYoutube } = loadData.meals[0];
    // console.log(loadedData);
    return (
        <div>
            <Header></Header>
            <div className='py-2 my-8 max-w-[1200px] mx-auto flex justify-center items-center xlsm:justify-around'>
                <div className='flex items-center flex-col'>
                    <h3 className='font-bold text-center text-xl'>Name Food : <span className='text-orange-500'>{strMeal}</span></h3>
                    <div className='w-[100px] my-6'>
                        <img src={strMealThumb} alt="" />
                    </div>
                    <span>Area :{strArea}</span>
                    <br />
                    <span>Category : {strCategory}</span>
                    <p className='my-3'>{strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;