import React from 'react'
import hero from "./../../assets/images/banner.png"
import line from "./../../assets/line.svg"
import strel from "./../../assets/strell.svg"
import Advertising from '../../components/Advertising'
import Solutions from '../../components/Solutions'
import Banner from '../../components/Banner'
import Flexible from '../../components/Flexible'
import Doordash from '../../components/Doordash'
import Brex from '../../components/Brex'
import Footer from '../../components/Footer'
function Home() {
    return (
        <main className='w-full '>
            <div className='w-full flex  items-center justify-between '>
                <div className='w-full h-screen bg-white'>
                    <div className='flex w-full p-10 flex-col gap-y-10'>
                        <div className='flex flex-col gap-y-5 items-start'>
                            <h2 className='text-3xl font-semibold'>
                                Corporate cards and <br /> spend management <br /> teams actually love.
                            </h2>
                            <div className='flex items-center gap-x-2'>
                                <button className='p-1.5 px-5 bg-orange-600 hover:bg-orange-500 ease-lineae duration-100 text-white rounded-lg'>
                                    Contact sales
                                </button>
                                <button className='p-1.5 hover:bg-slate-100 ease-lineae duration-100 px-5 border  rounded-lg'>
                                    Open an account
                                </button>
                            </div>
                        </div>
                        <div className='w-full'>
                            <img src={line} alt="" />
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h2 className='text-xl font-medium '>Brex for enterprise</h2>
                            <h3 className='font-medium'>Easy-to-use corporate cards and spend management software in an <br /> integrated global solution.</h3>
                            <div className='flex items-center gap-x-2'>
                                <span className='text-orange-600 font-medium'>Learn more</span>
                                <img src={strel} alt="" />
                            </div>
                        </div>
                        <div className='w-full'>
                            <img src={line} alt="line" />
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h2 className='text-xl font-medium '>Brex for startups</h2>
                            <h3 className='font-medium'>Fast access to global cards, business account (send ACH and wires), <br /> spend management, and bill pay.</h3>
                            <div className='flex items-center gap-x-2'>
                                <span className='text-orange-600 font-medium'>Learn more</span>
                                <img src={strel} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex h-full justify-end'>
                    <img className=' bg-auto' src={hero} alt="" />
                </div>

            </div>
            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-col gap-y-20 '>
                    <Advertising />
                    <Solutions /> 
                </div>
                <div className='w-full flex flex-col gap-y-20'>
                    <Banner />
                    <Flexible />
                    <Doordash /> 
                    <Brex />
                </div>
                <Footer />
            </div>

        </main>
    )
}

export default Home