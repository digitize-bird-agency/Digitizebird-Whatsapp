import { FlipWords } from '@/components/ui/flip-words'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const CTA = () => {
    const words = ["Discover", "Conversate", "Post-Sale"];
    return (
        <section className="min-h-screen py-20">
            <div className="h-[20rem] flex flex-col justify-center items-center px-4 w-full">
                <div className="text-lg md:text-4xl mx-auto font-bold text-neutral-900 dark:text-neutral-100">
                    Allow Customers to
                    <FlipWords words={words} />
                </div>
                <p className="max-w-[500px] text-sm md:text-md text-center tracking-tight mt-2">
                    When you succeed, we succeed. Our team of experts will go above and
                    beyond to understand your business and implement a solution that
                    shows immediate impact.
                </p>
            </div>
            <div className="container flex flex-col gap-5">
                <div className="h-full w-full bg-emerald-100/70 min-h-[500px] rounded-lg overflow-hidden p-10 grid grid-cols-1 md:grid-cols-2 text-white">
                    <div
                        style={{ width: "100%", height: "100%", position: "relative" }}
                    >
                        <img src="/images/conversate.webp" alt="linear board demo" />
                    </div>
                    <div className="flex flex-col items-start gap-4 justify-center">
                        <h2 className="text-[#078967] text-2xl md:text-3xl font-bold tracking-tight text-center">
                            Discover
                        </h2>
                        <p className="text-[#043125] mt-2 text-md md:text-xl font-normal tracking-tight w-full md:w-[80%]">
                            Allow people to discover your business. Utilize organic entry
                            points such as live chat or social chat widget, WhatsApp CTA
                            buttons on your Facebook, Instagram Ads to start a conversation.
                        </p>
                        <Link
                            href={"/"}
                            className="relative text-lg mt-3 group text-[#043125] after:absolute after:bg-[#043125] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 "
                        >
                            <span className="flex items-center">
                                Hover over me &nbsp;
                                <FaArrowRightLong className="translate-y-[1px] group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="h-full w-full bg-orange-300/30 min-h-[500px] rounded-lg overflow-hidden p-10 grid grid-cols-1 md:grid-cols-2 text-white">
                    <div
                        style={{ width: "100%", height: "100%", position: "relative" }}
                    >
                        <img src="/images/engage.webp" alt="linear board demo" />
                    </div>
                    <div className="flex flex-col items-start gap-4 justify-center">
                        <h2 className="text-[#e69a30] text-2xl md:text-3xl font-bold tracking-tight text-center">
                            Engagement
                        </h2>
                        <p className="text-[#36240a] mt-2 text-md md:text-xl font-normal tracking-tight w-full md:w-[80%]">
                            Allow people to have quality conversations with your business.
                            Create WhatsApp audience and easily schedule campaigns. Make it
                            easy for customers to browse your products and services, and
                            submit orders in WhatsApp.
                        </p>
                        <Link
                            href={"/"}
                            className="relative text-lg mt-3 group text-[#36240a] after:absolute after:bg-[#e69a30] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 "
                        >
                            <span className="flex items-center">
                                Hover over me &nbsp;
                                <FaArrowRightLong className="translate-y-[1px] group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="h-full w-full bg-cyan-100/70 min-h-[500px] rounded-lg overflow-hidden p-10 grid grid-cols-1 md:grid-cols-2 text-white">
                    <div
                        style={{ width: "100%", height: "100%", position: "relative" }}
                    >
                        <img src="/images/store.webp" alt="linear board demo" />
                    </div>
                    <div className="flex flex-col items-start gap-4 justify-center">
                        <h2 className="text-[#24a1a1] text-2xl md:text-3xl font-bold tracking-tight text-center">
                            Post-sales
                        </h2>
                        <p className="text-[#0d4141] mt-2 text-md md:text-xl font-normal tracking-tight w-full md:w-[80%]">
                            Allow businesses to service their customers post-sales. Keep
                            users updated by delivering personalised messages at key moments
                            throughout the customer journey such as order notification, cart
                            recovery and more.
                        </p>
                        <Link
                            href={"/"}
                            className="relative text-lg mt-3 group text-[#0d4141] after:absolute after:bg-[#24a1a1] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 "
                        >
                            <span className="flex items-center">
                                Hover over me &nbsp;
                                <FaArrowRightLong className="translate-y-[1px] group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
