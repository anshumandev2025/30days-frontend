import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { food } from "../constants";
const Day2 = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="flex w-full items-center  justify-center">
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          height: 8,
          backgroundColor: "#f63d15",
          originX: 0,
        }}
      />
      <div className="mx-auto my-24  max-w-xl w-full pb-24">
        {food.map(([emoji, hueA, hueB], i) => (
          <Card key={i} emoji={emoji} hueA={hueA} hueB={hueB} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Day2;

const Card = ({ emoji, hueA, hueB, i }) => {
  const background = `linear-gradient(306deg,${hue(hueA)} 0%,${hue(hueB)})`;
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
      },
    },
  };
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.5 }}
        className={`relative overflow-hidden pt-[20px] -mb-[120px] flex card-container-${i} items-center justify-center my-20`}
      >
        <div
          style={{
            background,
            clipPath: "polygon(0 14%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          className="absolute top-0 my-20 rounded-lg left-0 right-0 bottom-0 w-[500px] h-[700px]"
        />
        <motion.div
          variants={cardVariants}
          className="text-[164px] flex items-center justify-center  w-[300px] bg-gray-200 rounded-lg h-[430px]"
        >
          {emoji}
        </motion.div>
      </motion.div>
    </>
  );
};

const hue = (h) => `hsl(${h},100%,50%)`;
