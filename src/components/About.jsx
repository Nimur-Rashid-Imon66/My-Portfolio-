import { socialLinks } from '../data/socialLinks';

/**
 * About section component displaying personal information and social links
 * @returns {JSX.Element} About component
 */
const About = () => {
    return (
        <section
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-slate-800 dark:text-white"
        >
            <div
                className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
            >
                <div className="pb-4"> 
                    <p className="text-4xl font-bold inline border-b-4 border-indigo-500">About Me</p>
                </div>
           
                <p className="text-lg mt-10 text-slate-500 dark:text-gray-400">
                I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time. Currently, I am looking for new career opportunities that my current job position cannot provide.
                </p>

                <br />
            <div className='pb-2'>
                    <p
                        className='text-2xl font-semibold border-b-4 inline border-indigo-500'>
                       Find Me on  
                    </p>
                    <div className='py-6 mx-auto'>
                        <ul className="flex gap-2 flex-shrink-0">
                            {socialLinks.map((link) => (
                                <li key={link.id}>
                                    <a href={link.ref} target="_blank" rel="noreferrer">
                                        <img src={link.src} className='rounded-md h-[48px] w-[48px] hover:scale-105 inline' alt={link.alt}/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>
            </div>
        </section>
    );
};

export default About;