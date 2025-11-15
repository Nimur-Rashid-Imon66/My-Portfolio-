import { skills } from '../data/skills';

/**
 * Skills section displaying technical skills grouped by category
 * @returns {JSX.Element} Skill component
 */
const Skill = () => {
    return (
        <div name="skill" className='bg-gradient-to-b  from-black to-gray-800  w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8 mt-14'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Skills</p>
                     
                </div>
                <div className='grid md:grid-cols-2 text-center gap-6 py-12'>

                    {
                        skills.map((category) => { return (
                            <div key={category.id} className='shadow-md hover:shadow-xl hover:shadow-gray-600 shadow-gray-600 rounded-xl  py-4 flex flex-col gap-5 bg-gray-900 '>
                                <div className='flex gap-5 items-center  justify-center border-b rounded-b-md border-b-gray-600 py-6 '>
                                {

                                    category.item.map((skill) => {
                                        return (
                                            
                                            <img className='w-[48px] h-[48px] hover:scale-110 duration-200' key={skill.id}
                                            src={skill.link}
                                            alt={skill.name}
                                            />)
                                        })
                                    }
                                </div>
                                
                                <p className='text-lg font-semibold text-gray-400'>{category.src}</p>
                            </div>)
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Skill;