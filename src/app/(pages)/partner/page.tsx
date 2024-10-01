import Advantages from '@/components/Common/Advantages';
import SuccessStory from '@/components/Common/SuccessStory';
import { Button } from '@/components/ui/moving-border';
import { Button as Btn } from "@/components/ui/button"
import { partnerAdvantages, whyPartner } from '@/constants/data';
import { Metadata } from 'next';
import Image from 'next/image';
import { IoChevronForward } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from 'next/link';
import Ratings from '@/app/_components/Ratings';
import { PartnerFaqs } from '@/components/Faqs/PartnerFaqs';
export const metadata: Metadata = {
    title: "Partners | Digitize Bird",
    description: "Let's Connect Together",
};
const Partner = () => {
    return (

        <div className='container w-full'>
            <section className='flex flex-col lg:flex-row items-center justify-between py-14 lg:py-0'>
                <div className='flex flex-col gap-4 items-center lg:items-start'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-start tracking-tighter font-bold'>Digitize Bird <br /><span className='text-emerald-600'>Partner Program</span></h1>
                    <p className='sm:text-sm md:text-md lg:text-lg text-center lg:text-start max-w-[400px] lg:max-w-full'>Let&apos;s help brands create engaging ecommerce experiences together. Our goal is to grow together, while ultimately helping scale our mutual clients.</p>
                    <Button borderRadius="1rem"
                        duration={3000}
                        containerClassName="h-fit"
                        borderClassName="bg-[radial-gradient(var(--green-300)_40%,transparent_60%)]"
                        className="bg-white hover:bg-gray-100 transition-color group duration-300 flex flex-row items-center py-4 text-[16px] tracking-tight text-black border-neutral-200 dark:border-slate-800">
                        <span>Become a Partner</span><GoArrowRight className='group-hover:ml-1 transition-all' />
                    </Button>
                </div>
                <div>
                    <Image
                        src="/images/engage.webp"
                        alt="LOGO"
                        sizes="100vw"
                        style={{
                            width: '80%',
                            height: 'auto',
                        }}
                        className='mx-auto'
                        width={0}
                        height={0}
                    />
                </div>
            </section>

            <Advantages data={partnerAdvantages} />
            <section className='h-fit py-20'>
                <h2 className='text-4xl font-semibold tracking-tight text-center'>Why Partner with us</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8 w-full mt-16'>
                    {
                        whyPartner.map((item, index) => {
                            return (
                                <div key={index} className='space-y-2 shadow rounded-md p-6'>
                                    <RiVerifiedBadgeFill className='text-5xl' />
                                    <h3 className='text-2xl font-bold tracking-tight'>{item.heading}</h3>
                                    <p className='text-lg tracking-tight'>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <div className='py-20'>
                <SuccessStory imgSrc="/images/agencies/2.svg" subtitle="Intent train chatbots to interpret the intentions of enquirers." comment="Digitize Bird gives us a great platform with amazing support to create solutions that our clients love." avatar="https://github.com/shadcn.png" ceoTitle="Nofal Khan" ceoSubtitle="Founder & CEO, RwandaMart" />
            </div>
            <div className='flex items-start justify-between bg-white rounded-md mb-20'>
                <div className='px-10 py-20 space-y-4'>
                    <h3 className='text-5xl font-bold tracking-tight'>Curated for their <br />technical expertise</h3>
                    <p className='max-w-[450px] text-xl tracking-tight text-gray-500'>
                        Combining world-class industry and platform expertise, Shopify and WooCommerce service partners specialize in solutions for high-growth businesses.
                    </p>
                    <Btn size={"lg"} className='group !mt-10'>
                        <span>Find an Agency Service</span><GoArrowRight className='ml-2 text-lg group-hover:ml-3 transition-all' />
                    </Btn>
                    <div className='!mt-6'>
                        <Link href={"/"} className="relative text-xl tracking-tight after:absolute after:bg-emerald-300 after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300"><span className='inline-block'>Become an Agency Service <IoChevronForward className='inline-block' /></span></Link>
                    </div>
                </div>
                <div>
                    <Image
                        src="/images/partnered.webp"
                        alt="LOGO"
                        sizes="100vw"
                        style={{
                            width: '80%',
                            height: 'auto',
                        }}
                        className='mx-auto'
                        width={0}
                        height={0}
                    />
                </div>
            </div>
            <div className='container max-w-4xl'>
                <PartnerFaqs />
            </div>
            <div>
                <Ratings />
            </div>
        </div >
    )
}

export default Partner
