import cx from "clsx";

type SubTitle = {
    subTitle: string;
    className?: string;
};

export const SubTitle = ({ subTitle, className }: SubTitle) => {
    return (
        <div className="flex text-black w-full items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4">
            <span className="h-3 w-3 bg-blue-400 block rounded-full" />
            <span className={cx(className)}>{subTitle}</span>
        </div>
    );
};