"use client"
import UnderlineSprinkles from '@/components/Common/UnderlineSprinkles'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
const HeroSection = () => {
    return (
        <div className='mt-3 relative bg-[#005e48]/[0.35] md:bg-[#005e48]/20 h-full md:h-[calc(100vh-10.5rem-1px)] w-full rounded-xl flex flex-col md:flex-row items-center justify-between p-8 overflow-hidden pt-20 md:py-10'>
            <div className='w-full z-10 flex flex-col items-center md:items-start'>
                <h1 className="z-2 md:text-4xl text-3xl text-center md:text-left lg:text-6xl font-semibold tracking-tighter text-[#104d3e] md:text-[#00916E] relative z-20">
                    Digitize Bird Whatsapp
                </h1>
                <p className='z-2 w-full md:w-[70%] text-black md:text-black/80 mt-4 font-medium tracking-tight'>Your customers are on WhatsApp, Instagram and other messaging channels. So when they&apos;re looking to buy, and they message you, they&apos;re at their moment of highest intent. How are you converting those to orders?</p>
                <Button size={"lg"} className='bg-[#005e48] mt-4 group/button !z-50 w-full md:w-fit'>Get a Demo <BsArrowRight className='ml-2 group-hover/button:translate-x-2 transition-all' /> </Button>

            </div>
            <div className='z-10 relative'>
                <Image src="/images/hero1.webp" alt="Hero Image 1" height={1000} width={1000} sizes='' className='object-contain' />
            </div>
            <UnderlineSprinkles />
        </div>
    )
}

export default HeroSection
