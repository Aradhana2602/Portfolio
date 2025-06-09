import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface ProjectDetailsProps {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  site?: string;
  play?: string;
}

export const ProjectDetails = ({
  title,
  image,
  description,
  link,
  site,
  play,
}: ProjectDetailsProps) => {
  const ref = useRef(null);

  return (
    <div className="w-full h-screen snap-center flex items-center justify-center overflow-hidden">
      <article className="max-w-7xl flex flex-col md:flex-row items-center justify-center gap-4 h-full p-4 mt-12 md:mt-0">
        <figure ref={ref} className="md:flex-1 max-h-72 w-full">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full max-h-72 object-cover rounded-md border border-white"
          />
        </figure>
        <motion.div className="md:flex-1 flex flex-col items-center md:items-start gap-4 p-2 text-center md:text-start">
          <h3 className="text-4xl lg:text-6xl text-white font-semibold">
            {title}
          </h3>
          <p className="text-gray-400 text-base lg:text-lg">{description}</p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <Link href={link} target="_blank">
              <button
                type="button"
                className="bg-orange-400 border-0 rounded-lg p-2 w-36 cursor-pointer text-black hover:bg-orange-500 text-base"
              >
                See Code
              </button>
            </Link>

            {site && (
              <Link href={site} target="_blank">
                <button
                  type="button"
                  className="bg-transparent border border-orange-400 rounded-lg p-2 w-36 cursor-pointer text-orange-400 hover:bg-orange-500 hover:text-black text-base"
                >
                  Visit Site
                </button>
              </Link>
            )}

            {play && (
              <Link href={play} target="_blank">
                <button
                  type="button"
                  className="bg-transparent border border-green-400 rounded-lg p-2 w-36 cursor-pointer text-green-400 hover:bg-green-500 hover:text-black text-base"
                >
                  Play
                </button>
              </Link>
            )}
          </div>
        </motion.div>
      </article>
    </div>
  );
};
