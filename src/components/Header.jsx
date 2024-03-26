import React, { useState } from 'react';
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { TbProgressHelp } from "react-icons/tb";
import { CiLogin, CiShoppingCart } from "react-icons/ci";


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const showSlideMenu = () => {
        setToggle(true);
    }
    const hideSileMenu = () => {
        setToggle(false);
    }
    const links = [
        {
            icon: <IoMdSearch />,
            name: "Search"
        },
        {
            icon: <TbProgressHelp />,
            name: "Offer",
            offer: 'new'
        },
        {
            icon: <CiLogin />,
            name: "LogIn"
        },
        {
            icon: <CiShoppingCart />,
            name: "Cart"
        },
    ]
    return (
        <>
            <div className='black-overly w-full h-full fixed' onClick={hideSileMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden",
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='bg-white w-[400px] h-full duration-1000' style={{
                    left: toggle ? "0%" : "-100%",
                }}></div>
            </div>
            <header className='bg-white duration-300 shadow sticky top-0 z-[999]'>
                <div className='py-2 max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[80px]'>
                        <img src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-580x435.png" alt="" />
                    </div>
                    <div className='hover:text-orange-500 font-bold cursor-pointer'>
                        <span className='border-b-[3px] border-orange-500'>Marishya</span> Rangamati,BD <IoIosArrowDown className='inline font-bold text-2xl' onClick={showSlideMenu} />
                    </div>
                    <nav className='flex list-none mx-3 gap-4 font-bold ml-auto text-[17px]'>
                        {
                            links.map((link, index) => {
                                return (
                                    <li key={index} className='flex items-center gap-2 hover:text-orange-500 cursor-pointer'>
                                        {link.icon}{link.name} <sup className='text-orange-600'>{link.offer}</sup>
                                    </li>
                                )
                            })
                        }
                    </nav>
                    <div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;