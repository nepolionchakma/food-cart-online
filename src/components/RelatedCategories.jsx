import React from 'react';
import { Link } from 'react-router-dom';

const RelatedCategories = (relatedFood) => {
    const sliceData = relatedFood.relatedFood.slice(0, 8);
    // console.log(relatedFood.relatedFood, "slice", sliceData);
    return (
        <div className='flex flex-wrap justify-center gap-5 rounded-lg shadow'>
            {
                sliceData.map((d, i) => {
                    return (
                        <div key={i} className='shadow flex flex-col justify-center items-center p-4 hover:bg-orange-600 hover:text-white font-bold duration-500 my-4'>
                            <div className='w-[150px]'>
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
    );
};

export default RelatedCategories;