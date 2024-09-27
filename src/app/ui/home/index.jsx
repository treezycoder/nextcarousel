"use client";

import Link from "next/link";
import { BiChevronsRight } from "react-icons/bi";
import styles from "./styles.module.css";
export default function Home() {
  return (
    <section
      id="home"
      className={`animate text-white py-20 h-screen flex justify-center items-center`}
    >
      <div className=" container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to my portfolio</h1>
        <p className="text-lg mb-8">I’m a Frontend React Developer.</p>
        <Link
          href="/projects"
          className="bg-white px-4 py-2 text-blue-500 rounded-full hover:bg-gray-200 transition inline-flex items-center justify-center"
        >
          View Project
          <span className="">
            <BiChevronsRight className={`${styles.bounce} size-6`} />
          </span>
        </Link>
      </div>
    </section>
  );
}
