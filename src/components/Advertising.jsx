import React from 'react'
import combinator from "../assets/combinator.svg"
import doordash from "../assets/doordash.svg"
import scale from "../assets/scale.svg"
import airtable from "../assets/airtable.svg"
import whatnot from "../assets/whatnot.svg"
import deel from "../assets/deel.svg"
import airnb from "../assets/airnb.svg"
import classpas from "../assets/classpas.svg"
function Advertising() {
    return (
        <div className='w-full h-40 flex items-end justify-between pb-16 gap-x-7'>
            <img className='cursor-pointer' src={combinator} alt='combinator' />
            <img className='cursor-pointer' src={doordash} alt='doordash' />
            <img className='cursor-pointer' src={scale} alt='scale' />
            <img className='cursor-pointer' src={airtable} alt='airtable' />
            <img className='cursor-pointer' src={whatnot} alt='whatnot' />
            <img className='cursor-pointer' src={classpas} alt='classpas'/>
            <img className='cursor-pointer' src={deel} alt='deel' />
            <img className='cursor-pointer' src={airnb} alt='airnb' />
        </div>
    )
}

export default Advertising