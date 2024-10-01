import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { FaYoutube } from 'react-icons/fa6'

const Support = () => {
    return (
        <div className='container min-h-screen pt-40 pb-20 text-center'>
            <div>
                <h1 className='text-4xl md:text-7xl text-center tracking-tight'>How can we help?</h1>
                <span className='text-3xl text-emerald-600 tracking-tighter'>Get the help you need, every step of the way.</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto pt-20 '>
                <div className='p-10 py-20 rounded-md border flex flex-col items-center justify-center gap-4'>
                    <div className='flex items-center justify-center'>
                        <Image src={"/images/product_guide.svg"} alt='Product Guide'
                            sizes="100vw"
                            style={{
                                width: '80%',
                                height: 'auto',
                            }}
                            width={0}
                            height={0} />
                    </div>
                    <h3 className='text-3xl font-bold tracking-tight'>Product Guide</h3>
                    <p className='px-4 text-center'>We strongly recomend you to check the product documentation before submiting a support ticket.</p>
                    <Button className='bg-green-700'>View Documentation</Button>
                </div>
                <div className='p-10 py-20 rounded-md border flex flex-col items-center justify-center gap-4'>
                    <div className='flex items-center justify-center'>
                        <Image src={"/images/product_tutorials.svg"} alt='Product Guide'
                            sizes="100vw"
                            style={{
                                width: '80%',
                                height: 'auto',
                            }}
                            width={0}
                            height={0} />
                    </div>
                    <h3 className='text-3xl font-bold tracking-tight'>Product Tutorial</h3>
                    <p className='px-4 text-center'>Browse our library lessons covering everything from connecting channels to automating queries.</p>
                    <Button className='bg-green-700 flex items-center gap-2'><FaYoutube />Watch Tutorial</Button>
                </div>
                <div className='p-10 py-20 rounded-md border flex flex-col items-center justify-center gap-4'>
                    <div className='flex items-center justify-center'>
                        <Image src={"/images/product_tutorials.svg"} alt='Product Guide'
                            sizes="100vw"
                            style={{
                                width: '80%',
                                height: 'auto',
                            }}
                            width={0}
                            height={0} />
                    </div>
                    <h3 className='text-3xl font-bold tracking-tight'>Feature Request</h3>
                    <p className='px-4 text-center'>We process all suggestions to make the product perfect.</p>
                    <Button className='bg-green-700 flex items-center gap-2'>Submit Request</Button>
                </div>
                <div className='p-10 py-20 rounded-md border flex flex-col items-center justify-center gap-4'>
                    <div className='flex items-center justify-center'>
                        <Image src={"/images/product_tutorials.svg"} alt='Product Guide'
                            sizes="100vw"
                            style={{
                                width: '80%',
                                height: 'auto',
                            }}
                            width={0}
                            height={0} />
                    </div>
                    <h3 className='text-3xl font-bold tracking-tight'>Priority Support</h3>
                    <p className='px-4 text-center'>Have a question? Hit a bug? Get the help you need, when you need it from our rock-solid staff.</p>
                    <Button className='bg-green-700 flex items-center gap-2'>Let's Talk</Button>
                </div>
            </div>
        </div>
    )
}

export default Support
