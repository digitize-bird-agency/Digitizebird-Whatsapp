import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import React from 'react'

import Image from 'next/image';
const ECommerceStack = () => {
    return (
        <section className='container min-h-screen py-20'>
            <h2 className='text-3xl my-20 text-center font-semibold tracking-tight'>Designed for eCommerce, built for your entire stack</h2>
            <BentoGrid className="max-w-5xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        hrefSocial={item.hrefSocial}
                        className={i === 0 || i === 4 || i == 6 || i == 7 ? "lg:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
    {
        title: "Shopify",
        description: "Discover Digitize Bird for Shopify.",
        header: <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
                alt='Shopify'
                src='/images/social/shopify.png'
                className='h-28 w-28 mx-auto object-contain'
            />
        </div>,
        hrefSocial: "/",
    }, {
        title: "WooCommerce",
        description: "Discover Digitize Bird for WooCommerce",
        header: <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
                alt='WooCommerce'
                src='/images/social/woocommerce.png'
                className='h-28 w-28 mx-auto object-contain'
            />
        </div>,
        hrefSocial: "/",
    }, {
        title: "Viber",
        description: "Discover Digitize Bird for Viber",
        header: <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
                alt='Viber'
                src='/images/social/viber.svg'
                className='h-28 w-28 mx-auto object-contain'
            />
        </div>,
        hrefSocial: "/",
    },
    {
        title: "Messenger",
        description: "Discover Digitize Bird for Messenger",
        header: <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
                alt='Messenger'
                src='/images/social/messenger.svg'

                className='h-28 w-28 mx-auto object-contain'
            />
        </div>,
        hrefSocial: "/",
    }, {
        title: "Whatsapp",
        description: "Discover Digitize Bird for Whatsapp",
        header: <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
                alt='Whatsapp'
                src='/images/social/whatsapp.svg'
                className='h-28 w-28 mx-auto object-contain'
            />
        </div>,
        hrefSocial: "/",
    }, {
        title: "Instagram",
        description: "Discover Digitize Bird for Insta",
        header: <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
                alt='Instagram'
                src='/images/social/instagram.svg'
                className='h-28 w-28 mx-auto object-contain'
            />
        </div>,
        hrefSocial: "/",
    },
    {
        title: "Line",
        description: "Discover Digitize Bird for Line",
        header: <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
                alt='Line'
                src='/images/social/line.svg'
                className='h-28 w-28 mx-auto object-contain'
            />
        </div>,
        hrefSocial: "/",
    },
    {
        title: "Telegram",
        description: "Discover Digitize Bird for Telegram",
        header: <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
                alt='Telegram'
                src='/images/social/telegram.svg'
                className='h-28 w-28 mx-auto object-contain'
            />
        </div>,
        hrefSocial: "/",
    },

];

export default ECommerceStack
