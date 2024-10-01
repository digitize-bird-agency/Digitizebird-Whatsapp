"use client"
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { useState } from 'react';
import { GiCheckMark } from "react-icons/gi";
import { IoMdInformationCircle } from "react-icons/io";


import Ratings from '@/app/_components/Ratings';
import { Badge } from '@/components/ui/badge';
import { PartnerFaqs } from '../../../components/Faqs/PartnerFaqs';
import PricingSection from './_components/PricingSection';
const Pricing = () => {
    const [plan, setPlan] = useState<'Monthly' | 'Yearly'>('Monthly');

    const handlePlan = (selectedPlan: 'Monthly' | 'Yearly') => {
        setPlan(selectedPlan);
    };
    return (
        <div className='container min-h-screen pt-40 pb-20 flex flex-col items-center justify-center'>
            <h1 className='text-4xl text-center font-bold tracking-tight'>Fair Pricing to Keep Your <span className='text-emerald-600'>Business Growing</span></h1>
            <div className='my-10'>
                <div className='w-full p-2'>
                    <div className='relative grid grid-cols-2 gap-2 w-fit mx-auto z-40 bg-gray-200 p-2 rounded-md my-4'>
                        <div
                            className={`absolute top-0 left-0 h-full w-1/2 bg-emerald-700 rounded-md transition-transform duration-300 ${plan === 'Monthly' ? 'transform translate-x-0' : 'transform translate-x-full'
                                }`}
                        />
                        <button
                            className={`relative z-10 ${plan === 'Monthly' ? 'text-white' : 'text-black'
                                } rounded-md p-2 text-sm md:text-md`}
                            onClick={() => handlePlan('Monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            className={`relative z-10 ${plan === 'Yearly' ? 'text-white' : 'text-black'
                                } rounded-md p-2 text-sm md:text-md`}
                            onClick={() => handlePlan('Yearly')}
                        >
                            Yearly (Save up to 16%)
                        </button>
                    </div>
                    {
                        plan === "Monthly" ? <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
                            <Card className='relative'>
                                <CardHeader>
                                    <CardTitle className='text-emerald-700'>WhatsApper</CardTitle>
                                    <div>
                                        <p className='text-xl font-medium tracking-tight relative my-2'>$29<span className='text-[16px]'>/month</span></p>
                                        <Badge className='bg-emerald-700 text-white font-light'>Billed Monthly</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className='text-md tracking-tight'>Includes 3 team members. For each additional member, add $10/mo.</p>
                                    <div className='flex flex-col items-center justify-center'>
                                        <Button size={"lg"}>
                                            Start a Trial
                                        </Button>
                                        <div className='max-w-1/2'>
                                            <p className='w-full text-center mt-4 font-bold mb-2'>What&apos;s Included</p>
                                            <ul className='w-full space-y-2 mt-4'>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />One WhatsApp Number</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Shopify & WooCommerce Integration</li>
                                                <li className='space-x-22'><GiCheckMark className='inline-block mr-2' />Unlimited WhatsApp Broadcasts</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />WhatsApp Inbox</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Unlimited Customers</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Growth  */}
                            <Card className='relative'>
                                <CardHeader>
                                    <CardTitle className='text-emerald-700'>Growth</CardTitle>
                                    <div>
                                        <p className='text-xl font-medium tracking-tight relative my-2'>$49<span className='text-[16px]'>/month</span></p>
                                        <Badge className='bg-emerald-700 text-white font-light'>Billed Monthly</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className='text-md tracking-tight'>Includes 3 team members. For each additional member, add $12/mo.</p>
                                    <div className='flex flex-col items-center justify-center'>
                                        <Button size={"lg"}>
                                            Start a Trial
                                        </Button>
                                        <div className='max-w-1/2'>
                                            <p className='w-full text-center mt-4 font-bold mb-2'>Everything in WhatsApper, plus</p>
                                            <ul className='w-full space-y-2 mt-4'>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Connect one of each Social Channels</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Omnichannel Inbox</li>
                                                <li className='space-x-22'><GiCheckMark className='inline-block mr-2' />Unlimited Broadcasts</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Facebook Comments & Instagram Feed</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Add additional channels for $15/channel</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                                <Badge className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-emerald-700 text-white font-semibold tracking-tight text-md'>Popular</Badge>
                            </Card>
                            {/* pro  */}
                            <Card className='relative'>
                                <CardHeader>
                                    <CardTitle className='text-emerald-700'>Pro</CardTitle>
                                    <div>
                                        <p className='text-xl font-medium tracking-tight relative my-2'>$119<span className='text-[16px]'>/month</span></p>
                                        <Badge className='bg-emerald-700 text-white font-light'>Billed Monthly</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className='text-md tracking-tight'>Includes 3 team members. For each additional member, add $30/mo.</p>
                                    <div className='flex flex-col items-center justify-center'>
                                        <Button size={"lg"}>
                                            Start a Trial
                                        </Button>
                                        <div className='max-w-1/2'>
                                            <p className='w-full text-center mt-4 font-bold mb-2'>Everything in Growth, plus</p>
                                            <ul className='w-full space-y-2 mt-4'>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Marketing Automation</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Custom API & Webhook Integration</li>
                                                <li className='space-x-22'><GiCheckMark className='inline-block mr-2' />AI & ChatGPT Powered Chatbot</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Unlimited External Integrations</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Add additional channels for $10/channel</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div> : <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
                            <Card className='relative'>
                                <CardHeader>
                                    <CardTitle className='text-emerald-700'>WhatsApper</CardTitle>
                                    <CardDescription>
                                        <p className='text-xl font-medium tracking-tight relative my-2'>$299<span className='text-[16px]'>/year</span></p>
                                        <Badge className='bg-emerald-700 text-white font-light'>Save 14%</Badge>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className='text-md tracking-tight'>Includes 3 team members. For each additional member, add $10/mo.</p>
                                    <div className='flex flex-col items-center justify-center'>
                                        <Button size={"lg"}>
                                            Start a Trial
                                        </Button>
                                        <div className='max-w-1/2'>
                                            <p className='w-full text-center mt-4 font-bold mb-2'>What&apos;s Included</p>
                                            <ul className='w-full space-y-2 mt-4'>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />One WhatsApp Number</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Shopify & WooCommerce Integration</li>
                                                <li className='space-x-22'><GiCheckMark className='inline-block mr-2' />Unlimited WhatsApp Broadcasts</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />WhatsApp Inbox</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Unlimited Customers</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            {/* Growth  */}
                            <Card className='relative'>
                                <CardHeader>
                                    <CardTitle className='text-emerald-700'>Growth</CardTitle>
                                    <div>
                                        <p className='text-xl font-medium tracking-tight relative my-2'>$499<span className='text-[16px]'>/year</span></p>
                                        <Badge className='bg-emerald-700 text-white font-light w-fit'>Save 15%</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className='text-md tracking-tight'>Includes 3 team members. For each additional member, add $12/mo.</p>
                                    <div className='flex flex-col items-center justify-center'>
                                        <Button size={"lg"}>
                                            Start a Trial
                                        </Button>
                                        <div className='max-w-1/2'>
                                            <p className='w-full text-center mt-4 font-bold mb-2'>Everything in WhatsApper, plus</p>
                                            <ul className='w-full space-y-2 mt-4'>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Connect one of each Social Channels</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Omnichannel Inbox</li>
                                                <li className='space-x-22'><GiCheckMark className='inline-block mr-2' />Unlimited Broadcasts</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Facebook Comments & Instagram Feed</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Add additional channels for $15/channel</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                                <Badge className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-emerald-700 text-white font-semibold tracking-tight text-md'>Popular</Badge>
                            </Card>
                            {/* pro  */}
                            <Card className='relative'>
                                <CardHeader>
                                    <CardTitle className='text-emerald-700'>Pro</CardTitle>
                                    <div>
                                        <p className='text-xl font-medium tracking-tight relative my-2'>$1,199<span className='text-[16px]'>/year</span></p>
                                        <Badge className='bg-emerald-700 text-white font-light'>Save 16%</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className='text-md tracking-tight'>Includes 3 team members. For each additional member, add $30/mo.</p>
                                    <div className='flex flex-col items-center justify-center'>
                                        <Button size={"lg"}>
                                            Start a Trial
                                        </Button>
                                        <div className='max-w-1/2'>
                                            <p className='w-full text-center mt-4 font-bold mb-2'>Everything in Growth, plus</p>
                                            <ul className='w-full space-y-2 mt-4'>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Marketing Automation</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Custom API & Webhook Integration</li>
                                                <li className='space-x-22'><GiCheckMark className='inline-block mr-2' />AI & ChatGPT Powered Chatbot</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Unlimited External Integrations</li>
                                                <li className='space-x-2'><GiCheckMark className='inline-block mr-2' />Add additional channels for $10/channel</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                    }
                </div>
            </div>
            <div className="my-10 flex-col items-center justify-center">
                <h2 className='text-center text-4xl font-semibold tracking-tight'>Need More? Check out our Enterprise Plan</h2>
                <div className='w-full flex items-center justify-center my-6'>
                    <button className='bg-[#007C52] hover:bg-[#00a86b] mx-auto text-white/90 hover:text-white text-md tracking-tight h-11 px-8 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
                        Start a Trial
                    </button>
                </div>
                <div className='flex items-center mx-auto gap-4 p-4 bg-emerald-100 border border-green-600 w-2/3 rounded-lg'>
                    <IoMdInformationCircle className='h-20 w-20' />
                    <p className='tracking-tight'>WhatsApp charges based on conversations. The First 1000 service conversations are free of charge. The fee per conversation varies by country. You can get the details on WhatsApp pricing from here. You can calculate your country-wise pricing below.</p>
                </div>
                <div className='mx-auto mt-20'>
                    <h3 className='text-center text-2xl font-bold tracking-tighter'>
                        Calculate your WhatsApp business conversation cost
                    </h3>
                    <PricingSection />
                    <div className='container max-w-4xl h-screen flex flex-col gap-4 items-center justify-center'>
                        <h2 className='text-2xl font-semibold'>Frequently Asked Questions</h2>
                        <PartnerFaqs />

                    </div>
                    <div>
                        <Ratings />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pricing




