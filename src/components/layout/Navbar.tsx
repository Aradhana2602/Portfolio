import { motion } from "framer-motion";
import { Sidebar } from "../layout/sidebar";
import { GithubIcon, LinkedinIcon } from "@/assets";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="h-24">
      <Sidebar />
      <article className="max-w-7xl ml-16 flex items-center justify-between h-full p-4">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="none md:inline font-bold text-white uppercase"
        >
          Aradhana Developer
        </motion.span>
        <div className="flex gap-4">
          <Link href="https://github.com/Aradhana2602" target="_blank" aria-label="GitHub">
            <GithubIcon className="w-6 h-6 text-white" />
          </Link>
          <Link href="https://www.linkedin.com/in/aradhana-kumari-863860289/" target="_blank" aria-label="LinkedIn">
            <LinkedinIcon className="w-6 h-6 text-white" />
          </Link>
          <Link href="https://example.com/your_resume.pdf" target="_blank" className="text-white font-medium hover:underline" aria-label="Resume">
            Resume
          </Link>
        </div>
      </article>
    </nav>
  );
};
