import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  return (
    <motion.div
      className="fade-in"
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1 },
        hidden: {
          opacity: 0,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
