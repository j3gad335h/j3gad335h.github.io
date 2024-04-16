import { motion } from "framer-motion";
import { useEffect } from "react";
import { staggerContainer } from "../utils/motion";

function scrollToHash(hash, behavior = "smooth") {
  if (!hash) return;

  const id = hash.replace("#", "");
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior });
  }
}
const StarWrapper = (Component, idName) =>
  function HOC() {
    useEffect(() => {
      scrollToHash(`#${idName}`);
    }, []);

    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="padding max-w-7xl mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
