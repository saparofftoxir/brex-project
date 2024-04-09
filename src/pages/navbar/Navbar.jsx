import React, { useState } from 'react'
import logo from "./../../assets/logo.svg"
import strel from "./../../assets/strel.svg"
import { Link, NavLink } from 'react-router-dom'
import { GoX } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
function Navbar() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const showSection = () => {
        setShow(prev => !prev);
    }
    const clickExit = () => {
        setShow(false);
    }
    const showSection2 = () => {
        setShow2(prev => !prev);
    }
    const clickExit2 = () => {
        setShow2(false);
    }
    const showSection3 = () => {
        setShow3(prev => !prev);
    }
    const clickExit3 = () => {
        setShow3(false);
    }
    return (
        <>
            <nav className='w-full relative py-3 flex items-center justify-between px-8 bg-white'>
                <ul className='flex items-center  gap-x-10'>
                    <Link to={'/'}>
                        <img className='cursor-pointer' src={logo} alt="" />
                    </Link>
                    <li onClick={showSection} className='flex  hover:text-orange-500 ease-lineae duration-100 items-center gap-x-2 cursor-pointer'>
                        Solutions
                        {show ?
                            <GoTriangleDown className='w-6 h-6' /> : <img src={strel} />}

                    </li>
                    <li onClick={showSection2} className='flex hover:text-orange-500 ease-lineae duration-100 items-center gap-x-2 cursor-pointer' >
                        Products
                        {show2 ?
                            <GoTriangleDown className='w-6 h-6' /> : <img src={strel} />}
                    </li>
                    <li className='hover:text-orange-500 ease-lineae duration-100 cursor-pointer' onClick={() => alert("click")}>
                        why Brex?
                    </li>
                    <li className='hover:text-orange-500 ease-lineae duration-100 cursor-pointer' onClick={() => alert("click")}>
                        Empower?
                    </li>
                    <li onClick={showSection3} className='flex hover:text-orange-500 ease-lineae duration-100 items-center gap-x-2 cursor-pointer' >
                        Resources
                        {show3 ?
                            <GoTriangleDown className='w-6 h-6' /> : <img src={strel} />}
                    </li>
                </ul>
                <ul className='flex items-center gap-x-11'>
                    <li className='hover:text-orange-500 ease-lineae duration-100'>
                        <NavLink to={'/register'}>
                            Open an account
                        </NavLink>
                    </li>
                    <li className='hover:text-orange-500 ease-lineae duration-100'>
                        <NavLink to={'/login'}>
                            Sign in
                        </NavLink>
                    </li>
                    <li className='bg-orange-600 hover:bg-orange-500 ease-lineae duration-100 text-white p-1.5 rounded-lg px-7'>
                        <NavLink to={'/contact'}>
                            Contact sales
                        </NavLink>
                    </li>
                </ul>

            </nav>
            <section className="w-full absolute flex items-center justify- ">

                {show ?
                    <ul className='w-72 ml-8 cursor-pointer  bg-white'>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Solution1</li>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Solution2</li>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Solution3</li>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Solution4</li>
                        <div className='w-full flex items-center justify-end px-3 '>
                            <GoX onClick={clickExit} className='text-2xl cursor-pointer' />
                        </div>
                    </ul> : ""}
                {show2 ?
                    <ul className='w-72 ml-52 cursor-pointer  bg-white'>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Product1</li>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Product2</li>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Product3</li>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Product4</li>
                        <div className='w-full flex items-center justify-end px-3 '>
                            <GoX onClick={clickExit2} className='text-2xl cursor-pointer' />
                        </div>
                    </ul> : ""}
                {show3 ?
                    <ul className='w-72 ml-[520px] cursor-pointer  bg-white'>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Resources1</li>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Resources2</li>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Resources3</li>
                        <li className='border hover:bg-gray-300 ease-linear duration-100 px-2 font-medium'>Resources4</li>
                        <div className='w-full flex items-center justify-end px-3 '>
                            <GoX onClick={clickExit3} className='text-2xl cursor-pointer' />
                        </div>
                    </ul> : ""}
            </section>

        </>
    )
}

export default Navbar