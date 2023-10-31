import React from 'react';

const About = () => {
    
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            {/* <hr></hr> */}
            <div
                className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
            >
                <div className="pb-8"> 
                    <p className="text-4xl font-bold inline border-b-4  border-gray-500">About</p>
                </div>
           
            <p className="text-xl mt-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis non hic voluptate reiciendis est impedit nihil tempore cumque! </p>

            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quasi eaque, ea earum qui optio eveniet illum temporibus, corrupti quis impedit? 
            </p>
            </div>
        </div>
    );
};

export default About;