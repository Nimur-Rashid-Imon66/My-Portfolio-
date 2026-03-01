import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { TYPING_WORDS, TYPEWRITER_CONFIG } from '../constants';
import { socialLinks } from '../data/socialLinks';
import AnimateOnScroll from './AnimateOnScroll';

/**
 * Home/Hero section component with typewriter effect and comprehensive introduction
 * Merged Home and About sections for better user experience
 * @returns {JSX.Element} Home component
 */
function Home() {
    const [text] = useTypewriter({
        words: TYPING_WORDS,
        loop: {},
        typeSpeed: TYPEWRITER_CONFIG.typeSpeed,
        deleteSpeed: TYPEWRITER_CONFIG.deleteSpeed,
    }); 
    
    return (
        <section name="home" className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen pb-16">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center py-[15%] md:flex-row max-w-screen-lg mx-auto">
                <div className="pt-10 px-4">
                    <h1 className="flex flex-col md:flex-row text-slate-800 dark:text-white text-4xl px-2 md:px-12 font-semibold">
                        {`I'm a `}
                        <span className="text-4xl text-indigo-600 dark:text-indigo-400 md:ml-2">
                            {text}
                            <Cursor />
                        </span>
                    </h1>
                    
                    <p className='text-slate-600 dark:text-gray-400 py-6 px-2 md:px-12 max-w-2xl leading-relaxed'>
                        I&apos;m a <b className="text-indigo-600 dark:text-indigo-400">backend software engineer</b> specializing in building scalable, high-performance systems. 
                        With a strong foundation in <b className="text-indigo-600 dark:text-indigo-400">competitive programming</b>, I bring algorithmic thinking and 
                        problem-solving expertise to every project I work on.
                    </p>
                </div>
                <div className="px-4">
                    <img src='../propic.jpg' alt="Profile" className='rounded-xl h-[310px] w-[250px] object-cover shadow-2xl shadow-indigo-500/20' />
                    <hr className='hidden md:block border-2 border-indigo-500 mt-4 rounded-xl'/>
                </div>
            </div>

            {/* About Section */}
            <AnimateOnScroll>
                <div className="max-w-screen-lg mx-auto px-4 md:px-12 mt-16">
                    <div className="pb-8">
                        <h2 className="text-4xl font-bold inline border-b-4 border-indigo-500 text-slate-800 dark:text-white">About Me</h2>
                    </div>

                    {/* Backend Engineering Expertise */}
                    <div className="space-y-6 text-slate-600 dark:text-gray-300">
                        <div>
                            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">🚀 What I&apos;m Doing Now</h3>
                            <p className="text-lg leading-relaxed">
                                I&apos;m currently a <b className="text-slate-800 dark:text-white">Software Engineer at Zporter</b> (Sweden, Remote), working on a 
                                <b className="text-indigo-600 dark:text-indigo-400"> football coaching app and web platform</b> powered by an AI assistant named <b className="text-indigo-600 dark:text-indigo-400">Zai</b>. 
                                I contribute to both frontend and backend development using <b className="text-indigo-600 dark:text-indigo-400">Next.js</b>, <b className="text-indigo-600 dark:text-indigo-400">NestJS</b>, <b className="text-indigo-600 dark:text-indigo-400">MongoDB</b>, <b className="text-indigo-600 dark:text-indigo-400">Firebase</b>, <b className="text-indigo-600 dark:text-indigo-400">MUI</b>, and <b className="text-indigo-600 dark:text-indigo-400">Tailwind</b>.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">⚙️ Backend Engineering Background</h3>
                            <p className="text-lg leading-relaxed">
                                Previously at <b className="text-slate-800 dark:text-white">AppifyLab</b>, I grew from intern to mid-level engineer, architecting robust backend systems. 
                                My expertise spans <b className="text-indigo-600 dark:text-indigo-400">RESTful API design</b>, <b className="text-indigo-600 dark:text-indigo-400">database optimization</b>, 
                                and <b className="text-indigo-600 dark:text-indigo-400">system design</b>. Key accomplishments include:
                            </p>
                            <ul className="mt-4 space-y-2 ml-6">
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-2">▸</span>
                                    <span><b>Role-Based Access Control (RBAC)</b> with fine-grained permissions for enterprise security</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-2">▸</span>
                                    <span><b>Payment gateway integrations</b> (Stripe, Mercado Pago) with webhook orchestration</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-2">▸</span>
                                    <span><b>Real-time communication</b> using WebSockets and Redis Pub/Sub</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-2">▸</span>
                                    <span><b>Adaptive rate-limiting middleware</b> with Redis for API protection</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">⚡ The Competitive Programming Advantage</h3>
                            <p className="text-lg leading-relaxed">
                                My competitive programming background isn&apos;t just about solving puzzles—it&apos;s a <b className="text-slate-800 dark:text-white">superpower for backend development</b>. 
                                With <b className="text-indigo-600 dark:text-indigo-400">1000+ problems solved</b> across platforms and <b className="text-indigo-600 dark:text-indigo-400">160+ contests participated</b>, 
                                I&apos;ve developed:
                            </p>
                            <ul className="mt-4 space-y-2 ml-6">
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-2">▸</span>
                                    <span><b>Algorithmic thinking</b> that helps me design efficient data structures and optimize complex queries</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-2">▸</span>
                                    <span><b>Time & space complexity analysis</b> skills crucial for database schema design and API performance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-2">▸</span>
                                    <span><b>Pattern recognition</b> abilities that accelerate debugging and system architecture decisions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-500 mr-2">▸</span>
                                    <span><b>Edge case thinking</b> that ensures robust error handling and validation in production systems</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">💡 Real-World Impact</h3>
                            <p className="text-lg leading-relaxed">
                                This unique combination translates directly into measurable results: I&apos;ve <b className="text-slate-800 dark:text-white">reduced server costs</b> through 
                                query optimization, <b className="text-slate-800 dark:text-white">improved response times</b> with intelligent caching strategies, and 
                                <b className="text-slate-800 dark:text-white"> scaled APIs</b> to handle high-traffic loads. Now at Zporter, I apply the same engineering rigor to build 
                                <b className="text-indigo-600 dark:text-indigo-400"> AI-powered features</b> and scalable full-stack architecture for a global sports platform.
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className='mt-12 pb-8'>
                        <h3 className='text-2xl font-semibold border-b-4 inline border-indigo-500 text-slate-800 dark:text-white'>
                            Connect With Me
                        </h3>
                        <div className='py-6'>
                            <ul className="flex gap-3 flex-wrap">
                                {socialLinks.map((link) => (
                                    <li key={link.id}>
                                        <a 
                                            href={link.ref} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="block transform transition-transform hover:scale-110"
                                        >
                                            <img 
                                                src={link.src} 
                                                className='rounded-md h-[52px] w-[52px] hover:shadow-lg hover:shadow-indigo-500/30' 
                                                alt={link.alt}
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
}

export default Home;
