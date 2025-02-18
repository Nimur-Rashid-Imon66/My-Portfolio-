import React from 'react';

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            src: '../project1.jpg',
            desc: "HTML & CSS-NonResponsive",
            ref: 'https://github.com/Nimur-Rashid-Imon66/IIUCWDS-A7-Forntend',
            demo: 'https://nimur-rashid-imon66.github.io/IIUCWDS-A7-Forntend/'
        },
        {
            id: 2,
            src:'../project2.jpg',
            desc:"HTML & CSS-Responsive ",
            ref:'https://github.com/Nimur-Rashid-Imon66/IIUCWDS-A8-Forntend.',
            demo: 'https://nimur-rashid-imon66.github.io/IIUCWDS-A8-Forntend./'
        },
        {
            id: 3,
            src: '../project3.jpg',
            desc:"HTML & Tailwind-NonResponsive",
            ref:'https://github.com/Nimur-Rashid-Imon66/IIUCWDS-A9-Forntend',
            demo: 'https://nimur-rashid-imon66.github.io/IIUCWDS-A9-Forntend/'
        },
        {
            id: 4,
            src: '../project4.jpg',
            desc:"React.js & Tailwind",
            ref:'https://github.com/Nimur-Rashid-Imon66/Nimur-Rashid-Imon66-IIUCWPS-A14-React-QuizApp',
            demo: ' https://nimur-rashid-imon66.github.io/Nimur-Rashid-Imon66-IIUCWPS-A14-React-QuizApp/'
        }
    ]
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
                            <img src={project.src} alt="dsaf" title={project.desc} className='rounded-md duration-200  w-full h-[100px] hover:scale-105'/>
                            <div className='flex items-center justify-around '>
                                        <a href={project.ref}
                                            target="_blank"
                                            className='w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105'>
                                            Code
                                        </a>
                                    
                                        <a href={project.demo}
                                            target={"_blank"}
                                            className='w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105'>
                                            Demo
                                        </a>
                                 </div>
                        </div>) 
                        })

                    }
                    {/* for this project */}
                    <div key={5} className='shadow-md shadow-gray-600 rounded-lg '>
                            <img src={'../project5.jpg'} alt="dsaf" title={"React.js & Tailwind"} className='rounded-md duration-200  w-full h-[100px] hover:scale-105'/>
                            <div className='flex items-center justify-around '>
                                        <a href={'https://github.com/Nimur-Rashid-Imon66/My-Portfolio-'}
                                            target="_blank"
                                            className='w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105'>
                                            Code
                                        </a>
                                        <button
                                            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                            className='w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105'>
                                            Demo
                                        </button>
                                        
                                 </div>
                        </div>
                </div>
             </div>

        </div>
    );
};

export default Portfolio; 
