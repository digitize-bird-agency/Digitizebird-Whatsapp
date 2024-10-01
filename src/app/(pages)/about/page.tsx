import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='container min-h-screen pt-40 pb-20 text-center'>
            <div>
                <h1 className='text-4xl md:text-7xl text-center tracking-tight'>Empowering Business</h1>
                <span className='text-3xl text-emerald-600 tracking-tighter leading-loose'>Large and Small.</span>
            </div>
            <div className='flex items-center justify-center'>
                <Image src={"/images/Team.jpg"} alt='Product Guide'
                    sizes="100vw"
                    style={{
                        width: '80%',
                        height: 'auto',
                    }}
                    className='rounded-md'
                    width={0}
                    height={0} />
            </div>
            <div className='py-40 text-center w-full'>
                <p className='text-4xl tracking-tighter font-normal max-w-5xl mx-auto'>We believe people want direction on where they&apos;re going - not directions on how to get there.</p>
            </div>
            <div className='container max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-around py-10'>
                <div>
                    <span className='block text-5xl md:text-7xl tracking-tighter text-[#29ad55]'>2023</span>
                    <span className='text-xl tracking-tighter font-light'>We Start Whatsapp Marketing</span>
                </div>
                <div>
                    <span className='block text-5xl md:text-7xl tracking-tighter text-[#29ad55]'>20</span>
                    <span className='text-xl tracking-tighter font-light'>People Working in Hybrid Way</span>
                </div>
            </div>
            <div className='py-40 text-left w-full text-xl max-w-5xl mx-auto space-y-6 font-light'>
                <p>
                    <span className='font-bold block text-3xl mb-2'>In today&apos;s fast-paced world</span>Everything is immediate and urgent. People expect more from you — always on, always there, always understanding their needs, and always ready to assist. They seek trust and reliability over the long term!
                </p>
                <p>
                    Imagine going to a store to buy a drill, only to find it missing and no one available to help. Such negative experiences often lead to customers never returning — a staggering 88% likelihood.
                </p>
                <p>
                    From connection to management, everything must be seamless.
                </p>
                <p>
                    Simultaneously, interactions are becoming more personal, authentic, and direct in our increasingly connected world.
                </p>
                <p>
                    However, e-commerce customer support remains largely static and slow, often perceived as impersonal.
                </p>
                <p>
                    Enter Conversational Commerce, reimagining e-commerce support to be immediate, personal, helpful, and humane — even when powered by bots.
                </p>
                <p>
                    Conversational commerce is integrated into Digitize Bird — consolidating live chat, Facebook, Messenger, WhatsApp, and Viber into a single platform, enhancing efficiency and boosting sales.
                </p>
                <p>
                    Let&apos;s revolutionize with Digitize Bird. 🎉 Stand out among 24 million (and counting) e-commerce stores worldwide!
                </p>
            </div>
        </div>
    )
}

export default About
