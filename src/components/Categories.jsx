import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Categories = () => {
    const [cateData, setCateData] = useState([]);
    const [slide, setSlide] = useState(0);
    const [isLoading, setLoading] = useState(true);
    // const data = cateData.categories;

    // Load Data
    const loadCategories = async () => {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await res.json();
        setCateData(data.categories);
        setLoading(false);
    }
    useEffect(() => {
        loadCategories();
        // ----------------Direct Fetch Function______
        // fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        //     .then(res => res.json())
        //     .then(data => {
        //         setCateData(data);
        //         setLoading(false);
        //     })
    }, [])
    // console.log(cateData.length);
    const slideForward = () => {
        if (cateData.length - 0 == slide) return false;
        setSlide(slide + 7)
        console.log("click frward", cateData.length);
    }
    const slideBack = () => {
        if (slide == 0) return false;
        setSlide(slide - 7)
        console.log("click back");
    }
    return (
        <div className='p-6 max-w-[1200px] mx-auto items-center my-6'>
            <div className='flex items-center justify-between'>
                <div className='font-bold'>What's is on your mind?</div>
                <div className='flex gap-3'>
                    <div className="w-[40px] h-[40px] rounded-full bg-[#2093] shadow-xl flex items-center justify-center hover:bg-orange-300 duration-700 hover:text-white hover:text-[20px" onClick={slideBack}>
                        <IoIosArrowBack className='' />
                    </div>
                    <div className="w-[40px] h-[40px] rounded-full bg-[#2093] shadow-xl flex items-center justify-center hover:bg-orange-300 duration-700 hover:text-white hover:text-[20px" onClick={slideForward}>
                        <IoIosArrowForward className='inline' />
                    </div>
                </div>
            </div>
            {/* <div className=''>
                <div className="w-[250px] h-[200px] bg-[#2093] rounded shadow-xl hover:bg-orange-300 duration-700"></div>
                <div className="w-[250px] h-[200px] bg-[#2093] rounded shadow-xl hover:bg-orange-300 duration-700"></div>
                <div className="w-[250px] h-[200px] bg-[#2093] rounded shadow-xl hover:bg-orange-300 duration-700"></div>
                <div className="w-[250px] h-[200px] bg-[#2093] rounded shadow-xl hover:bg-orange-300 duration-700"></div>
            </div> */}
            <div className='flex gap-5 my-5 overflow-hidden'>
                {
                    isLoading ? "Loading..." : cateData?.map((data, i) => {
                        return (
                            <div key={i} className=''>
                                <div style={{
                                    transform: `translateX(-${slide * 100}%)`
                                }} className='group w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] shadow flex flex-col items-center hover:bg-orange-500 hover:text-white hover:font-bold duration-1000 p-6 my-4 rounded-full cursor-pointer relative'>
                                    <img className='group-hover:scale-100 duration-300' src={data.strCategoryThumb} alt="" />
                                    <div className='flex items-center'>
                                    </div>
                                    <div className='tracking-tighter'>
                                        <h4 className='font-bold'>{data.strCategory}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )

                }
            </div>
            <hr className='border-[2px]' />

        </div>
    );
};
//  Object.values(cateData).map(data => console.log(data))

export default Categories;