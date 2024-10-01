import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[16rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    hrefSocial,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    hrefSocial: string;
}) => {
    return (
        <Link href={hrefSocial}
            className={cn(
                "relative row-span-1 rounded-xl group/bento shadow hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {/* {icon} */}
                <div className="font-sans text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    <p className="text-center font-semibold text-2xl md:text-xl">{title}</p>
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    <p className="text-center text-lg md:text-sm lg:text-md tracking-tight font-light">{description}</p>
                </div>
            </div>
        </Link>
    );
};
