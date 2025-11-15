import { COPYRIGHT_YEAR, PERSONAL_INFO } from '../constants';

/**
 * Footer component displaying copyright information
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
    return (
        <div className="bg-gray-800 md:bg-black py-4 sm:py-3 ">
            <div className="mx-5 md:max-w-lg md:mx-auto flex flex-col md:flex-row  items-center justify-between border-t-2 md:border-none py-1 ">
            <p className="text-white text-center text-xs">© {COPYRIGHT_YEAR} {PERSONAL_INFO.initials}. All rights reserved.</p>
                <div className=" flex flex-col md:items-end py-2 sm:py-0 ">

                <p className="text-white text-center text-xs" >Developed by <span className="text-yellow-300">{PERSONAL_INFO.name}</span></p>
                </div>
                
                
           
            </div>
            
        </div>
    );
};

export default Footer;