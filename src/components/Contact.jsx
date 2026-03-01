import { CONTACT_FORM_ENDPOINT } from '../constants';
import AnimateOnScroll from './AnimateOnScroll';

/**
 * Contact form section
 * @returns {JSX.Element} Contact component
 */
const Contact = () => {

    return (
        <section name="contact" className='bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 w-full text-slate-800 dark:text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-indigo-500'>Contact Me</p>
                    <p className='py-6 text-slate-500 dark:text-gray-400'>Write here what you want to know</p>
                </div>

                <AnimateOnScroll>
                    <div className="flex justify-center items-center">
                        <form action={CONTACT_FORM_ENDPOINT} method="POST" className="flex flex-col w-full md:w-1/2">
                            <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors" required/>
                            <input type="email" name="email" placeholder="Enter Your Email" className="my-4 p-2 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors" required/>
                            <textarea placeholder="What is in your mind" name="msg" className="p-2 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors" required></textarea> 
                            <button className="text-white bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 my-8 mx-auto flex items-center rounded-xl font-semibold hover:scale-105 duration-200 hover:shadow-lg hover:shadow-indigo-500/30">Submit</button>
                        </form>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Contact; 
