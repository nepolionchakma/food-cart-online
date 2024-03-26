import React, { useState } from 'react';

const Country = () => {
    const [country, setCountry] = useState([]);

    const countryCode = [

        "BD",
        "US",
        "GB",
        "CA",
        "CN",
        "HR",
        "NL",
        "EG",
        "PH",
        "FR",
        "GR",
        "IN",
        "IE",
        "IT",
        "JM",
        "JP",
        "KE",
        "MY",
        "MX",
        "MA",
        "PL",
        "PT",
        "RU",
        "ES",
        "TH",
        "TN",
        "TR",
    ];

    // const loadCountry = async () => {
    //     const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    //     const data = await res.json();
    //     setCountry(data.meals);
    // }
    // useEffect(() => {
    //     loadCountry();
    // }, [])
    return (
        <div className='py-2 max-w-[1200px] mx-auto items-center my-6'>
            <div className='grid grid-cols-9 gap-3'>
                {
                    countryCode.map((d, i) => {
                        return (
                            <div key={i} className='shadow rounded hover:bg-orange-400 duration-500 flex items-center justify-center content-center'>
                                <div className='w-[100px] h-[100px] flex'>
                                    <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${d}.svg`} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Country;