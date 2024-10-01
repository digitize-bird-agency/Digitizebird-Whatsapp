import React from 'react'
import ResourcesTour from './ResourcesTour'

const MenuTwo = () => {
    return (
        <div
            className="absolute top-4 left-1/2 -translate-x-1/2 transition group-hover/resource:translate-y-5 translate-y-0 opacity-0 invisible group-hover/resource:opacity-100 group-hover/resource:visible duration-500 ease-in-out group-hover/resource:transform z-50 min-w-[560px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div
                    className="w-10 h-10 bg-white transform rotate-45 absolute top-0 left-1/2 z-0 translate-x-0 transition-transform group-hover:-translate-x-1/2 duration-500 ease-in-out rounded-sm">
                </div>
                <ResourcesTour />
            </div>
        </div>
    )
}

export default MenuTwo
