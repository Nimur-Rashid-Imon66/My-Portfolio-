import { CONTACT_FORM_ENDPOINT } from '../constants';

/**
 * Contact form section
 * @returns {JSX.Element} Contact component
 */
const Contact = () => {

    return (
        <div name="contact" className='bg-gradient-to-b to-gray-800 from-black w-full text-white md:h-screen '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-500'>Contact Me</p>
                    <p className='py-6'>Write here what you want to know</p>
                </div>

                <div className="flex justify-center items-center ">
                    <form action={CONTACT_FORM_ENDPOINT} method="POST" className="flex flex-col w-full md:w-1/2 text-gray-500 " >
                        <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required/>
                        <input type="email" name="email" placeholder="Enter Your Email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required/>
                        <textarea  placeholder="What is in your mind" name="msg" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required></textarea> 
                        <button className="text-white bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] px-6 py-3 my-8 mx-auto flex items-center rounded-xl font-semibold hover:scale-105 duration-200 hover:text-black">Submit</button>
                        
                    </form>
                </div>
                
             </div>
            
        </div>
    );
};

export default Contact; 
