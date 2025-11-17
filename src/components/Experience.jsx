import { experiences } from '../data/experiences';

/**
 * Experience section displaying professional work history in timeline format
 * @returns {JSX.Element} Experience component
 */
const Experience = () => {
    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-fit text-white py-20">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                <div className='pb-12 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-500'>Experience</p>
                    <p className='py-6 text-gray-400'>My professional journey and roles</p>
                </div>
                
                {/* Timeline Layout */}
                <div className='relative px-4 md:px-12'>
                    {/* Vertical line for timeline */}
                    <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-gray-600'></div>
                    
                    {experiences.map(({ id, title, company, duration, description }, index) => (
                        <div key={id} className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                            {/* Timeline content */}
                            <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                {/* Card */}
                                <div className={`w-full md:w-5/12 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                    {/* Duration badge */}
                                    <div className='inline-block bg-orange-500 text-black text-xs font-semibold px-3 py-1 rounded-full mb-3'>
                                        {duration}
                                    </div>
                                    
                                    <h3 className='text-xl md:text-2xl font-bold text-white mb-2'>{title}</h3>
                                    <p className='text-orange-400 font-semibold mb-3 flex items-center'>
                                        <span className='mr-2'>📍</span>
                                        {company}
                                    </p>
                                    <p className='text-gray-300 leading-relaxed'>{description}</p>
                                </div>
                                
                                {/* Timeline dot */}
                                <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-gray-900 shadow-lg shadow-orange-500/50'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    );
};

export default Experience;
