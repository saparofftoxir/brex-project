import React from 'react'
import budget from "../assets/images/budget.png"
function Flexible() {
    return (
        <div className='w-full flex flex-col px-10 '>
            <div className=' w-9/12 mt-20 py-10 items-center pt-4'>
                <div className='flex flex-col gap-y-3'>
                    <h2 className='text-2xl font-semibold'>Flexible spend limits for any need.</h2>
                    <p className='text-xl'>Enable spend for any purpose — from travel to stipends to procurements — at all levels of <br /> your company. All on one card. With controls built in. That's the magic of budgets.</p>
                    <button
                        onClick={ ()=>alert('Please')}
                        className='p-2 px-10 w-56 border hover:bg-slate-900 ease-linear duration-100 hover:text-white border-black rounded-lg text-sm'>
                        See how budgets work
                    </button>
                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
            <img className='w-full bg-cover bg-center' src={budget} alt="" />
            </div>
        </div>
    )
}

export default Flexible