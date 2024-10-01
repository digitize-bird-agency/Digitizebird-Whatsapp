import React from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link'

const ResourcesTour = () => {
    return (
        <div className="relative z-10 px-4 lg:px-0 py-4 lg:py-0">
            <a href="#"
                className="block p-2 -mx-2 rounded-md bg-black/[0.05] hover:bg-black/[0.1] transition-all ease-in-out duration-300 text-purple-500 font-semibold text-sm hover:text-indigo-600">
                Documentation
                <p className="text-black/[0.5] font-normal tracking-tighter">Start integrating in no time</p>
            </a>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Learn</p>
                    <Separator className='bg-purple-600' />
                    <ul className="mt-3 text-[15px]">
                        <li className='border-b-[1px] py-2'>
                            <Link
                                href="/blog"
                                className="block p-2 -mx-2 rounded-lg hover:bg-black/[0.06] transition ease-in-out duration-300 text-gray-800 font-semibold text-sm tracking-tight hover:text-indigo-600"
                            >
                                Digitize Whatsapp Blog
                                <p className="text-black/[0.5] text-xs mt-1 font-normal">
                                    Guides, Reports and Best Practices
                                </p>
                            </Link>
                        </li>
                        <li className='border-b-[1px] py-2'>
                            <Link
                                href="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-black/[0.06] transition ease-in-out duration-300 text-gray-800 font-semibold text-sm tracking-tight hover:text-indigo-600"
                            >
                                Client Success Stories
                                <p className="text-black/[0.5] text-xs mt-1 font-normal">
                                    See our client&apos;s sucess
                                </p>
                            </Link>
                        </li>
                        {/* <li className='border-b-[1px] py-2'>
                            <Link
                                href="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-black/[0.06] transition ease-in-out duration-300 text-gray-800 font-semibold text-sm tracking-tight hover:text-indigo-600"
                            >
                                Ramadan Webinar
                                <p className="text-black/[0.5] text-xs mt-1 font-normal">
                                    Ramadan Sales and Supoort Strategy for Brands
                                </p>
                            </Link>
                        </li>
                        <li className='py-2'>
                            <Link
                                href="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-black/[0.06] transition ease-in-out duration-300 text-gray-800 font-semibold text-sm tracking-tight hover:text-indigo-600"
                            >
                                Podcast
                                <p className="text-black/[0.5] text-xs mt-1 font-normal">
                                    eCommerce Growth with our Podcast
                                </p>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <div>
                    <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Support</p>
                    <Separator className='bg-purple-600' />
                    <ul className="mt-3 text-[15px] space-y-2">
                        <li>
                            <Link href="/support" className="text-gray-400 hover:text-gray-800 py-1 block font-semibold tracking-tight transition-all">
                                Help Center
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-gray-800 py-1 block font-semibold  tracking-tight transition-all">
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-gray-800 py-1 block font-semibold  tracking-tight transition-all">
                                API Reference
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-gray-800 py-1 block font-semibold  tracking-tight transition-all">
                                Roadmap
                            </a>
                        </li>
                        {/* <li>
                            <a href="#" className="text-gray-400 hover:text-gray-800 py-1 block font-semibold  tracking-tight transition-all">
                                Compare Digitize Bird
                            </a>
                        </li> */}
                        <li>
                            <Link href="/agency" className="text-gray-400 hover:text-gray-800 py-1 block font-semibold  tracking-tight transition-all">
                                Find an Agency
                            </Link>
                        </li>
                        {/* <li>
                            <a href="#" className="text-gray-400 hover:text-gray-800 py-1 block font-semibold  tracking-tight transition-all">
                                Free Tools
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResourcesTour
