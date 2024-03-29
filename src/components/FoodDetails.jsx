import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RelatedCategories from './RelatedCategories';

const FoodDetails = () => {

    const loadData = useLoaderData();
    const { strMeal, strArea, strCategory, strInstructions, strMealThumb, strYoutube } = loadData.meals[0];
    const [relatedFood, setRelatedFood] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
            .then(res => res.json())
            .then(data => setRelatedFood(data.meals))
    }, [])
    // console.log(relatedFood);
    return (
        <div className='py-2 my-8 max-w-[1200px] mx-auto'>
            <div className=' flex justify-center items-center xlsm:justify-around'>
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
            <hr />
            <div className='my-4'>
                <h4 className='text-center font-bold text-xl'>Related Food</h4>
                <RelatedCategories relatedFood={relatedFood} />
            </div>
        </div>
    );
};

export default FoodDetails;