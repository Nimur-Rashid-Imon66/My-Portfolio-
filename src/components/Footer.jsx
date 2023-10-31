import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-800 md:bg-black py-4 sm:py-3 ">
            <div className="mx-5 md:max-w-lg md:mx-auto flex flex-col md:flex-row  items-center justify-between border-t-2 md:border-none py-1 ">
            <p className="text-white text-center text-xs">© 2023 NRI. All rights reserved.</p>
                <div className=" flex flex-col md:items-end py-2 sm:py-0 ">

                <p className="text-white text-center text-xs" >Developed by <span className="text-yellow-300">Nimur Rashid Imon</span></p>
                <p className="text-white text-center text-xs" >Inspired by <span className="text-yellow-300">Yash Patel</span></p>
                </div>
                
                
           
            </div>
            
        </div>
    );
};

export default Footer;