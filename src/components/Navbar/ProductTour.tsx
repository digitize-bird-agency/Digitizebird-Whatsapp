import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const ProductTour = () => {
    return (
        <div className="relative z-10">
            <div className="flex flex-col lg:flex-row px-4 lg:px-0 py-4 lg:py-0 gap-8 justify-between overflow-y-auto">
                <div className="max-w-full md:max-w-1/2 w-full group/social">
                    <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] group-hover/social:text-cyan-500 transition-all">
                        Social Media Interactions
                    </p>
                    <Separator />
                    <ul className="mt-3 space-y-1 text-[14px] px-2 rounded-md">
                        <li>
                            <Link
                                href="/whatsapp"
                                className="block p-2 -mx-2 rounded-lg hover:bg-black/[0.03] transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-emerald-600"
                            >
                                WhatsApp
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/instagram"
                                className="block p-2 -mx-2 rounded-lg hover:bg-black/[0.03] transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-400"
                            >
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/facebook"
                                className="block p-2 -mx-2 rounded-lg hover:bg-black/[0.03] transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-blue-600"
                            >
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/telegram"
                                className="block p-2 -mx-2 rounded-lg hover:bg-black/[0.03] transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-blue-400"
                            >
                                Telegram
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/line"
                                className="block p-2 -mx-2 rounded-lg hover:bg-black/[0.03] transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-yellow-500"
                            >
                                Line
                            </Link>
                        </li>
                    </ul>
                    <Link
                        href="/woocommerce"
                        className="flex items-center gap-1 hover:translate-x-2 transition-all"
                    >
                        <img
                            src="/images/social/woocommerce.png"
                            alt="woo commerce"
                            className="h-[30px] w-auto translate-y-1"
                        />
                        <span className="text-sm block p-2 mt-2 -mx-2 text-gray-800 font-semibold hover:text-[#96588a]">
                            Digitize for WooCommerce
                        </span>
                    </Link>
                </div>
                <div className="max-w-1/2 w-full group/products">
                    <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] group-hover/products:text-yellow-500 transition-all">
                        Take a Product Tour
                    </p>
                    <Separator />
                    <div className="overflow-hidden mt-2">
                        <img
                            src={"/images/productDemo.png"}
                            className="!h-auto !w-full rounded-sm"
                            alt="Product DEmo"
                        />
                        <Button variant={"trans"} className="mt-2 w-full group/tourbutton [transform:translateZ(0)] px-6 py-3 rounded-md bg-gray-200 overflow-hidden relative before:absolute before:bg-yellow-400 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-500">
                            <span className="relative z-0 text-gray-800 group-hover/tourbutton:text-white transition ease-in-out duration-500 flex items-center gap-2">
                                Get a Demo <HiOutlineArrowNarrowRight className="group-hover/tourbutton:translate-x-2 transition-transform" />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTour;
