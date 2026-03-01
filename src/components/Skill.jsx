import { skills } from "../data/skills";
import AnimateOnScroll from './AnimateOnScroll';

/**
 * Skills section displaying technical skills grouped by category
 * @returns {JSX.Element} Skill component
 */
const Skill = () => {
  return (
    <section
      name="skill"
      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 w-full text-slate-800 dark:text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-14">
          <p className="text-4xl font-bold inline border-b-4 border-indigo-500">
            Skills
          </p>
        </div>
        <div className="grid md:grid-cols-2 text-center gap-6 py-12">
          {skills.map((category, index) => (
            <AnimateOnScroll key={category.id} delay={index * 100}>
              <div className="shadow-md hover:shadow-lg hover:shadow-indigo-500/10 rounded-xl py-4 flex flex-col gap-8 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-5 items-center justify-center border-b rounded-b-md border-b-gray-200 dark:border-b-gray-600 py-6">
                  {category.item.map((skill) => (
                    <img
                      className="w-[48px] h-[48px] hover:scale-110 duration-200"
                      key={skill.id}
                      src={skill.link}
                      alt={skill.name}
                    />
                  ))}
                </div>
                <p className="text-lg font-semibold text-slate-500 dark:text-gray-400">
                  {category.src}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
