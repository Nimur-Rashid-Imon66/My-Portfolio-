const CompetitiveProgramming = () => {
    const oj = [
        {
            id: 1,
            src: '../codeforces.svg',
            handle: 'IMON193066',
            rating: "1261",
            solvecout:'824+',
            contest:'160+',
            ref: 'https://codeforces.com/profile/IMON193066',
            // demo:'https://nimur-rashid-imon66.github.io/IIUCWDS-A7-Forntend/'
        },
        {
            id: 2,
            src: '../leetcode.svg',
            handle: 'IMON193066',
            rating: "0",
            solvecout:'100+',
            contest:'0',
            ref:'https://leetcode.com/IMON193066/',
            // demo: 'https://nimur-rashid-imon66.github.io/IIUCWDS-A9-Forntend/'
        },
        {
            id: 3,
            src:'../codechef.svg',
            handle: 'imon193066',
            rating: "1612",
            solvecout:'45+',
            contest:'12+',
            ref:'https://www.codechef.com/users/imon193066',
            // demo: 'https://nimur-rashid-imon66.github.io/IIUCWDS-A8-Forntend./'
        },
        
        {
            id: 4,
            src: '../atcoder.svg',
            handle: 'IMON193066',
            rating: "227",
            solvecout:'60+',
            contest:'35+',
            ref:'https://atcoder.jp/users/IMON193066',
            // demo: ' https://nimur-rashid-imon66.github.io/Nimur-Rashid-Imon66-IIUCWPS-A14-React-QuizApp/'
        }
    ]
    return (
        <div name="CP" className='bg-gradient-to-b  from-black  to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Competitive Programming</p>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 pt-8 sm:px-0 w-[95%]  mx-auto'>
                    
                    {
                      oj.map((oj) => {
                            //project.id,project.desc,project.src,project.ref,project.demo
                            return (
                                <div key={oj.id} className='shadow-md shadow-gray-600 rounded-lg py-4 px-2 w-'>
                                <div className='flex items-center'>
                                    <img src={oj.src} alt="dsaf" title='CF' className='pl-3 pr-3 pt-2 rounded-md duration-200  w-[46px] h-[46px] hover:scale-105' />
                                        <a href={oj.ref}
                                            rel="noreferrer"
                                        target={"_blank"}
                                        className='pt-3 text-[20px] hover:scale-105 font-semibold'>{oj.handle}</a>
                                    <img src='../link.svg' className='w-5 h-5 pt-2'/>
                                
                                </div>
                                <div className='pl-3 flex flex-col gap-1 font-medium '>
                                    <p>Max Rating : {oj.rating}</p>
                                    <p>Problems Soled : {oj.solvecout}</p>
                                    <p>Contest Participants : {oj.contest}</p>
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




