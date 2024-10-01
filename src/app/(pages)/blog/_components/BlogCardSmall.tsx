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

const BlogCardSmall = ({ data, classes }: { data: blogData, classes: string }) => {
    return (
        <div key={data.id} className={clsx(`flex group rounded-2xl bg-[#f5f6f6] flex-col gap-4 relative shadow !overflow-hidden`, classes)}>
            <div className="aspect-video h-full">
                <Link href={`/blog/${data.slug}`}>
                    <Image
                        src={data.mainImage}
                        alt="Blog A"
                        width={600}
                        height={400}
                        className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                    />
                </Link>
            </div>
            <div className={`h-fit w-full p-3`}>
                <div className='flex flex-col items-start justify-between'>
                    <div>
                        <Heading as="h3" className={`font-semibold tracking-tight text-sub-title mb-2`}>
                            <Link href={`/blog/${data.slug}`}>{data.title}</Link>
                        </Heading>
                        <p className={`font-light tracking-tight line-clamp-2`}>{data.desc}</p>
                    </div>
                    {data.category.length > 0 && <div className='flex items-center gap-2 mt-2'>
                        {data.category.map((category, index) => <span key={index} className={`border-2 bg-transparent hover:bg-neutral-500 hover:text-white px-2 py-1 text-sm  transition cursor-pointer rounded-full`}>
                            {category}
                        </span>)}

                    </div>}
                </div>
                <div className="flex items-center gap-6 mt-6">
                    <div className="flex items-center gap-3">
                        <Image
                            src={data.authorImage.image}
                            alt="Bruno"
                            height={40}
                            width={40}
                            className="h-[40px] object-cover rounded-full"
                            priority
                        />
                        <span className={``}>{data.author}</span>
                    </div>
                    <span className="h-3 w-3 bg-blue-200 block rounded-full" />
                    <span className={``}>{data?.readTime}</span>
                </div>

            </div>
        </div>
    )
}

export default BlogCardSmall
