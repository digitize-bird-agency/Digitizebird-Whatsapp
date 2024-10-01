import React from 'react'

const StickyVideo = ({ videoSource }: { videoSource: string }) => {
    return (
        <div className="md:col-span-1 mb-4 md:mb-0 md:sticky md:top-[20px] bg-[#d2ffed] rounded-md p-8 py-20">
            <video
                className="w-full h-full rounded-md"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoSource} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default StickyVideo
