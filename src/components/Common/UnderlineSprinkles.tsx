import React from 'react'
import { useMediaQuery } from "usehooks-ts"
import { SparklesCore } from '../ui/sparkles'

const UnderlineSprinkles = () => {
    const mobileScreen = useMediaQuery(('(max-width: 768px)'))
    return (
        <div className="w-full h-screen absolute top-0">
            {/* Gradients */}
            {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

            {/* Core component */}
            {
                !mobileScreen && <SparklesCore
                    background="transparent"
                    minSize={0.7}
                    maxSize={1}
                    particleDensity={500}
                    className="w-full h-full"
                    particleColor="#fff"
                />
            }


            {/* Radial Gradient to prevent sharp edges */}
            {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
        </div>
    )
}

export default UnderlineSprinkles
