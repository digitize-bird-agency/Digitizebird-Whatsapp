import { Button } from '@/components/ui/moving-border'
import React from 'react'

type AdvantagesType = {
    sectionHeading: string;
    sectionDescription: string;
    advantages: {
        id: number;
        heading: string;
        description: string;
        color: string;
        duration: number;
    }[];
}

interface AdvantagesProps {
    data: AdvantagesType;
}

const Advantages = ({ data }: AdvantagesProps) => {
    return (
        <section className="h-fit container flex flex-col items-start md:flex-row gap-10 justify-between py-20 border-b border-gray-200">
            <div className="relative md:sticky top-0 w-full text-center md:text-start">
                <h2 className="text-3xl font-bold tracking-tight">
                    {data.sectionHeading}
                </h2>
                <p className="mt-2 text-xl font-normal tracking-tight w-full md:w-[80%]">
                    {data.sectionDescription}
                </p>
            </div>
            <div className="w-full gap-2 lg:gap-10 grid grid-cols-1 lg:grid-cols-2">
                {
                    data.advantages.map((item) => {
                        return <Button
                            key={item.id}
                            borderRadius="1rem"
                            duration={item.duration}
                            containerClassName="min-h-40 h-full w-full"
                            borderClassName={`bg-[radial-gradient(${item.color}_40%,transparent_60%)]`}
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <h3 className="text-xl text-start font-bold ">
                                {item.heading}
                            </h3>
                            <p className="text-start">
                                {item.description}
                            </p>
                        </Button>
                    })
                }
            </div>
        </section>
    )
}

export default Advantages
