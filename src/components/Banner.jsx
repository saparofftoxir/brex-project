import React from 'react'
import background from "../assets/images/background.png"
import background_two from "../assets/images/background_two.png"
import tel from "../assets/images/tel.png"
import cards from "../assets/images/cards.png"
function Banner() {
    return (
        <div className='w-full  flex gap-x-3 items-center justify-center'>
            <div className='relative flex flex-col items-center justify-'>
                <div className='flex flex-col p-12 gap-y-5 items-center justify-center absolute'>
                    <h2 className='text-3xl font-semibold text-white'>
                        Brex for enterprise.
                    </h2>
                    <div className='flex flex-col items-center'>

                        <h3 className='text-white font-medium'>
                            Easy-to-use corporate cards and spend management software
                        </h3>
                        <h3 className='text-white font-medium'>

                            in an integrated global solution.
                        </h3>
                    </div>
                    <button className='p-2 text-sm rounded-lg border hover:border-gray-600 hover:text-gray-300 ease-linear duration-100 text-white px-10'>
                        Learn more
                    </button>
                    <div className=' flex pt-[77px]'>
                        <img src={tel} alt="" />
                    </div>
                </div>
                <div>
                    <img src={background} alt="" />
                </div>
            </div>
            <div className='relative flex flex-col items-center justify-'>
                <div className='flex flex-col p-12 gap-y-5 items-center justify-center absolute'>
                    <h2 className='text-3xl font-semibold'>
                        Brex for startups.
                    </h2>
                    <div className='flex flex-col items-center'>
                        <h3 className='font-medium'>
                            Fast access to global cards, business account (send ACH

                        </h3>
                        <h3 className='font-medium' >

                            and wires), spend management, and bill pay.
                        </h3>

                    </div>
                    <button className='p-2 text-sm hover:border-gray-700 hover:text-gray-400 duration-100 ease-linear rounded-lg border border-black px-10'>
                        Learn more
                    </button>
                    <div className=' flex pt-[81px]'>
                        <img src={cards} alt="cards" />
                    </div>
                </div>
                <div>
                    <img src={background_two} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner