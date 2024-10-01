"use client"
import React, { Suspense } from 'react'
import Filters from './_components/Filters'
import Agencies from './_components/Agencies'
import MobileFilter from './_components/MobileFilter'
// import { ReadonlyURLSearchParams } from 'next/navigation'

const page = () => {

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='container mt-10  py-10 text-center h-[80vh] md:h-[60vh] flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-5xl tracking-tight font-semibold'>Agency Services</h1>
                    <p className='text-lg md:text-2xl max-w-xl font-light tracking-tight'>Curated for their technical expertise, service partners help migrate, build, integrate and grow your business.</p>
                </div>
                <section className='container grid grid-cols-12 gap-4 mb-20'>
                    <div className='hidden lg:block lg:col-span-3'>
                        <Filters />
                    </div>
                    <div className='col-span-12 lg:hidden'>
                        <h3>Filter By</h3>
                        <MobileFilter />
                    </div>
                    <div className='col-span-12 lg:col-span-9'>
                        <Agencies />
                    </div>
                </section>
            </Suspense>
        </>
    )
}

export default page

