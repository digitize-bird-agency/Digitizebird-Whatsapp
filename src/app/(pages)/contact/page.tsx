import { SignupForm } from '@/components/Common/SignupForm';
import { Metadata } from 'next';
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
export const metadata: Metadata = {
    title: "Contact Us | Digitize Bird",
    description: "Let's Connect Together",
};
const Contact = () => {
    return (
        <div className='min-h-screen w-full pb-40'>
            <div className='flex items-center justify-center h-[30vh] md:h-[calc(100vh-12rem-1px)] w-full'>
                <h2 className='text-3xl md:text-6xl text-center tracking-tight font-bold'>We&apos;re here to help.<br /><span className='text-green-700'>Get in touch.</span></h2>
            </div>
            <div className='max-w-4xl mx-auto container'>
                <SignupForm />
            </div>
            <h2 className='text-3xl font-bold tracking-tight text-center py-20 pt-40'>Connect with us on Social Media</h2>
            <div className='flex items-center justify-center gap-10'>
                <a href='#' className='flex items-center justify-center text-slate-800 hover:text-blue-500 transition-all'>
                    <FaFacebookF className='text-2xl md:text-4xl' />
                </a>
                <a href='#' className='flex items-center justify-center text-slate-800 hover:text-blue-600 transition-all'>
                    <FaLinkedin className='text-2xl md:text-4xl' />
                </a>
                <a href='#' className='flex items-center justify-center text-slate-800 hover:text-cyan-500 transition-all'>
                    <FaTwitter className='text-2xl md:text-4xl' />
                </a>
                <a href='#' className='flex items-center justify-center text-slate-800 hover:text-orange-400 transition-all'>
                    <FaInstagram className='text-2xl md:text-4xl' />
                </a>
            </div>
        </div>
    )
}

export default Contact
