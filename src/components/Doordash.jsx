import React from 'react'
import doordash from "../assets/doordash.svg"
import empire from "../assets/images/empire.png"
import scalee from "../assets/images/scalee.png"
import avenue from "../assets/images/avenue.png"
import strell from "../assets/strell.svg"
import techcrunch from "../assets/techcrunch.svg"
import newyork from "../assets/newyork.svg"
import zdnet from "../assets/zdnet.svg"
import frobes from "../assets/frobes.svg"
import { nanoid } from 'nanoid'
import left from "../assets/left_strel.svg"
import right from "../assets/riight_strel.svg"
function Doordash() {
    const products = [
        {
            image: empire,
            paragraph: "Empire enables spend and drives accountability  in Orangetheory studios with Brex Empower.",
            btnTitle: "Read case study",
            id: nanoid()
        },
        {
            image: scalee,
            paragraph: "Scale AI unblocks employee spend to ensure speed while boosting control and accountability.",
            btnTitle: "Read case study",
            id: nanoid()
        },
        {
            image: avenue,
            paragraph: "Avenue One drives automation and accuracy, saving 15 hours a month with Brex Empower and NetSuite.",
            btnTitle: "Read case study",
            id: nanoid()
        },
    ]
    return (
        <div className=''>
            <div className='w-full flex flex-col items-center justify-center h-[550px]'>
                <div className='flex w-full flex-col gap-y-10 items-center'>
                    < img className='cursor-pointer w-' src={doordash} alt="" />

                    <div className='w-full h-56 flex items-center justify-center px-12'>
                        <div className='w-full flex items-start justify-start '>

                            <div className='w-14 h-6 flex items-center justify-center bg-gray-200'>
                                <img className='w-4' src={left} alt="" />
                            </div>
                        </div>

                        <div className='flex w-[2500px] flex-col items-center justify-start'>
                            <h3 className='text-xl font-medium'>"DoorDash went from a 100-person startup to over 9,000 employees.
                            </h3>
                            <h3 className='text-xl font-medium'>
                                We needed a solution that was innovative in the T&E space."
                            </h3>
                        </div>
                        <div className='w-full  flex items-end justify-end '>
                            <div className='w-14 h-6 flex items-center justify-center bg-gray-200'>
                                <img className='w-4' src={right} alt="" />
                            </div>
                        </div>
                    </div>
                    <p className='text-base'>— Mike Kim, VP of Finance, DoorDash</p>
                </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center h-32'>
                <h1 className='text-4xl font-semibold'>How our customers use Brex to

                </h1>
                <h1 className='text-4xl font-semibold'>
                    power their companies.
                </h1>
            </div>
            <div className='w-full flex px-16 gap-x-16 items-center justify-center mt-6'>
                {products.map(item => (
                    <div className='flex flex-col py-3 items-start gap-y-7' key={item.id}>
                        < img className='w-full h-44 cursor-pointer' src={item.image} alt="" />
                        <h3>{item.paragraph}</h3>
                        <button className='flex items-center text-orange-600 gap-x-2'>
                            {item.btnTitle}
                            < img className='cursor-pointer' src={strell} alt="" />
                        </button>
                    </div>
                ))}
            </div>
            <div className='w-full h-72 flex items-center pt-10  justify-center'>
                <div className='w-11/12  flex items-center border justify-between'>
                    <div className='w-full flex items-center justify-center h-44 '>
                        < img className='cursor-pointer' src={techcrunch} alt="" />
                    </div>
                    <div className='w-full flex items-center justify-center h-44 border'>
                        < img className='cursor-pointer' src={newyork} alt="" />

                    </div>
                    <div className='w-full flex items-center justify-center h-44 '>
                        < img className='cursor-pointer' src={zdnet} alt="" />

                    </div>
                    <div className='w-full flex items-center justify-center h-44 r'>
                        < img className='cursor-pointer' src={frobes} alt="" />

                    </div>



                </div>

            </div>

        </div>
    )
}

export default Doordash