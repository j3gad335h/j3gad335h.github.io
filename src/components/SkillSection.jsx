import React from 'react'
import { motion } from "framer-motion";
import { textVariant, fadeIn, slideIn } from '../utils/motion';
import { styles } from "../styles";
import { skillbadges } from '../constants';

const SkillSection = () => {
    return (

        <>
            <motion.div
                variants={slideIn("left", "tween", 0.1, 2)} initial="hidden" whileInView={'show'}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have known so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Skills
                </h2>
            </motion.div>
            <motion.div variants={slideIn("right", "tween", 0.1, 2)} initial="hidden" whileInView={'show'} className='ml-4'>
                {skillbadges.map((badgeGroup) => (
                    <div
                        key={badgeGroup.name}>
                        <h2 className={`${styles.heroSubText} text-center py-5`}>{badgeGroup.name}</h2>
                        <div className='flex flex-row flex-wrap justify-center gap-10'>
                            {badgeGroup.list.map((badge) => (
                                <div className='h-10' key={badge.name}>
                                    <img
                                        src={badge.src}
                                        alt={badge.name}
                                        className='border green-pink-gradient p-[1px]  shadow-card'
                                        style={{ height: '100%' }} // Set the height to 100% to make images the same height
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>


        </>


    )
}

export default SkillSection
