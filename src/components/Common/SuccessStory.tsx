import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { types } from 'util';

interface SuccessStoryProps {
    imgSrc: string,
    subtitle: string,
    comment: string,
    avatar: string,
    ceoTitle: string,
    ceoSubtitle: string
    link?: string
}

const SuccessStory = ({
    imgSrc, subtitle, comment, avatar, ceoTitle, ceoSubtitle, link
}: SuccessStoryProps) => {
    return (
        <div className='container grid grid-cols-1 md:grid-cols-12  w-full md:gap-10 lg:gap-20 py-20 items-center'>
            <div className='col-span-4'>
                <img src={imgSrc} alt="Rwandamart" className='h-[50px] md:h-[100px] w-full object-contain aspect-video' />
                <Separator className='mt-4' />
                <p className='mt-6 text-lg md:text-xl text-center md:text-start font-light tracking-tight'>{subtitle}</p>
            </div>
            <div className='col-span-8 space-y-6'>

                <p className='mt-5 text-lg md:text-xl lg:text-2xl max-w-[75%] mx-auto tracking-tight'><q>{comment}</q></p>
                <div className='max-w-[75%] mx-auto flex items-center gap-3'>
                    <div className="flex flex-col md:flex-row gap-6 items-center flex-wrap justify-between w-full">
                        <div className='flex gap-2 items-center'>
                            <Avatar className='h-20 w-20'>
                                <AvatarImage src={avatar} alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className='text-xl font-semibold tracking-tight'>{ceoTitle}</p>
                                <span className='tracking-tight text-sm'>{ceoSubtitle}</span>
                            </div>
                        </div>
                        {
                            link && <Link href={"/"} className='group flex items-center gap-2 relative bg-green-600 md:bg-transparent px-4 py-2 rounded-sm text-white md:text-black'>
                                <span className='pr-6 text-lg tracking-tight'>Customer Story</span>
                                <GoArrowUpRight className='text-2xl absolute right-0 group-hover:pl-1 group-hover:pb-1 transition-all' />
                            </Link>
                        }

                    </div>
                </div>


            </div>
        </div >
    )
}

export default SuccessStory
