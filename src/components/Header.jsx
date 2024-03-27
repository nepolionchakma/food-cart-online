import React, { useState } from 'react';
import { CiLogin, CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { TbMenu, TbProgressHelp } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const showSlideMenu = () => {
        setToggle(true);
    }
    const hideSildeMenu = () => {
        setToggle(false);
    }
    const showMenu = () => {
        setToggleMenu(true);
    }
    const hideMenu = () => {
        setToggleMenu(false);
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
            {/* -----------PopUP--- Search ------- */}
            <div className='black-overly w-full h-full fixed z-[99]' onClick={hideSildeMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden",
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='bg-white w-[40%] sm:w-[50%] xsm:w-[50%] xlsm:w-[60%] h-full duration-1000 p-8' style={{
                    left: toggle ? "0%" : "-100%",
                }}>
                    <div className='flex items-center justify-center border'>
                        <input className='w-full p-2' type="text" placeholder='Search By Location' />
                        <CiSearch className='mx-4 cursor-pointer'></CiSearch>
                    </div>
                </div>
            </div>
            {/* --------Header Navigation----------- */}
            <header className='bg-white duration-300 shadow sticky top-0 z-[9] px-5'>
                <div className='py-2 max-w-[1200px] mx-auto flex justify-center items-center xlsm:justify-around'>
                    <div className='w-[80px]'>
                        <Link to="/"><img src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-580x435.png" alt="" /></Link>
                    </div>
                    <div className='hover:text-orange-500 font-bold cursor-pointer sm:items-center sm:mx-auto sm:flex' onClick={showSlideMenu} >
                        <span className='border-b-[3px] border-orange-500 mx-2'>Marishya ,</span> Rangamati,BD <IoIosArrowDown className='inline font-bold text-2xl' />
                    </div>
                    <nav className='list-none mx-3 gap-4 font-bold text-[17px] hidden md:block' >
                        <div className='flex'>
                            {
                                links.map((link, index) => {
                                    return (
                                        <li key={index} className='flex mx-2 items-center gap-2 hover:text-orange-500 cursor-pointer'>
                                            {link.icon}{link.name} <sup className='text-orange-600'>{link.offer}</sup>
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </nav>
                    {/* PopUp----Nav Menu */}
                    <div className='flex items-center justify-center p-4 md:hidden duration-300 relative'>
                        <div className='absolute z-10'>
                            {toggleMenu ? <RxCross2 className='inline' onClick={hideMenu}></RxCross2> : <TbMenu className='inline' onClick={showMenu}></TbMenu>}
                        </div>
                        <div style={{ visibility: toggleMenu ? "visible" : "hidden" }} className='absolute bg-orange-500 p-4 top-[8%] right-[-40%]'>
                            <nav className='w-full h-full flex flex-col bg-orange-500 mt-8'>
                                {
                                    links.map((link, index) => {
                                        return (
                                            <li key={index} className='my-2 flex items-center gap-2 hover:text-white cursor-pointer'>
                                                {link.icon}{link.name} <sup className='text-white'>{link.offer}</sup>
                                            </li>
                                        )
                                    })
                                }
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;