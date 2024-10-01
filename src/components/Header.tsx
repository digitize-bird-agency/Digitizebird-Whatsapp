"use client";
import { motion, useCycle } from "framer-motion";
import React, { useEffect, useState } from "react";
import NavBar from "./Navbar/NavBar";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import ProductTour from "./Navbar/ProductTour";
import ResourcesTour from "./Navbar/ResourcesTour";

const Header = () => {
    const [mobileNav, toggleMobileNav] = useCycle(false, true);
    const [productsToggle, toggleProducts] = useCycle(false, true);
    const [resourceToggle, toggleResource] = useCycle(false, true);

    return (
        <header className="relative !z-50 bg-white lg:bg-transparent top-0 inset-x-0 mx-auto shadow-md px-3.5 md:px-20 py-4 flex items-center justify-between">
            <Link
                href="/"
                className="font-bold text-black text-xl flex overflow-hidden flex-grow w-[200px]"
            >
                {/* TODO: Logo size reduce when on tablet  */}
                <img
                    src={"/images/logo/digitize-bird.svg"}
                    alt="Digitize Bird Whatsapp Logo"
                    className="h-12 w-full object-contain"
                />
            </Link>
            <div className="w-full hidden lg:flex items-center justify-between">
                <NavBar />
                <div className="flex items-center gap-2">
                    <Button size={"lg"} variant={"outline"}>
                        Login
                    </Button>
                    <Button size={"lg"} variant={"default"}>
                        Start Free Trail
                    </Button>
                </div>
            </div>
            {/* Mobile Menu  */}
            <div className="block lg:hidden">
                <motion.button
                    animate={mobileNav ? "open" : "closed"}
                    onClick={() => toggleMobileNav()}
                    className="flex flex-col gap-1"
                >
                    <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 5 },
                        }}
                        className="w-5 h-px rounded-full bg-gray-900 block"
                    ></motion.span>
                    <motion.span
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        className="w-5 h-px rounded-full bg-gray-900 block"
                    ></motion.span>
                    <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -5 },
                        }}
                        className="w-5 h-px rounded-full bg-gray-900 block"
                    ></motion.span>
                </motion.button>
                <div className={`bg-white !shadow-md absolute ${mobileNav ? "opacity-100 h-fit" : "opacity-0 h-0"} transition-opacity w-full top-[80px] left-0 space-y-10 mx-auto`}>
                    <div className="h-full flex flex-col justify-between py-10">
                        <ul>
                            <li className={`text-md font-semibold`} onClick={() => toggleProducts()}>
                                <button
                                    className={`flex px-4 py-4 items-center justify-between w-full ${productsToggle && "text-green-900"}`}
                                >
                                    Products <FaPlus className={`${productsToggle ? "hidden opacity-0" : "block opacity-100"}`} /> <FaMinus className={`${productsToggle ? "block opacity-100" : "hidden opacity-0"}`} />
                                </button>
                                <motion.ul className={`bg-gray-100 ${productsToggle ? "block" : "hidden"}`} animate={productsToggle ? { opacity: 1 } : { opacity: 0 }} >
                                    <li className="text-md font-medium">
                                        <ProductTour />
                                    </li>
                                </motion.ul>
                            </li>
                            {/*TODO: Resolve issue of button click on mobile screen*/}
                            <li className={`text-md font-semibold`} onClick={() => toggleResource()}>
                                <button
                                    className={`flex px-4 py-4 items-center justify-between w-full ${resourceToggle && "text-green-900"}`}
                                >
                                    Resources <FaPlus className={`${resourceToggle ? "hidden opacity-0" : "block opacity-100"}`} /> <FaMinus className={`${resourceToggle ? "block opacity-100" : "hidden opacity-0"}`} />
                                </button>
                                <motion.ul className={`bg-gray-100 ${resourceToggle ? "block" : "hidden"}`} animate={resourceToggle ? { opacity: 1 } : { opacity: 0 }}>
                                    <li className="text-md font-medium">
                                        <ResourcesTour />
                                    </li>
                                </motion.ul>
                            </li>
                            <li className={`text-md font-semibold`}>
                                <Link href="/partner"
                                    className={`flex px-4 py-4 items-center justify-between w-full`}
                                >
                                    Partners
                                </Link>
                            </li>
                            <li className={`text-md font-semibold`}>
                                <Link href="/pricing"
                                    className={`flex px-4 py-4 items-center justify-between w-full`}
                                >
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                        <div className="px-4 space-y-3 md:space-y-0 block md:flex md:gap-4 items-center justify-between">
                            <Button size={"lg"} variant={"outline"} className="w-full">
                                Login
                            </Button>
                            <Button size={"lg"} variant={"default"} className="w-full">
                                Start Free Trail
                            </Button>
                        </div>
                        <p className="text-center text-xs md:!block mt-3">Digitize Bird FZE @ 2024</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
