import React from 'react';

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            src: '../project1.jpg',
            desc:"HTML & CSS-NonResponsive"
        },
        {
            id: 2,
            src:'../project2.jpg',
            desc:"HTML & CSS-Responsive "
        },
        {
            id: 3,
            src: '../project3.jpg',
            desc:"HTML & Tailwind-NonResponsive"
        },
        {
            id: 4,
            src: '../project4.jpg',
            desc:"React.js & Tailwind"
        },
        {
            id: 5,
            src: '../project5.jpg',
            desc:"React.js & Tailwind"
        },
    ]
    console.log(projects);
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen font-inter'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  '>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0 w-[90%] md:w-auto mx-auto'>
                    {
                      
                        projects.map((project) => {
                            return (
                            <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={project.src} alt="dsaf" title={project.desc} className='rounded-md duration-200  w-full h-[100px] hover:scale-105'/>
                            <div className='flex items-center justify-center '>
                                <button className='w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105'>See Code</button>
                                {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button> */}
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
