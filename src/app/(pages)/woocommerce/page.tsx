"use client"
import Ratings from '@/components/Common/Ratings'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { testimonials, wooCommercFAQ, wooCommerceContent } from '@/constants/data'
import Image from 'next/image'
import React, { useRef } from 'react'
import { InfiniteMovingCards } from '@/components/Common/MovingTestimonial'
import FAQ from '@/components/Common/FAQ'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useMediaQuery } from 'usehooks-ts'


const WooCommerce = () => {
    const timeline = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: timeline,
        offset: ["0.35 1", "1 1"]
    })

    const heightY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const notMobileScreen = useMediaQuery('(min-width: 900px)');

    return (
        <div className='py-10'>
            <section className='container flex flex-col items-start md:items-center md:justify-between md:flex-row'>
                <div className='mt-10 md:mt-0 space-y-4 w-full'>
                    <Badge>eCommerce Stores</Badge>
                    <h1 className='text-4xl font-bold tracking-tight'>{wooCommerceContent.heading_one}</h1>
                    <p className='text-lg tracking-tight font-light max-w-lg'>{wooCommerceContent.section_one_paragraph}</p>
                    <Button variant={"success"} size={"lg"}>Get Started</Button>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={"/images/instagram/instagram_hero.webp"} alt='instagram_Hero'
                        sizes="100vw"
                        style={{
                            width: '70%',
                            height: 'auto',
                        }}
                        width={0}
                        height={0} />
                </div>
            </section>
            <section className='container mx-auto min-h-screen flex flex-col items-start pt-80 pb-40'>
                <h3 className='text-5xl tracking-tight max-w-4xl mx-auto text-center'>All the things you need to grow your sales above the market rate, <span className='text-mark-3'>amazon-style</span></h3>
                <motion.div ref={timeline} className='container max-w-5xl py-10 relative'>
                    {
                        notMobileScreen && <div className='max-w-10 h-[100%] max-h-[80%] absolute top-[10%] overflow-hidden flex items-start justify-center bg-transparent w-12 -z-10'>
                            <motion.div style={{ height: heightY }} className={`origin-top bg-[rgba(255,255,255,0.15)] w-[3px] relative`}>
                                <motion.div className='bg-[#111111] w-[3px] h-full absolute top-0 bottom-0 left-0 right-0' />
                            </motion.div>
                        </div>
                    }

                    <div className='w-full space-y-8'>
                        <div className='flex items-center justify-center gap-8 relative'>
                            <div className={`h-10 w-10 shrink-0 ${notMobileScreen ? "relative" : "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"}`}>
                                <div className='bg-purple-600 text-white font-semibold rounded-full h-full w-full flex items-center justify-center'>1</div>
                            </div>
                            <div className='border-2 rounded-lg col-span-10 p-4 flex flex-col md:flex-row items-start gap-8'>
                                <img src="https://cdn.prod.website-files.com/61fe1678647f8b5cb635ec64/6314efa9c9476c0e9d0e7494_Social.webp" loading="lazy" alt="" className={`${notMobileScreen ? "aspect-square h-72" : "w-full"}`} />
                                <div className='space-y-3'>
                                    <h3 className='text-2xl font-semibold tracking-tight'>Bring all social channels in one inbox</h3>
                                    <p className='text-xl tracking-tight'>Reply to customers across all channels from one unified dashboard - WhatsApp, Instagram, Facebook, Line, Viber, Telegram, Email (coming soon!) & Live Chat. Support from anywhere with MyAlice mobile app.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-8 relative'>
                            <div className={`h-10 w-10 shrink-0 ${notMobileScreen ? "relative" : "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"}`}>
                                <div className='bg-purple-600 text-white font-semibold rounded-full h-full w-full flex items-center justify-center'>2</div>
                            </div>
                            <div className='border-2 rounded-lg col-span-10 p-4 flex flex-col md:flex-row items-start gap-8'>
                                <img src="https://cdn.prod.website-files.com/61fe1678647f8b5cb635ec64/6314efa9c9476c0e9d0e7494_Social.webp" loading="lazy" alt="" className={`${notMobileScreen ? "aspect-square h-72" : "w-full"}`} />
                                <div className='space-y-3'>
                                    <h3 className='text-2xl font-semibold tracking-tight'>Bring all social channels in one inbox</h3>
                                    <p className='text-xl tracking-tight'>Reply to customers across all channels from one unified dashboard - WhatsApp, Instagram, Facebook, Line, Viber, Telegram, Email (coming soon!) & Live Chat. Support from anywhere with MyAlice mobile app.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-8 relative'>
                            <div className={`h-10 w-10 shrink-0 ${notMobileScreen ? "relative" : "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"}`}>
                                <div className='bg-purple-600 text-white font-semibold rounded-full h-full w-full flex items-center justify-center'>3</div>
                            </div>
                            <div className='border-2 rounded-lg col-span-10 p-4 flex flex-col md:flex-row items-start gap-8'>
                                <img src="https://cdn.prod.website-files.com/61fe1678647f8b5cb635ec64/6314efa9c9476c0e9d0e7494_Social.webp" loading="lazy" alt="" className={`${notMobileScreen ? "aspect-square h-72" : "w-full"}`} />
                                <div className='space-y-3'>
                                    <h3 className='text-2xl font-semibold tracking-tight'>Bring all social channels in one inbox</h3>
                                    <p className='text-xl tracking-tight'>Reply to customers across all channels from one unified dashboard - WhatsApp, Instagram, Facebook, Line, Viber, Telegram, Email (coming soon!) & Live Chat. Support from anywhere with MyAlice mobile app.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-8 relative'>
                            <div className={`h-10 w-10 shrink-0 ${notMobileScreen ? "relative" : "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"}`}>
                                <div className='bg-purple-600 text-white font-semibold rounded-full h-full w-full flex items-center justify-center'>4</div>
                            </div>
                            <div className='border-2 rounded-lg col-span-10 p-4 flex flex-col md:flex-row items-start gap-8'>
                                <img src="https://cdn.prod.website-files.com/61fe1678647f8b5cb635ec64/6314efa9c9476c0e9d0e7494_Social.webp" loading="lazy" alt="" className={`${notMobileScreen ? "aspect-square h-72" : "w-full"}`} />
                                <div className='space-y-3'>
                                    <h3 className='text-2xl font-semibold tracking-tight'>Bring all social channels in one inbox</h3>
                                    <p className='text-xl tracking-tight'>Reply to customers across all channels from one unified dashboard - WhatsApp, Instagram, Facebook, Line, Viber, Telegram, Email (coming soon!) & Live Chat. Support from anywhere with MyAlice mobile app.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-8 relative'>
                            <div className={`h-10 w-10 shrink-0 ${notMobileScreen ? "relative" : "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"}`}>
                                <div className='bg-purple-600 text-white font-semibold rounded-full h-full w-full flex items-center justify-center'>5</div>
                            </div>
                            <div className='border-2 rounded-lg col-span-10 p-4 flex flex-col md:flex-row items-start gap-8'>
                                <img src="https://cdn.prod.website-files.com/61fe1678647f8b5cb635ec64/6314efa9c9476c0e9d0e7494_Social.webp" loading="lazy" alt="" className={`${notMobileScreen ? "aspect-square h-72" : "w-full"}`} />
                                <div className='space-y-3'>
                                    <h3 className='text-2xl font-semibold tracking-tight'>Bring all social channels in one inbox</h3>
                                    <p className='text-xl tracking-tight'>Reply to customers across all channels from one unified dashboard - WhatsApp, Instagram, Facebook, Line, Viber, Telegram, Email (coming soon!) & Live Chat. Support from anywhere with MyAlice mobile app.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
            <Ratings para={wooCommerceContent.rating_para} />
            <section className='mx-auto min-h-screen'>
                <h3 className='text-center font-bold text-3xl'>Trust by People Like You</h3>
                <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </section>
            <div className='container max-w-4xl h-screen flex flex-col gap-4 items-center justify-center'>
                <h2 className='text-2xl font-semibold'>Frequently Asked Questions</h2>
                <FAQ questions={wooCommercFAQ} />
            </div>
        </div>
    )
}

export default WooCommerce
