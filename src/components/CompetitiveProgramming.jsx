import { competitivePlatforms } from '../data/competitiveProgramming';
import AnimateOnScroll from './AnimateOnScroll';

/**
 * Competitive Programming section showing platform statistics
 * @returns {JSX.Element} CompetitiveProgramming component
 */
const CompetitiveProgramming = () => {
    return (
        <section name="CP" className='bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 w-full text-slate-800 dark:text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-indigo-500'>Competitive Programming</p>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 pt-8 sm:px-0 w-[95%] mx-auto'>
                    {competitivePlatforms.map((platform) => (
                        <AnimateOnScroll key={platform.id}>
                            <div className='shadow-md shadow-gray-200 dark:shadow-gray-700 rounded-lg py-4 px-2 bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
                                <div className='flex items-center'>
                                    <img src={platform.src} alt={platform.platform} title={platform.platform} className='pl-3 pr-3 pt-2 rounded-md duration-200 w-[46px] h-[46px] hover:scale-105' />
                                    <a href={platform.ref}
                                        rel="noreferrer"
                                        target={"_blank"}
                                        className='pt-3 text-[20px] hover:scale-105 font-semibold text-indigo-600 dark:text-indigo-400'>{platform.handle}</a>
                                    <img src='../link.svg' alt="External link" className='w-5 h-5 pt-2'/>
                                </div>
                                <div className='pl-3 flex flex-col gap-1 font-medium text-slate-600 dark:text-gray-300'>
                                    <p>Max Rating : {platform.rating}</p>
                                    <p>Problems Soled : {platform.solvecout}</p>
                                    <p>Contest Participants : {platform.contest}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompetitiveProgramming;
