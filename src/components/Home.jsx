import { useTypewriter,Cursor} from 'react-simple-typewriter';

function Home() {
    const [text] = useTypewriter({
        words: ['Competitive Programmer.', 'Software Engineer.'] ,
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    }); 
    return (
        <div name="home" className="w-full bg-gradient-to-b from-black  to-gray-800 md:h-screen">
            <div className="flex flex-col items-center justify-center py-[15%] md:flex-row ">

                <div className="pt-10">
                    <h1 className="flex flex-col md:flex-row text-white  text-4xl px-2  md:px-12 font-semibold">{`I'm a `}
                    <span className="text-4xl text-orange-500 md:ml-2">
                            {
                                text
                            }
                            <Cursor />
                        </span>
                    </h1>
                    
                    <p className='text-gray-400 py-6 px-2 md:px-12 max-w-2xl ' >I’m a software engineer and competitive programmer who loves solving problems and building smooth, high-performing web applications. At <b>AppifyLab</b>, I work on improving performance, adding new features, and fixing bugs. Before that, I sharpened my skills in JavaScript, React, and Adonis by working on real projects. I also spent a year mentoring students in competitive programming at <b>IIUC</b> helping them tackle tricky coding challenges. I enjoy turning ideas into clean, efficient solutions—check out my portfolio to see what I’ve built!</p>
                </div>
                <div >
                <img src='../propic.jpg' className='rounded-xl h-[310px] w-[250px] object-left' />
                    <hr className='hidden md:block md:border-4 mt-4 rounded-xl '/>
                </div>
          </div>
        </div>
    );
}

export default Home;