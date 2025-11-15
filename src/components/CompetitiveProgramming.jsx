import { competitivePlatforms } from '../data/competitiveProgramming';

/**
 * Competitive Programming section showing platform statistics
 * @returns {JSX.Element} CompetitiveProgramming component
 */
const CompetitiveProgramming = () => {
    return (
        <div name="CP" className='bg-gradient-to-b  from-black  to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Competitive Programming</p>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 pt-8 sm:px-0 w-[95%]  mx-auto'>
                    
                    {
                      competitivePlatforms.map((platform) => {
                            return (
                                <div key={platform.id} className='shadow-md shadow-gray-600 rounded-lg py-4 px-2 w-'>
                                <div className='flex items-center'>
                                    <img src={platform.src} alt={platform.platform} title={platform.platform} className='pl-3 pr-3 pt-2 rounded-md duration-200  w-[46px] h-[46px] hover:scale-105' />
                                        <a href={platform.ref}
                                            rel="noreferrer"
                                        target={"_blank"}
                                        className='pt-3 text-[20px] hover:scale-105 font-semibold'>{platform.handle}</a>
                                    <img src='../link.svg' alt="External link" className='w-5 h-5 pt-2'/>
                                
                                </div>
                                <div className='pl-3 flex flex-col gap-1 font-medium '>
                                    <p>Max Rating : {platform.rating}</p>
                                    <p>Problems Soled : {platform.solvecout}</p>
                                    <p>Contest Participants : {platform.contest}</p>
                                </div>
                                        
                            </div>) 
                        })

                    }
                </div>
                
             </div>
            
        </div>
    );
};

export default CompetitiveProgramming;




