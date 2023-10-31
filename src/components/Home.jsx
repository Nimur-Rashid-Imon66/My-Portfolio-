import React from 'react';


function Home() {
    console.log('../assets/propic.png');
    return (
        <div name="home" className="flex flex-col justify-center items-center w-full bg-gradient-to-b from-black h-screen to-gray-800 mx-auto px-4 md:flex-row gap-4">
            <div className="">
                <h1 className="text-white  text-4xl px-2  md:px-12 font-semibold">Hey I'am Full Stack Developer</h1>
                <p className='text-gray-400 py-6 px-2 md:px-12 ' >Also a passionete competitive programmer. <br />
                I perticiated more then 200+ programming contest both online and ofline </p>
                
                {/* <div className=' flex items-center justify-center text-xl text-white text-center font-semibold px-2 py-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 max-w  rounded-lg'>
                    <button className='flex items-center justify-center gap-2 '>
                        Protfolio 
                        <span className='text-2xl  hover:rotate-90 absolute left-'><div > {'>'}</div> </span>
                    </button>
                 </div> */}
            </div>
            <img src='../propic.jpg' className='h-[240px] w-[240px]  rounded-xl object-fill
                 ' />
        </div>
    );
}

export default Home;