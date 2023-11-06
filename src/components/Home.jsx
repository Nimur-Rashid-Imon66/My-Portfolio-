import React from 'react';
import { useTypewriter,Cursor} from 'react-simple-typewriter';



function Home() {
    const [text] = useTypewriter({
        words: [ 'Frontend Developer.', 'Competitive Programmer.'] ,
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <div name="home" className="w-full bg-gradient-to-b from-black  to-gray-800 md:h-screen">
            <div className="flex flex-col items-center justify-center py-[15%] md:flex-row ">

                <div className="pt-10">
                    <h1 className="flex flex-col md:flex-row text-white  text-4xl px-2  md:px-12 font-semibold">{`I'am a `}
                    <span className="text-4xl text-orange-500 md:ml-2">
                            {
                                text
                                
                            }
                            <Cursor />
                            
                        </span>
                
                    
                    </h1>
                    <p className='text-gray-400 py-6 px-2 md:px-12 max-w-2xl ' >I am a dedicated frontend developer and a passionate competitive programmer. With a strong foundation in web development and a knack for solving complex coding challenges, I bring a unique blend of creativity and problem-solving to every project. Explore my portfolio to see how I transform innovative ideas into engaging, user-friendly web experiences while continuously honing my skills through competitive programming challenges.</p>
                </div>
                <img src='../propic.jpg' className='rounded-xl h-[310px] w-[250px] object-left
                 ' />
          </div>
        </div>
    );
}

export default Home;