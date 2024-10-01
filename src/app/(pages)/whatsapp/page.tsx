import Ratings from '@/components/Common/Ratings'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { whatsAppContent } from '@/constants/data'
import Image from 'next/image'
import React from 'react'
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
const Whatsapp = () => {
    return (
        <div className='container py-10'>
            <section className='container flex flex-col items-start md:items-center md:justify-between md:flex-row '>
                <div className='mt-10 md:mt-0 space-y-4 w-full'>
                    <Badge>Official Whatsapp Business Partner</Badge>
                    <h1 className='text-4xl font-bold tracking-tight'>{whatsAppContent.heading_one}</h1>
                    <p className='text-lg tracking-tight font-light max-w-lg'>{whatsAppContent.section_one_paragraph}</p>
                    <Button variant={"success"} size={"lg"}>Get Started</Button>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={"/images/whatsapp/hero_section.webp"} alt='Whatsapp_Hero'
                        sizes="100vw"
                        style={{
                            width: '70%',
                            height: 'auto',
                        }}
                        width={0}
                        height={0} />
                </div>
            </section>
            <Ratings para={whatsAppContent.rating_para} showButton={true} />
            <section className='container min-h-screen flex flex-col items-start md:items-center md:justify-between md:flex-row '>
                <div className='mt-10 md:mt-0 space-y-6 w-full'>
                    <h2 className='text-4xl font-bold tracking-tight'>{whatsAppContent.section_two_heading}</h2>
                    <p className='text-lg tracking-tight font-light max-w-lg'>{whatsAppContent.section_two_paragraph}</p>
                    <div className="relative text-xl cursor-pointer after:absolute after:bg-gray-500 after:bottom-0 after:left-0 after:h-[2px] after:w-[300px] after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300">
                        Experience WhatsApp Campaign
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={"/images/whatsapp/notifications.webp"} alt='Whatsapp_Hero'
                        sizes="100vw"
                        style={{
                            width: '70%',
                            height: 'auto',
                        }}
                        width={0}
                        height={0} />
                </div>
            </section>
            <section className='container min-h-screen flex flex-col items-start md:items-center md:justify-between md:flex-row-reverse '>
                <div className='mt-10 md:mt-0 space-y-6 w-full'>
                    <h2 className='text-4xl font-bold tracking-tight'>{whatsAppContent.section_three_heading}</h2>
                    <p className='text-lg tracking-tight font-light max-w-lg'>{whatsAppContent.section_three_paragraph}</p>
                    <div className="relative text-xl cursor-pointer after:absolute after:bg-gray-500 after:bottom-0 after:left-0 after:h-[2px] after:w-[300px] after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300">
                        Experience Welcome Message
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={"/images/whatsapp/section_three.webp"} alt='Whatsapp_Hero'
                        sizes="100vw"
                        style={{
                            width: '70%',
                            height: 'auto',
                        }}
                        width={0}
                        height={0} />
                </div>
            </section>
            <section className='container mx-auto  min-h-screen flex flex-col items-start md:items-center md:justify-between md:flex-row '>
                <div className='mt-10 md:mt-0 space-y-6 w-full'>
                    <h2 className='text-4xl font-bold tracking-tight'>{whatsAppContent.section_four}</h2>
                    <p className='text-lg tracking-tight font-light max-w-lg'>{whatsAppContent.section_four_paragraph}</p>
                    <div className="relative text-xl cursor-pointer after:absolute after:bg-gray-500 after:bottom-0 after:left-0 after:h-[2px] after:w-[300px] after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300">
                        Experience Whatsapp Commerce
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={"/images/whatsapp/tracking.webp"} alt='Whatsapp_Hero'
                        sizes="100vw"
                        style={{
                            width: '70%',
                            height: 'auto',
                        }}
                        width={0}
                        height={0} />
                </div>
            </section>
            <section className='container mx-auto min-h-screen flex flex-col items-start md:items-center md:justify-between md:flex-row-reverse'>
                <div className='mt-10 md:mt-0 space-y-6 w-full'>
                    <h2 className='text-4xl font-bold tracking-tight'>{whatsAppContent.section_five}</h2>
                    <p className='text-lg tracking-tight font-light max-w-lg'>{whatsAppContent.section_five_paragraph}</p>
                    <div className="relative text-xl cursor-pointer after:absolute after:bg-gray-500 after:bottom-0 after:left-0 after:h-[2px] after:w-[300px] after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300">
                        Experience Abandoned Cart Recovery
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={"/images/whatsapp/tracking.webp"} alt='Whatsapp_Hero'
                        sizes="100vw"
                        style={{
                            width: '70%',
                            height: 'auto',
                        }}
                        width={0}
                        height={0} />
                </div>
            </section>
            <section className='container mx-auto min-h-screen flex flex-col items-start md:items-center md:justify-between md:flex-row'>
                <div className='mt-10 md:mt-0 space-y-6 w-full'>
                    <h2 className='text-4xl font-bold tracking-tight'>{whatsAppContent.section_six}</h2>
                    <p className='text-lg tracking-tight font-light max-w-lg'>{whatsAppContent.section_six_paragraph}</p>
                    <div className="relative text-xl cursor-pointer after:absolute after:bg-gray-500 after:bottom-0 after:left-0 after:h-[2px] after:w-[300px] after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300">
                        Experience Shipping Notification
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={"/images/whatsapp/tracking.webp"} alt='Whatsapp_Hero'
                        sizes="100vw"
                        style={{
                            width: '70%',
                            height: 'auto',
                        }}
                        width={0}
                        height={0} />
                </div>
            </section>
            <section className='container mx-auto min-h-screen flex flex-col items-start'>
                <h2 className='text-5xl font-semibold tracking-tight'>WhatsApp is great.<br />
                    But it&apos;s even better with DigitizeBird</h2>
                <div className='grid grid-cols-12 w-full mt-20'>
                    <div className='col-span-6 mx-auto'>
                        <img src="/images/whatsapp/whatsapp_business.svg" alt="Whatsapp Logo" />
                    </div>
                    <div className='col-span-6 mx-auto'>
                        <img src="/images/whatsapp/whatsapp_business_digi.svg" alt="Whatsapp Logo" />
                    </div>
                    <hr className='col-span-12 my-10' />
                    <div className='col-span-12 mx-auto'>
                        <Badge className='text-lg tracking-tight'>Number of Agents</Badge>
                    </div>
                    <div className='col-span-6 border-r-2 text-center'>
                        <span className='text-lg tracking-tight font-semibold'>One Agent</span>
                    </div>
                    <div className='col-span-6 text-center'>
                        <span className='text-lg tracking-tight font-semibold'>Number of Agents</span>
                    </div>
                    <div className='col-span-12 mx-auto mt-10'>
                        <Badge className='text-lg tracking-tight bg-[#72b21e]'>Team Management</Badge>
                    </div>
                    <div className='col-span-6 border-r-2 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCloseCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-6 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCheckmarkCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-12 mx-auto mt-10'>
                        <Badge className='text-lg tracking-tight bg-[#8cd927]'>Deep eCommerce Integration</Badge>
                    </div>
                    <div className='col-span-6 border-r-2 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCloseCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-6 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCheckmarkCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-12 mx-auto mt-10'>
                        <Badge className='text-lg tracking-tight bg-[#95e62a]'>Automation</Badge>
                    </div>
                    <div className='col-span-6 border-r-2 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCloseCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-6 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCheckmarkCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-12 mx-auto mt-10'>
                        <Badge className='text-lg tracking-tight bg-[#80bc33]'>Agent Metrics</Badge>
                    </div>
                    <div className='col-span-6 border-r-2 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCloseCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-6 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCheckmarkCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-12 mx-auto mt-10'>
                        <Badge className='text-lg tracking-tight'>Customer Data and Order History</Badge>
                    </div>
                    <div className='col-span-6 border-r-2 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCloseCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                    <div className='col-span-6 text-center'>
                        <span className='text-lg tracking-tight font-semibold'><IoCheckmarkCircle className='h-8 w-8 mx-auto' /></span>
                    </div>
                </div>
            </section>
            <section className='container mx-auto min-h-screen flex flex-col items-center justify-center'>
                <p className='text-4xl text-center font-semibold tracking-tight max-w-3xl'>When you succeed, we succeed. Our team of experts will go above and beyond to understand your business and implement a solution that shows immediate impact.</p>
                <Button variant={"success"} size={"lg"} className='mt-10'>Get Started</Button>
            </section>
        </div>
    )
}

export default Whatsapp
