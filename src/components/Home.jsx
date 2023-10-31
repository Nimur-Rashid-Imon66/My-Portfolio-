import React from 'react';


function Home() {
    return (
        <div name="home" className="w-full bg-gradient-to-b from-black  to-gray-800 md:h-screen">
            <div className="flex flex-col items-center justify-around py-[15%] md:flex-row ">

                <div className="">
                    <h1 className="text-white  text-4xl px-2  md:px-12 font-semibold">I'am Frontend Developer</h1>
                    <p className='text-gray-400 py-6 px-2 md:px-12 max-w-2xl ' >I am a dedicated frontend developer and a passionate competitive programmer. With a strong foundation in web development and a knack for solving complex coding challenges, I bring a unique blend of creativity and problem-solving to every project. Explore my portfolio to see how I transform innovative ideas into engaging, user-friendly web experiences while continuously honing my skills through competitive programming challenges.</p>
                
                {/* <div className=' flex items-center justify-center text-xl text-white text-center font-semibold px-2 py-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 max-w  rounded-lg'>
                    <button className='flex items-center justify-center gap-2 '>
                    Protfolio 
                    <span className='text-2xl  hover:rotate-90 absolute left-'><div > {'>'}</div> </span>
                    </button>
                </div> */}
                </div>
                <img src='../propic.jpg' className='rounded-xl h-[310px] w-[250px] object-left
                 ' />
          </div>
        </div>
    );
}

export default Home;