import { COPYRIGHT_YEAR, PERSONAL_INFO } from '../constants';

/**
 * Footer component displaying copyright information
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 py-4 sm:py-3 border-t border-gray-200 dark:border-gray-800">
            <div className="mx-5 md:max-w-lg md:mx-auto flex flex-col md:flex-row items-center justify-between py-1">
                <p className="text-slate-600 dark:text-gray-300 text-center text-xs">© {COPYRIGHT_YEAR} {PERSONAL_INFO.initials}. All rights reserved.</p>
                <div className="flex flex-col md:items-end py-2 sm:py-0">
                    <p className="text-slate-600 dark:text-gray-300 text-center text-xs">Developed by <span className="text-indigo-600 dark:text-indigo-400">{PERSONAL_INFO.name}</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;