"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Button as Btn } from "@/components/ui/moving-border"
import { FaArrowRightLong } from 'react-icons/fa6'
import RatingCard from '@/app/_components/RatingCard'

type RatingsProps = {
    para: string
    showButton?: boolean
}

const Ratings = ({ para, showButton }: RatingsProps) => {
    return (
        <section className='container max-w-4xl space-y-10 pt-40 pb-40'>
            <div className='flex flex-col md:flex-row items-center gap-10'>
                <RatingCard imagePlatform={"/images/trustpilot.svg"} imagePlatformAlt={"TrustPilot"} title="TrustPilot" />
                <RatingCard imagePlatform={"/images/g2.svg"} imagePlatformAlt={"G2"} title="G2" />
                <RatingCard imagePlatform={"/images/capterra.svg"} imagePlatformAlt={"Capterra"} title="Capterra" />
            </div>
            <p className='text-xl md:text-3xl font-semibold tracking-tight text-center'>{para}</p>
            {
                showButton && <div className='flex flex-col md:flex-row items-center justify-center gap-6 mx-auto'>
                    <Button size={"lg"} variant={"outline"}>Get a Demo&nbsp; <FaArrowRightLong /> </Button>
                    <Button size={"lg"} className='bg-green-500 text-white'>Experience Whatsapp </Button>
                </div>
            }

        </section>
    )
}

export default Ratings
