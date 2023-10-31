import React from 'react';

const About = () => {
    const links = [
        {
            id: 1,
            src: 'github.svg',
            ref:'https://github.com/Nimur-Rashid-Imon66'
        },
        {
            id: 2,
            src: 'codeforces.svg',
            ref:'https://codeforces.com/profile/IMON193066'
        },
        {
            id: 3,
            src: 'atcoder.svg',
            ref:'https://atcoder.jp/users/IMON193066'
        },
        {
            id: 4,
            src: 'codechef.svg',
            ref:'https://www.codechef.com/users/imon193066'
        },
        {
            id: 5,
            src: 'leetcode.svg',
            ref:'https://leetcode.com/IMON193066/'
        },
        {
            id: 6,
            src: 'facebook.svg',
            ref:'https://www.facebook.com/profile.php?id=100006663464883'
        },
        {
            id: 7,
            src: 'instagram.svg',
            ref:'https://www.instagram.com/naimur_rashed/'
        },
    ]
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            {/* <hr></hr> */}
            <div
                className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
            >
                <div className="pb-4"> 
                    <p className="text-4xl font-bold inline border-b-4  border-gray-500">About Me</p>
                </div>
           
                <p className="text-xl mt-10">
                  I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time. Currently, I am looking for new career opportunities my current job position cannot provide.
                </p>

                <br />
            <div className='pb-2 '>
                    <p
                        className='text-2xl font-semibold border-b-4 inline border-gray-500'>
                       Find Me on  
                    </p>
                    <div className='py-6'>
                        
                        <ul className="flex items-center  gap-8">
                            {
                                links.map((link) => {
                                    return (
                                    <li key={link.id}>
                                        <a href={link.ref}  target="_blank">
                                        <img src={link.src}className='h-[48px] w-[48px] hover:scale-105'/>
                                        </a>
                                        
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default About;