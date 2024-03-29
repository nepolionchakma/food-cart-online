import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';

const FoodCategory2 = () => {
    const load = useLoaderData();
    const loadData = load.meals;
    console.log(loadData, "loading");
    return (
        <div>

            <div className='flex flex-wrap'>
                {
                    loadData.map((d, i) => {
                        return (
                            <div key={i} className='w-[100px]'>
                                <img src={`https://www.themealdb.com/images/ingredients/${d.strIngredient}.png`} alt="" />
                                {console.log(d)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FoodCategory2;