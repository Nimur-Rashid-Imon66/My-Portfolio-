import { projects } from '../data/projects';

/**
 * Portfolio section displaying project showcase
 * @returns {JSX.Element} Portfolio component
 */
const Portfolio = () => {
    return (
        <div name="portfolio" className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  '>
                <div className='pb-8 mt-14'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0 w-[90%]  mx-auto'>
                    {
                        projects.map((project) => {
                            return (
                                <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg '>
                                    <img src={project.src} alt={project.title} title={project.desc} className='rounded-md duration-200  w-full h-[100px] hover:scale-105' />
                                    <div className='flex items-center justify-around '>
                                        <a href={project.ref}
                                            rel="noreferrer"
                                            target="_blank"
                                            className='w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105'>
                                            Code
                                        </a>

                                        {project.demo ? (
                                            <a href={project.demo}
                                                rel="noreferrer"
                                                target={"_blank"}
                                                className='w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105'>
                                                Demo
                                            </a>
                                        ) : (
                                            <button
                                                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                                className='w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105'>
                                                Demo
                                            </button>
                                        )}
                                    </div>
                                </div>)
                        })

                    }
                </div>
            </div>

        </div>
    );
};

export default Portfolio; 
