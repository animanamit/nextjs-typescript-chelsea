import type { NextPage, GetStaticProps } from "next";
import { useEffect } from "react";
import Logo from "../components/chelsea-logo-svg.component";
import FixtureCard from "../components/fixture-card.component";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedHeader from "../components/animated-header.component";

const animatedTask = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
  remove: { opacity: 0 },
};

const listItem = {
  hidden: { opacity: 0, x: "-50vw" },
  show: { opacity: 1, x: 0 },
};

const header = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Fixtures: NextPage = ({ response }: any) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <div className="bg-blue-50 ml-auto mr-auto mb-8 mt-8 w-auto h-screen">
      <div className="p-6 text-center">
        <AnimatedHeader text={"upcoming fixtures"} />
      </div>
      <div className="m-auto">
        <AnimatePresence>
          <motion.div variants={animatedTask} initial="hidden" animate="show">
            {response &&
              response.map((item: any, index: number) => (
                <motion.div key={index} variants={listItem}>
                  <FixtureCard fixture={item} />
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  console.log("running get static fixtures");
  const res = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?team=49&next=20",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "fb74f474d9msh1f5afea74c166d2p1bc742jsn0bc9e7e2cef7",
      },
    }
  );
  const { response } = await res.json();

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: { response },
  };
};

export default Fixtures;
