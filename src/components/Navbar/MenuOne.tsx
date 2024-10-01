import React from "react";
import ProductTour from "./ProductTour";

const MenuOne = () => {
    return (
        <div className="absolute top-6 left-[85%] -translate-x-1/2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[600px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 left-1/2 z-0 translate-x-0 transition-transform group-hover:-translate-x-1/2 duration-500 ease-in-out rounded-sm"></div>
                <ProductTour />
            </div>
        </div>
    );
};

export default MenuOne;
