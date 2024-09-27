import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaCodeBranch,
} from "react-icons/fa"; // Import necessary icons

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 to-black text-gray-400 p-6 pt-20 sm:p-10 md:p-20">
      {/* Container */}
      <div className="max-w-5xl text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Next Carousel
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl italic text-gray-500 mb-6">
          A Modern Carousel Built with Passion and Precision
        </p>

        {/* Project Overview */}
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8">
          A sleek and innovative{" "}
          <span className="font-semibold text-gray-300">carousel</span> built
          with <span className="text-gray-300">Next.js</span> and styled using{" "}
          <span className="text-gray-300">Tailwind CSS</span>! This isn’t just
          another carousel; it implements React’s core features and offers{" "}
          <span className="text-gray-300">infinite seamless scrolling</span>,
          providing an exceptional user experience with smooth transitions and a
          professional look and feel.
        </p>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-10 my-10">
          {/* GitHub Link */}
          <a
            href="https://github.com/treezycoder/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg text-blue-400 hover:text-blue-500 transition"
          >
            <FaGithub className="text-2xl" />
            <span>
              GitHub: <span className="font-semibold">treezycoder</span>
            </span>
          </a>

          {/* Live Demo Link */}
          <Link
            href="/projects"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg text-blue-400 hover:text-blue-500 transition"
          >
            <FaExternalLinkAlt className="text-2xl" />
            <span>Live Demo</span>
          </Link>
        </div>

        {/* Tech Stack Section */}
        <div className="my-8 text-gray-300">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Tech Stack Used:
          </h2>
          <div className="flex flex-wrap justify-center items-center space-x-6 sm:space-x-10">
            {/* Next.js */}
            <div className="flex flex-col items-center">
              <FaReact className="text-5xl text-blue-400 mb-2" />
              <span>Next.js</span>
            </div>

            {/* Tailwind CSS */}
            <div className="flex flex-col items-center">
              <FaCodeBranch className="text-5xl text-green-400 mb-2" />
              <span>Tailwind CSS</span>
            </div>

            {/* React */}
            <div className="flex flex-col items-center">
              <FaReact className="text-5xl text-blue-400 mb-2" />
              <span>React.js</span>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 text-gray-500">
          Feel free to explore, modify, and incorporate this project into your
          own applications. This milestone marks the beginning of many more
          contributions to the development community! 🎉
        </p>

        {/* Footer Tags */}
        <div className="flex flex-wrap justify-center items-center space-x-4">
          <span className="px-4 py-2 bg-gray-800 text-sm sm:text-base md:text-lg rounded-full text-gray-200">
            #Nextjs
          </span>
          <span className="px-4 py-2 bg-gray-800 text-sm sm:text-base md:text-lg rounded-full text-gray-200">
            #React
          </span>
          <span className="px-4 py-2 bg-gray-800 text-sm sm:text-base md:text-lg rounded-full text-gray-200">
            #WebDevelopment
          </span>
          <span className="px-4 py-2 bg-gray-800 text-sm sm:text-base md:text-lg rounded-full text-gray-200">
            #OpenSource
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
