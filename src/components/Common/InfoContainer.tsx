import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'

type InfoContainerProps = {
    heading: string
    description: string
    checkpoints: string[]
}

const InfoContainer = ({ heading, description, checkpoints }: InfoContainerProps) => {
    return (
        <div className='block p-4 md:h-screen border-b-[1px] md:border-none py-10'>
            <h3 className='font-bold text-2xl'>{heading}</h3>
            <p className='font-light tracking-tight my-4 text-lg'>{description}</p>
            <ul>
                {
                    checkpoints.map((checkpoint, index) => {
                        return <li key={index} className='flex gap-2 items-center text-lg font-light tracking-tight pt-2 mt-2'><RiCheckboxCircleFill className='text-[#28a550] text-2xl' /> {checkpoint}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default InfoContainer
