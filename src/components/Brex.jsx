import React from 'react'
import image from "../assets/images/imagee.png"
function Brex() {
  return (
    <div className='w-full h-[500px] flex items-center justify-between  bg-gray-100 '>
            <div className='w-full h-full flex flex-col pl-10 justify-center '>
            <div className='flex flex-col gap-y-4'>
                <h1 className='text-3xl font-semibol'>See what Brex can do <br/> for you.</h1>
                <p className='font-medium'>Get in touch to learn how our spend solution <br/> can increase financial efficiency and speed for <br/> your company.</p>
                <div className='flex items-center gap-x-3'>
                    <button
                    className='p-2 px-10 text-sm bg-orange-600 hover:bg-orange-500 ease-linear duration-100 text-white rounded-lg'
                    >
                    Contact sales
                    </button>
                    <button
                    className='p-2 px-10 text-sm border border-black hover:border-orange-600 hover:text-orange-600 ease-linear duration-100 rounded-lg'
                    >
                    Contact sales
                    </button>

                </div>
            </div>

        </div>
        <div className='w-full flex items-center justify-center h-full'>
            <img src={image} alt="" />

        </div>

    </div>
  )
}

export default Brex;