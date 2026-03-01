import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { scrollToTop } from '../utils/helpers';
import AnimateOnScroll from './AnimateOnScroll';
import { SkeletonGrid } from './Skeleton';

/**
 * Portfolio section displaying project showcase
 * @returns {JSX.Element} Portfolio component
 */
const Portfolio = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section name="portfolio" className='bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 w-full text-slate-800 dark:text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                <div className='pb-8 mt-14'>
                    <p className='text-4xl font-bold inline border-b-4 border-indigo-500'>Portfolio</p>
                    <p className='py-6 text-slate-500 dark:text-gray-400'>Check out some of my work right here</p>
                </div>

                {loading ? (
                    <div className='w-[90%] mx-auto px-12 sm:px-0' aria-busy="true">
                        <SkeletonGrid count={5} lines={2} />
                    </div>
                ) : (
                    <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0 w-[90%] mx-auto'>
                        {projects.map((project, index) => (
                            <AnimateOnScroll key={project.id} delay={index * 100}>
                                <div className='shadow-md shadow-gray-200 dark:shadow-gray-700 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-gray-800/50'>
                                    <img src={project.src} alt={project.title} title={project.desc} className='rounded-t-md duration-200 w-full h-[100px] hover:scale-105 object-cover' />
                                    <div className='flex items-center justify-around'>
                                        <a href={project.ref}
                                            rel="noreferrer"
                                            target="_blank"
                                            className='w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105 text-indigo-600 dark:text-indigo-400 font-medium'>
                                            Code
                                        </a>

                                        {project.demo ? (
                                            <a href={project.demo}
                                                rel="noreferrer"
                                                target={"_blank"}
                                                className='w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105 text-indigo-600 dark:text-indigo-400 font-medium'>
                                                Demo
                                            </a>
                                        ) : (
                                            <button
                                                onClick={scrollToTop}
                                                className='w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105 text-indigo-600 dark:text-indigo-400 font-medium'>
                                                Demo
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio; 
