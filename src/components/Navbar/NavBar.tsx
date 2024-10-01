import Link from "next/link";
import { Button } from "../ui/button"
import MenuOne from "./MenuOne"
import MenuTwo from "./MenuTwo"
import { TbChevronDownRight } from "react-icons/tb";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const NavBar = () => {

    return (
        <>
            < NavigationMenu className="!z-50">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
                        <NavigationMenuContent className="p-3">

                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                                <li className="col-span-1">
                                    <NavigationMenuLink asChild>
                                        <div>
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
                                    </NavigationMenuLink>
                                </li>
                                <li className="col-span-1">
                                    <div>
                                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] group-hover/social:text-cyan-500 transition-all">
                                            Social Media Interactions
                                        </p>
                                        <Separator />
                                    </div>
                                    <ListItem href="/whatsapp" title="Whatsapp">

                                    </ListItem>
                                    <ListItem href="/facebook" title="Facebook">

                                    </ListItem>
                                    <ListItem href="/instagram" title="Instagram">

                                    </ListItem>
                                    <ListItem href="/telegram" title="Telegram">

                                    </ListItem>
                                    <ListItem href="/line" title="Line">

                                    </ListItem>
                                    <ListItem href="/woocommerce" title="WooCommerce">

                                    </ListItem>
                                </li>


                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            {/* <ListItem href="/docs" title="Documentation" className="!list-none">
                                Start integrating in no time
                            </ListItem> */}
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                <li className="col-span-1">
                                    <ListItem href="/docs" title="Documentation">
                                        Start integrating in no time
                                    </ListItem>
                                    <ListItem href="/docs" title="Digitize Whatsapp Blog">
                                        Guides, Reports and Best Practices
                                    </ListItem>
                                    <ListItem href="/clients" title="Client Success Stories">
                                        See our client&apos;s success stories
                                    </ListItem>
                                </li>
                                <li className="col-span-1">
                                    <ListItem href="/support" title="Help Center">

                                    </ListItem>
                                    <ListItem href="/docs" title="Documentation">

                                    </ListItem>
                                    <ListItem href="/apis" title="API Reference">

                                    </ListItem>
                                    <ListItem href="/roadmap" title="Roadmap">

                                    </ListItem>
                                    <ListItem href="/agency" title="Find an Agency">

                                    </ListItem>

                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem >
                        <Link href="/partner" legacyBehavior passHref >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Partners
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/pricing" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Pricing
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu >
        </>
    )
}

export default NavBar

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Documentation",
        href: "/docs/primitives/alert-dialog",
        description:
            "Start integrating in no time",
    },
    {
        title: "Digitize Whatsapp Blog",
        href: "/blog",
        description:
            "Guides, Reports and Best Practices",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"