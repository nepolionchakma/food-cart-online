import React, { useEffect, useState } from 'react';
import CountryArea from './CountryArea';

const Country = () => {
    const [country, setCountry] = useState([]);
    console.log(country);
    const countryCode = [
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
        "Unknown",
        "VN",
    ];

    const loadCountry = async () => {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a");
        const data = await res.json();
        setCountry(data.meals);
    }
    useEffect(() => {
        loadCountry();
    }, [])
    return (
        <div className='p-6 max-w-[1200px] mx-auto items-center my-6'>
            <div className='grid grid-cols-9 gap-3'>
                {
                    // 
                    country.map((data, index) => <CountryArea data={data.strArea} code={countryCode[index]} key={index}></CountryArea>)
                }
            </div>
        </div>
    );
};

export default Country;