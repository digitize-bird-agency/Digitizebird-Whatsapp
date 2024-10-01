"use client"
import Ratings from '@/components/Common/Ratings'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InstagramFaq, facebookContent, testimonials } from '@/constants/data'
import Image from 'next/image'
import React from 'react'
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5'
import { InfiniteMovingCards } from '@/components/Common/MovingTestimonial'
import FAQ from '@/components/Common/FAQ'
import StickyVideo from '@/components/Common/StickyVideo'
import InfoContainer from '@/components/Common/InfoContainer'

const Facebook = () => {
    return (
        <div className='py-10'>
            <section className='container flex flex-col items-start md:items-center md:justify-between md:flex-row'>
                <div className='mt-10 md:mt-0 space-y-4 w-full'>
                    <Badge>OFFICIAL META BUSINESS PARTNER</Badge>
                    <h1 className='text-4xl font-bold tracking-tight'>{facebookContent.heading_one}</h1>
                    <p className='text-lg tracking-tight font-light max-w-lg'>{facebookContent.section_one_paragraph}</p>
                    <Button variant={"default"} size={"lg"}>Get Started</Button>
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
            <Ratings para={facebookContent.rating_para} />
            <div className="container mx-auto p-4 min-h-screen">
                <div className="md:grid md:grid-cols-12 md:gap-4 h-full relative">
                    {/* Video Section */}
                    <div className='md:col-span-6'>
                        <StickyVideo videoSource='/working.webm' />
                    </div>
                    {/* Content Section */}
                    <div className="md:col-span-6">
                        <InfoContainer heading='Work Together' description='Your customers are on Facebook. All the time. So when they&apos;re looking to buy, and they message you, they&apos;re at their moment of highest intent. Engaging with these visitors through a team collaboration inbox.' checkpoints={["", "Assign conversations to agents", "Measure agent performance"]} />
                        <InfoContainer heading='Convert, not just converse' description='When customers come to your store intending to buy something, you need to help him as much as possible. Which includes placing the order for him. With MyAlice deep eCommerce integration, you can now do it with a single click while chatting with your customer.' checkpoints={["Order create, update or refund", "Product recommender", "Automated updated inventory"]} />
                        <InfoContainer heading='Front line of support' description='Almost half of customers find waiting to speak with customer support most annoying. Provide immediate self service, cost-effectively with MyAlice automation.' checkpoints={["Personalized support 24/7", "Handover from Bot to Human", "Add NLP to support in native language"]} />
                    </div>
                </div>
            </div>
            <section className='container mx-auto min-h-screen flex flex-col items-start pt-80 pb-40'>
                <h2 className='text-5xl font-semibold tracking-tight'>Facebook is great.<br />
                    But it&apos;s even better with DigitizeBird</h2>
                <div className='grid grid-cols-12 w-full mt-20'>
                    <div className='col-span-6 mx-auto'>
                        <img src="/images/whatsapp/whatsapp_business.svg" alt="Whatsapp Logo" />
                    </div>
                    <div className='col-span-6 mx-auto'>
                        <img src="/images/whatsapp/whatsapp_business_digi.svg" alt="Whatsapp Logo" />
                    </div>
                    <hr className='col-span-12 my-10' />
                    <div className='col-span-12 mx-auto mt-10'>
                        <Badge className='text-lg tracking-tight bg-[#1eb292]'>Team Management</Badge>
                    </div>
                    <div className='col-span-6 border-r-2 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCloseCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-6 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCheckmarkCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-12 mx-auto mt-10'>
                        <Badge className='text-lg tracking-tight bg-[#1eb292]'>Deep eCommerce Integration</Badge>
                    </div>
                    <div className='col-span-6 border-r-2 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCloseCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-6 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCheckmarkCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-12 mx-auto mt-10'>
                        <Badge className='text-lg tracking-tight bg-[#1eb292]'>Automation</Badge>
                    </div>
                    <div className='col-span-6 border-r-2 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCloseCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-6 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCheckmarkCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-12 mx-auto mt-10'>
                        <Badge className='text-lg tracking-tight bg-[#1eb292]'>Agent Metrics</Badge>
                    </div>
                    <div className='col-span-6 border-r-2 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCloseCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-6 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCheckmarkCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-12 mx-auto mt-10'>
                        <Badge className='text-lg tracking-tight bg-[#1eb292]'>Customer Data and Order History</Badge>
                    </div>
                    <div className='col-span-6 border-r-2 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCloseCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-6 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCheckmarkCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                </div>
            </section>
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
                <FAQ questions={InstagramFaq} />
            </div>
        </div>
    )
}

export default Facebook
