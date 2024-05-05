import { skills } from "@/constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
const Skills = () => {
    return (
        <div className="flex flex-col justify-center items-center relative z-10 mb-5" id="skills">
            <div className="relative flex justify-between items-center flex-col w-full max-w-1100px gap-2 md:flex-col">
                <motion.div variants={textVariant()}>
                    <h2 className={`head-section text-center`}>
                        Skills
                    </h2>
                </motion.div>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className=" text-secondary text-[17px]  leading-[30px]"
                >
                    Here are some of my skills on which I have been working on for the past 2 years.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 xl:gap-12 justify-center md:justify-start md:ml-12 mt-5 max-w-5xl">
                    {skills.map((skill, index) => (
                        <Tilt key={index}>
                            <motion.div
                                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: true, amount: 0.25 }}

                                className="w-full h-full bg-tertiary bg-opacity-70 border border-solid border-green border-opacity-25 shadow-xl rounded-lg"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="p-6 md:p-4 flex-grow">
                                        <div className="text-lg font-semibold mb-4 text-center md:text-xl md:mb-6 text-secondary">
                                            {skill.title}
                                        </div>
                                        <div className="flex flex-wrap gap-2 md:gap-4">
                                            {skill.skills.map((item, index_x) => (
                                                <div key={`skill-x-${index_x}`} className="text-sm font-normal text-primary-dark bg-white bg-opacity-25 rounded-lg py-2 px-4 flex items-center gap-2 md:text-xs md:py-1 md:px-3">
                                                    <img className="w-6 h-6" src={item.image} alt="" />
                                                    <span>{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Placeholder to ensure consistent height */}
                                    <div className="h-0"></div>
                                </div>
                            </motion.div>

                        </Tilt>
                    ))}
                </div>



            </div>
        </div>

    );
};
// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Skills, "skills");
