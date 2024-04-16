import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";
import { LinkedIn, GitHub, Email, Instagram } from "@mui/icons-material";
import { portfolio } from "@/constants";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto padding-x flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-green" />
          <div className="w-1 sm:h-80 h-40 green-pink-gradient" />
        </div>
        <div>
          <motion.h1
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={`hero-head-text text-white`}
          >
            {" "}
            Hi, I&apos;m
            <span className="text-[#915EFF] pl-2">
              {portfolio.name}
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className={`hero-sub-text mt-2 text-white-100`}
          >
            {portfolio.heroContent}
          </motion.p>
          <div className="flex text-[20px] mt-2 gap-x-6 max-w-max mx-auto lg:mx-0">
            <span className="flex flex-row items-center justify-center text-gradient btn-link">
              Contact Me
            </span>
            <a
              href="https://www.linkedin.com/in/jegadeeshn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center rounded-full p-2 transition-colors duration-150 hover:bg-[#915eff]"
            >
              <LinkedIn />
            </a>
            <a
              href="https://github.com/j3gad335h"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center rounded-full p-2 transition-colors duration-150 hover:bg-[#915eff]"
            >
              <GitHub />
            </a>
            <a
              href="https://www.instagram.com/jegadeesh_34/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center rounded-full p-2 transition-colors duration-150 hover:bg-[#915eff]"
            >
              <Instagram />
            </a>
            <a
              href="mailto:ntjegadeesh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center rounded-full p-2 transition-colors duration-150 hover:bg-[#915eff]"
            >
              <Email />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-solid border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
