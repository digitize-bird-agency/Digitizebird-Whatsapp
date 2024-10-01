import React from 'react'

const Brands = () => {
    return (
        <section className="container py-20 !min-h-[70vh]">
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-center">
                Brand Who Use Digitize Bird
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 items-center justify-center">
                <div className="mx-auto">
                    <img
                        src="/images/agencies/1.svg"
                        alt="Company 1"
                        className="h-24 w-auto aspect-video object-contain"
                    />
                </div>
                <div className="mx-auto">
                    <img
                        src="/images/agencies/2.svg"
                        alt="Company 1"
                        className="h-24 w-auto aspect-video object-contain"
                    />
                </div>
                <div className="mx-auto">
                    <img
                        src="/images/agencies/3.svg"
                        alt="Company 1"
                        className="h-24 w-auto aspect-video object-contain"
                    />
                </div>
                <div className="mx-auto">
                    <img
                        src="/images/agencies/4.svg"
                        alt="Company 1"
                        className="h-24 w-auto aspect-video object-contain"
                    />
                </div>
                <div className="mx-auto">
                    <img
                        src="/images/agencies/5.webp"
                        alt="Company 1"
                        className="h-24 w-auto aspect-video object-contain"
                    />
                </div>
                <div className="mx-auto">
                    <img
                        src="/images/agencies/6.svg"
                        alt="Company 1"
                        className="h-24 w-auto aspect-video object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default Brands
