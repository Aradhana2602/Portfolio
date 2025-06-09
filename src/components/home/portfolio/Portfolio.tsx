import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ProjectDetails } from "./ProjectDetails";
import { gameProjects, webProjects } from "@/data"; // updated imports

export const Portfolio = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div ref={ref} className="relative">
      <article className="sticky top-0 left-0 pt-4 md:pt-10 flex flex-col gap-2 bg-black z-10">
        <h2 className="text-center text-orange-400 text-2xl md:text-5xl">
          Featured Works
        </h2>
        <motion.div style={{ scaleX }} className="h-2 bg-white" />
      </article>

      <section className="mt-10">
        <h3 className="text-center text-white text-xl md:text-3xl mb-4">🎮 Game Projects</h3>
        {gameProjects.map((item) => (
          <ProjectDetails key={`game-${item.id}`} {...item} />
        ))}
      </section>

      <section className="mt-10">
        <h3 className="text-center text-white text-xl md:text-3xl mb-4">💻 Website Projects</h3>
        {webProjects.map((item) => (
          <ProjectDetails key={`web-${item.id}`} {...item} />
        ))}
      </section>
    </div>
  );
};
