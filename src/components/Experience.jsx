const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Mid Level Software Engineer",
            company: "AppifyLab",
            duration: "Feb 2025 - Present",
            description:  "Improved web application performance, implemented new features, and resolved bugs while working in a team environment."
        },
        {
            id: 2,
            title: "Junior Software Engineer",
            company: "AppifyLab",
            duration: "May 2024 - Feb 2025",
            description: "Improved web application performance, implemented new features, and resolved bugs while working in a team environment."
        },
        {
            id: 3,
            title: "Software Engineer Intern",
            company: "AppifyLab",
            duration: "Feb 2024 - May 2024",
            description: "Completed a 3-month internship focusing on learning and implementing new technologies such as JS, React, and Adonis in real-world projects. Gained experience in software development techniques and teamwork."
        },
        {
            id: 4,
            title: "Competitive Programming Trainer",
            company: 'IIUC Competitive Programming Society',
            duration: "Jan 2023 - Dec 2023",
            description: "Conducted classes and mentored students on competitive programming topics."
        }
    ];

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-fit text-white md:h-screen">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                <div className='pb-8 mt-14'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Experience</p>
                    <p className='py-6'>Here are some of the roles I’ve worked in:</p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0 w-[90%] mx-auto'>
                    {experiences.map(({ id, title, company, duration, description }) => (
                        <div key={id} className='bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 '>
                            <h3 className='text-xl font-bold text-gray-200'>{title}</h3>
                            <p className='text-gray-400'>{company}</p>
                            <p className='text-gray-500 text-sm'>{duration}</p>
                            <p className='mt-4 text-gray-300'>{description}</p>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    );
};

export default Experience;
