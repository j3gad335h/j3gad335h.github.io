import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { portfolio } from "@/constants";

import PropTypes from "prop-types";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="head-section">About Me</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-secondary text-[17px]  leading-[30px]"
      >
        {portfolio.overview}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
