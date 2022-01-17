import { motion } from "framer-motion";

const animatedLetter = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const animatedHeader = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delay: 10,
      staggerChildren: 0.08,
    },
  },
};

interface IAnimatedHeaderProps {
  text: string;
}

const AnimatedHeader = ({ text }: IAnimatedHeaderProps) => {
  return (
    <motion.h1 variants={animatedHeader} initial="hidden" animate="show">
      {text.split("").map((char: string, index: number) => (
        <motion.span
          className="text-8xl font-[800] leading-4 tracking-[-0.06rem]"
          key={index}
          variants={animatedLetter}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedHeader;
