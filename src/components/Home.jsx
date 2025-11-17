import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { TYPING_WORDS, TYPEWRITER_CONFIG } from '../constants';
import { socialLinks } from '../data/socialLinks';

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
        <div name="home" className="w-full bg-gradient-to-b from-black to-gray-800 min-h-screen pb-16">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center py-[15%] md:flex-row max-w-screen-lg mx-auto">
                <div className="pt-10 px-4">
                    <h1 className="flex flex-col md:flex-row text-white text-4xl px-2 md:px-12 font-semibold">
                        {`I&apos;m a `}
                        <span className="text-4xl text-orange-500 md:ml-2">
                            {text}
                            <Cursor />
                        </span>
                    </h1>
                    
                    <p className='text-gray-400 py-6 px-2 md:px-12 max-w-2xl leading-relaxed'>
                        I&apos;m a <b className="text-orange-400">backend software engineer</b> specializing in building scalable, high-performance systems. 
                        With a strong foundation in <b className="text-orange-400">competitive programming</b>, I bring algorithmic thinking and 
                        problem-solving expertise to every project I work on.
                    </p>
                </div>
                <div className="px-4">
                    <img src='../propic.jpg' alt="Profile" className='rounded-xl h-[310px] w-[250px] object-cover shadow-2xl shadow-orange-500/20' />
                    <hr className='hidden md:block border-2 border-orange-500 mt-4 rounded-xl'/>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-screen-lg mx-auto px-4 md:px-12 mt-16">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-orange-500 text-white">About Me</h2>
                </div>

                {/* Backend Engineering Expertise */}
                <div className="space-y-6 text-gray-300">
                    <div>
                        <h3 className="text-2xl font-semibold text-orange-400 mb-3">🚀 Backend Engineering Excellence</h3>
                        <p className="text-lg leading-relaxed">
                            At <b className="text-white">AppifyLab</b>, I&apos;ve architected and developed robust backend systems that power real-world applications. 
                            My expertise spans <b className="text-orange-400">RESTful API design</b>, <b className="text-orange-400">database optimization</b>, 
                            and <b className="text-orange-400">microservices architecture</b>. I&apos;ve implemented critical features including:
                        </p>
                        <ul className="mt-4 space-y-2 ml-6">
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">▸</span>
                                <span><b>Role-Based Access Control (RBAC)</b> systems with fine-grained permissions for enterprise security</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">▸</span>
                                <span><b>Payment gateway integrations</b> (Stripe, Mercado Pago) with webhook orchestration and secure transactions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">▸</span>
                                <span><b>Real-time communication</b> using WebSockets and Redis Pub/Sub for live messaging and community features</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">▸</span>
                                <span><b>Adaptive rate-limiting middleware</b> with Redis to protect APIs and optimize resource usage</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-orange-400 mb-3">⚡ The Competitive Programming Advantage</h3>
                        <p className="text-lg leading-relaxed">
                            My competitive programming background isn&apos;t just about solving puzzles—it&apos;s a <b className="text-white">superpower for backend development</b>. 
                            With <b className="text-orange-400">800+ problems solved</b> across platforms and <b className="text-orange-400">160+ contests participated</b>, 
                            I&apos;ve developed:
                        </p>
                        <ul className="mt-4 space-y-2 ml-6">
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">▸</span>
                                <span><b>Algorithmic thinking</b> that helps me design efficient data structures and optimize complex queries</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">▸</span>
                                <span><b>Time & space complexity analysis</b> skills crucial for database schema design and API performance</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">▸</span>
                                <span><b>Pattern recognition</b> abilities that accelerate debugging and system architecture decisions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-2">▸</span>
                                <span><b>Edge case thinking</b> that ensures robust error handling and validation in production systems</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-orange-400 mb-3">💡 Real-World Impact</h3>
                        <p className="text-lg leading-relaxed">
                            This unique combination translates directly into measurable results: I&apos;ve <b className="text-white">reduced server costs</b> through 
                            query optimization, <b className="text-white">improved response times</b> with intelligent caching strategies, and 
                            <b className="text-white"> scaled APIs</b> to handle high-traffic loads. My code reviews and mentorship help junior developers 
                            adopt the same problem-solving mindset, creating a culture of excellence in backend engineering.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            Whether it&apos;s architecting database schemas for complex data models, implementing secure authentication flows with 
                            <b className="text-orange-400"> Twilio OTP verification</b>, or defining API contracts for seamless frontend integration—I bring both 
                            theoretical depth and practical experience to every challenge.
                        </p>
                    </div>
                </div>

                {/* Social Links */}
                <div className='mt-12 pb-8'>
                    <h3 className='text-2xl font-semibold border-b-4 inline border-orange-500 text-white'>
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
                                            className='rounded-md h-[52px] w-[52px] hover:shadow-lg hover:shadow-orange-500/50' 
                                            alt={link.alt}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
