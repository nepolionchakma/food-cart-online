import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FoodData = () => {
    const [loadData, setLoadData] = useState([]);
    const sliceData = loadData.slice(0, 16);
    // const { strIngredient, strDescription } = sliceData;
    // const sliceDescription = sliceData.strDescription(0, 20)
    const loadCategories = async () => {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i");
        const data = await res.json();
        setLoadData(data.meals);
    }
    useEffect(() => {
        loadCategories();
    }, [])
    return (
        <div className='p-6 max-w-[1200px] mx-auto items-center my-6'>
            <h4 className='font-bold my-6'>What's your Mind Now to buy ?</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    sliceData.map((data, i) => {
                        return (
                            <div key={i} className='cursor-pointer'>
                                <div className="bg-orange-500 rounded shadow-xl hover:bg-orange-300 hover:text-white duration-700 p-4 flex flex-col items-center">
                                    <h5 className='font-bold'>{data.strIngredient}</h5>
                                    <div className='group w-[200px] p-4 '>
                                        <img className='group-hover:scale-100' src={`https://www.themealdb.com/images/ingredients/${data.strIngredient}.png`} alt="" />
                                    </div>
                                    {/* <p>{data.strDescription.slice(0, 120) + "..."}</p> 
                                    
                                    <Link to={`/details/foodIngredient/${data.strIngredient}`}>details</Link>
                                    {console.log("strIngredient", data.strIngredient)}
                                    
                                    */}

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr className='border-[2px] my-8' />
        </div>
    );
};

export default FoodData;