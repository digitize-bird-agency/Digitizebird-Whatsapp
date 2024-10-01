"use client"
import { Heading } from '@/components/Layouts/Heading';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
type blogData = {
    id: string;
    title: string;
    slug: string;
    author: string;
    category: string[];
    mainImage: string;
    excerpt: string;
    createdAt: string;
    desc: string;
    authorImage: {
        image: string;
    };
    readTime?: string;
}

const BlogCard = ({ data, classes, latest }: { data: blogData, classes: string, latest: boolean }) => {
    return (
        <div key={data.id} className={clsx(`!h-full flex group rounded-2xl flex-col lg:flex-row gap-4 relative !overflow-hidden w-full bg-[#f6f3f3] shadow`, classes)}>
            <div className={`${latest === true ? "lg:h-full rounded-2xl lg:rounded-none !overflow-hidden" : "rounded-2xl md:overflow-hidden max-w-1/2"}`}>
                <Link href={`/blog/${data.slug}`}>
                    <Image
                        src={data.mainImage}
                        alt="Blog A"
                        width={600}
                        height={400}
                        className={`w-full h-full group-hover:scale-110 duration-300 object-cover`}
                    />
                </Link>
            </div>
            <div className={`w-full ${latest === true ? "h-fit relative lg:absolute bottom-0 left-0 bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 md:p-4 md:px-8" : "relative top-0 left-0"} flex flex-col justify-around mt-2 p-3`}>
                <div className={`${latest === true ? "flex flex-col lg:flex-row" : "flex-col"} items-start lg:items-center justify-between`}>
                    <div>
                        <Heading as="h3" className={`${latest ? "text-black md:text-white" : "text-black"} font-semibold tracking-tight text-sub-title mb-2 line-clamp-2`}>
                            <Link href={`/blog/${data.slug}`}>{data.title}</Link>
                        </Heading>
                        <p className={`${latest === true ? "text-black md:text-white" : "block lg:hidden"} font-light tracking-tight line-clamp-2`}>{data.desc}</p>
                    </div>
                    {data.category.length > 0 && <div className='flex items-center gap-2 mt-2 lg:mt-2 shrink-0'>
                        {data.category.map((category, index) => <span key={index} className={`border-2 ${latest ? "border-neutral-500 md:border-neutral-200 hover:bg-neutral-500 md:hover:bg-neutral-200 text-black hover:text-white md:hover:text-black md:text-white" : "border-neutral-500 hover:bg-neutral-500 hover:text-white"}  px-2 py-1 text-sm  transition cursor-pointer rounded-full`}>
                            {category}
                        </span>)}
                    </div>}
                </div>
                <div className="flex items-center gap-2 xl:gap-4 mt-6">
                    <div className="flex items-center gap-2">
                        <Image
                            src={data.authorImage.image}
                            alt="Bruno"
                            height={40}
                            width={40}
                            className="h-[40px] object-cover rounded-full"
                            priority
                        />
                        <span className={`${latest ? "text-black md:text-white" : "text-black"} text-sm`}>{data.author}</span>
                    </div>
                    {data.readTime && <span className="h-3 w-3 bg-blue-200 block rounded-full" />}
                    <span className={`${latest ? "text-black md:text-white" : "text-black"} text-sm`}>{data?.readTime}</span>
                </div>

            </div>
        </div>
    )
}

export default BlogCard
