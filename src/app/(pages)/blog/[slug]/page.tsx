import { Section } from '@/components/Layouts/Section'
import React from 'react'
import styles from "./styles.module.scss"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { FaFacebook, FaLinkedin, FaShare, FaSquareXTwitter } from 'react-icons/fa6'
import Image from 'next/image'

const SingleBlogPost = () => {
    return (
        <div className='min-h-screen h-full mb-20'>
            <div className='h-[80vh] relative bg-[#edebeb] flex items-center justify-center'>
                <div className={`${styles.absoluteDiv} inset-0 justify-center overflow-hidden`}>
                    <div className={`${styles.shape1Bg} ${styles.bgTeal} ${styles.bgTeal} ${styles.bgBlur} opacity-50`}></div>
                    <div className={`${styles.shape2Bg} ${styles.bgPrimary} ${styles.bgBlur} opacity-50`}></div>
                    <div className={`${styles.shape1Bg} ${styles.bgPurple} ${styles.bgBlur} opacity-50`}></div>
                </div>
                <div className='z-[999] w-full px-4 lg:w-fit absolute top-1/3 lg:top-[200px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4'>
                    <span className='text-sm bg-gray-100 rounded-full px-2 py-1 border-neutral-300 shadow border-2 text-black tracking-tight'>Facebook Meta Panel</span>
                    <h1 className='lg:max-w-6xl text-3xl lg:text-5xl text-center font-semibold tracking-tight leading-[1.2em]'>
                        Harnessing the Power of the Sun: Exploring the World of Solar Energy
                    </h1>
                    <div className='flex items-center justify-between gap-5'>
                        <span className='text-sm font-semibold tracking-tight'>10 Mins Read</span>
                        <span className='h-3 w-3 rounded-full bg-purple-500' />
                        <span className='text-sm font-semibold tracking-tight'>12th March, 2024</span>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 absolute container top-[300px] lg:top-[350px]'>
                    {/* first author section  */}
                    <div className='hidden lg:flex h-fit col-span-2 lg:h-60 flex-row lg:flex-col items-center lg:items-start justify-start gap-2 w-full'>
                        <span className='text-lg font-semibold hidden lg:inline'>Author</span>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className='text-md tracking-tight font-bold'>Lesil Alexander</p>
                            <p className='text-sm tracking-tight font-semibold'>Author</p>
                        </div>
                    </div>
                    {/* post image  */}
                    <div className='mt-4 lg:col-span-8 shrink-0'>
                        <div className="flex items-center space-x-4">
                            <img src={"/images/assets/post.jpg"} alt="logo" className='w-full object-cover rounded-2xl overflow-hidden' />
                        </div>
                    </div>
                    <div className='hidden col-span-2 lg:inline-block place-items-end mx-auto'>
                        <span className='text-md font-semibold'>Share</span>
                        <div className='flex flex-col mt-6 items-start gap-4'>
                            <FaFacebook className='h-6 w-6 text-neutral-700 hover:text-neutral-200 transition-all' />
                            <FaSquareXTwitter className='h-6 w-6 text-neutral-700 hover:text-neutral-200 transition-all' />
                            <FaShare className='h-6 w-6 text-neutral-700 hover:text-neutral-200 transition-all' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[50px] mb-[4rem] xxss:pt-[100px] xss:pt-[175px] xs:pt-[225px] sm:pt-[250px] xxms:pt-[300px] mms:pt-[425px] ms:pt-[475px] ls:pt-[525px] lg:pt-[500px] xl:[550px] md:max-w-4xl mx-auto p-4'>
                <p>In a world increasingly concerned with environmental sustainability and the search for renewable energy sources, solar power has emerged as a shining star. Harnessing the power of the sun, solar energy offers a clean and inexhaustible solution to our growing energy needs.
                    This article delves into the fascinating world of solar energy, exploring its mechanisms, benefits, and the transformative impact it can have on our planet.</p>
            </div>
            <div className='w-full md:max-w-3xl mx-auto bg-blue-200 md:rounded-md p-6 flex items-start gap-4'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                    <p className='text-md font-semibold tracking-tight'>Lesli Alexander</p>
                    <span className='text-sm font-semibold'>Author</span>
                    <p className='my-2 tracking-tight text-sm'>Leslie Alexander is a distinguished Solar Energy Specialist at the forefront of the renewable energy revolution. With a passion for sustainable technology and a commitment to addressing the global energy crisis, Leslie has dedicated her career to advancing the field of solar energy.</p>
                    <FaLinkedin className='h-6 w-6' />
                </div>

            </div>
        </div >
    )
}
export default SingleBlogPost
