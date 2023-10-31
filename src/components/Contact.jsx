import React from 'react';

const Contact = () => {

    return (
        <div name="contact" className='bg-gradient-to-b from-gray-800 to-black  w-full text-white md:h-screen font-inter'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact</p>
                    <p className='py-6'>Write here what you want to know</p>
                </div>

                <div className="flex justify-center items-center ">
                    <form  action="https://getform.io/f/92d74f38-600a-4e99-a143-e8a0909ab08d" method="POST" className="flex flex-col w-full md:w-1/2 text-gray-500 ">
                        <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <input type="text" name="email" placeholder="Enter Your Email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <textarea  placeholder="What is in your mind" name="msg" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" ></textarea> 
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-lg font-semibold hover:scale-105 duration-200 hover:text-gray-400">Submit</button>
                        
                    </form>
                </div>
                
             </div>

        </div>
    );
};

export default Contact; 
