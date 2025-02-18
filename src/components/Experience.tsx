import React from 'react';

const Experience = () => {

    // const projects = [
    //     {
    //         id: 1,
    //         src: '../project1.jpg',
    //         desc: "HTML & CSS-NonResponsive",
    //         ref: 'https://github.com/Nimur-Rashid-Imon66/IIUCWDS-A7-Forntend',
    //         demo: 'https://nimur-rashid-imon66.github.io/IIUCWDS-A7-Forntend/'
    //     },
    //     {
    //         id: 2,
    //         src:'../project2.jpg',
    //         desc:"HTML & CSS-Responsive ",
    //         ref:'https://github.com/Nimur-Rashid-Imon66/IIUCWDS-A8-Forntend.',
    //         demo: 'https://nimur-rashid-imon66.github.io/IIUCWDS-A8-Forntend./'
    //     },
    //     {
    //         id: 3,
    //         src: '../project3.jpg',
    //         desc:"HTML & Tailwind-NonResponsive",
    //         ref:'https://github.com/Nimur-Rashid-Imon66/IIUCWDS-A9-Forntend',
    //         demo: 'https://nimur-rashid-imon66.github.io/IIUCWDS-A9-Forntend/'
    //     },
    //     {
    //         id: 4,
    //         src: '../project4.jpg',
    //         desc:"React.js & Tailwind",
    //         ref:'https://github.com/Nimur-Rashid-Imon66/Nimur-Rashid-Imon66-IIUCWPS-A14-React-QuizApp',
    //         demo: ' https://nimur-rashid-imon66.github.io/Nimur-Rashid-Imon66-IIUCWPS-A14-React-QuizApp/'
    //     }
    // ]
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  '>
                <div className='pb-8 mt-14'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Experience</p>
                    <p className='py-6'>Desc</p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0 w-[90%]  mx-auto'>
                   Content
                </div>
             </div>

        </div>
    );
};

export default Experience; 
