import { cn } from "@/lib/utils";

export default function Loading() {
    return <div className="fixed z-[99999] h-screen w-screen flex items-center justify-center bg-slate-300/70">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("animate-spin")}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    </div>
}