import React from 'react';

const Skill = () => {
    const skills = [
        {
            id: 1,
            src:'FRONT-END',
            item: [
                {
                    id: 1,
                    link:"../html.svg"
                },
                {
                    id: 2,
                    link:"../css.svg"
                },
                {
                    id: 3,
                    link:"../tailwind.svg"
                },
                {
                    id: 4,
                    link:"../js.svg"
                },
                {
                    id: 5,
                    link:"../react.svg"
                },
            ]
        },{
            id: 2,
            src:'BACK-END',
            item: [
                {
                    id: 1,
                    link:"../nodejs.svg"
                },
                {
                    id: 2,
                    link:"../express.svg"
                },
            ]
        },
        {
            id: 3,
            src:'DATABASE',
            item: [
                {
                    id: 1,
                    link:"../oracle.svg"
                },
                {
                    id: 2,
                    link:"../mysql.svg"
                },
                
            ]
        },
        {
            id: 4,
            src:'SOURCE CONTROL',
            item: [
                {
                    id: 1,
                    link:"../git.svg"
                },
                {
                    id: 2,
                    link:"../github.svg"
                },
                
            ]
        }

    ]
    return (
        <div name="skill" className='bg-gradient-to-b from-gray-800 to-black  w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8 mt-14'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Skills</p>
                     
                </div>
                <div className='grid md:grid-cols-2 text-center gap-6 py-12'>

                    {
                        skills.map((e) => { return (
                            <div key={e.id} className='shadow-md hover:shadow-xl hover:shadow-gray-600 shadow-gray-600 rounded-lg  py-4 flex flex-col gap-5 '>
                                <div className='flex gap-5 items-center  justify-center border-b rounded-b-md border-b-gray-600 p-3 '>
                                {

                                    e.item.map((e) => {
                                        return (
                                            
                                            <img className='w-[48px] h-[48px] hover:scale-110 duration-200' key={e.id}
                                            src={e.link}
                                            />)
                                        })
                                    }
                                </div>
                                
                                <p className='text-lg font-semibold text-gray-400'>{e.src}</p>
                            </div>)
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Skill;