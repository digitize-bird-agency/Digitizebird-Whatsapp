import { footerCompanyLinks, footerInsiderLinks, footerResourcesLinks, footerSocialLinks } from '@/constants/data'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='bg-gray-100 min-h-[calc(100vh-10rem-1px)] grid grid-cols-12 w-full p-10 md:p-20 gap-10 md:gap-0 overflow-hidden'>
            <div className='col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-start gap-4'>
                <img src="/images/logo/digitize-bird-green.svg" alt="Footer Logo" className='h-[6rem] md:h-[10rem] w-auto' />
                <p className='text-md md:text-lg font-semibold tracking-tight'>Digitize Bird FZE.<br />Sharjah, UAE</p>
                <div className='flex items-center gap-2'>
                    <a href='#' className='h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-500 transition-all'>
                        <FaFacebookF className='text-white' />
                    </a>
                    <a href='#' className='h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 transition-all'>
                        <FaLinkedin className='text-white' />
                    </a>
                    <a href='#' className='h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 transition-all'>
                        <FaTwitter className='text-white' />
                    </a>
                    <a href='#' className='h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-orange-400 transition-all'>
                        <FaInstagram className='text-white' />
                    </a>
                </div>
                <div className='flex items-center w-full gap-3'>
                    <img src="/images/meta.png" alt="Meta Business" className='h-14 w-auto aspect-video object-contain' />
                    <img src="/images/whatsapp.png" alt="Meta Business" className='h-14 w-auto aspect-video object-contain' />
                </div>
            </div>
            <div className='mt-6 lg:mt-0 col-span-12 lg:col-span-9 grid grid-cols-12 w-full gap-10 md:gap-0'>
                <div className='col-span-12 sm:col-span-6 md:col-span-3'>
                    <h3 className='font-bold'>Social Channels</h3>
                    <ul className='mt-3 space-y-2 text-sm md:text-md'>
                        {
                            footerSocialLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link href={item.href} className='text-gray-500 hover:text-purple-500 transition-all'>
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='xs:col-span-12 sm:col-span-6 md:col-span-3'>
                    <h3 className='font-bold'>Company</h3>
                    <ul className='mt-3 space-y-2 text-sm md:text-md'>
                        {
                            footerCompanyLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.href} className='text-gray-500 hover:text-purple-500 transition-all'>
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='col-span-12 sm:col-span-6 md:col-span-3'>
                    <h3 className='font-bold'>Insider</h3>
                    <ul className='mt-3 space-y-2 text-sm md:text-md'>
                        {
                            footerInsiderLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.href} className='text-gray-500 hover:text-purple-500 transition-all'>
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='col-span-12 sm:col-span-6 md:col-span-3'>
                    <h3 className='font-bold'>Resources</h3>
                    <ul className='mt-3 space-y-2 text-sm md:text-md'>
                        {
                            footerResourcesLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.href} className='text-gray-500 hover:text-purple-500 transition-all'>
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='mt-6 col-span-12 flex flex-col-reverse md:flex-row gap-10 items-center justify-between'>
                <p className='text-xs font-bold'>&copy; 2024 Digitize Bird FZE</p>
                <div className='flex items-center gap-6 flex-wrap text-sm font-bold tracking-tight text-gray-600'>
                    <Link href={"#"}>
                        Global Privacy Policy
                    </Link>
                    <Link href={"#"}>
                        Terms of Service
                    </Link>
                    <Link href={"#"}>
                        Security
                    </Link>
                    <Link href={"#"}>
                        EU Data Policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
