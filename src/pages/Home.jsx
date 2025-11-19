import React, { useState } from "react";
import ShuffleGrid from "../components/ShuffleGrid";
import AnimateIn from "../components/AnimateIn";
import back1 from "../assets/back1.jpg";
import react from "../assets/react.png";
import flutter from "../assets/flutter.png";
import laravel from "../assets/laravel.png";
import js from "../assets/js.png";
import inertia from "../assets/inertia.png";
import html5 from "../assets/html5.png";
import css3 from "../assets/css-3.png";
import mysql from "../assets/mysql.png";
import sql from "../assets/sql.png";
import { html } from "motion/react-client";
import { proyek } from "../data/proyek";
import logo from "../assets/logo.png";

const Home = () => {
  const [kategori, setKategori] = useState("ProjectOne");

  const skills = [
    { name: "React", src: react },
    { name: "Laravel", src: laravel },
    { name: "Flutter", src: flutter },
    { name: "JavaScript", src: js },
    { name: "HTML5", src: html5 },
    { name: "CSS3", src: css3 },
    { name: "MySQL", src: mysql },
    { name: "SQL", src: sql },
    { name: "Inertia", src: inertia },
  ];

  return (
    <div>
      <section className="w-full  py-5 relative  items-center gap-8     ">
        <div className="grid  grid-cols-1 md:grid-cols-2 sticky -top-30 z-0 px-[8%] mb-15   ">
          <div className="flex flex-col gap-5 py-10 shadow-theme p-5 rounded-2xl">
            <div>
              <p className=" mb-2  text-[15px]  ">
                Hello, my name is Andhika Gilang Rahadian
              </p>
              <h2 className="font-bold font-[Stack_Sans_Text] ">
                Building Innovative Solutions
              </h2>
              <p className="cursor-default font-semibold">
                Fullstack developer dan mobile developer
              </p>
            </div>
          </div>
          <ShuffleGrid />
        </div>
        <div className=" z-10  overflow-hidden  flex flex-col gap-10 items-center justify-center bg-theme sticky -top-100">
          <AnimateIn direction="up" duration={2}>
            <img src={back1} alt="" className="h-[600px] min-w-screen " />
          </AnimateIn>
          <div className="absolute inset-0 bg-gradient-theme"></div>
          <div className="absolute top-0 flex flex-col gap-5  items-center justify-center py-30">
            <div className="flex flex-col gap-5 items-center justify-center mb-5">
              <img src={logo} alt="" className="w-12" />
              <h5 className="text-white">I'am currently worked on</h5>
            </div>

            <div className="grid grid-cols-3 md:flex gap-5 items-center">
              {skills.map((skill, index) => (
                <AnimateIn
                  key={index}
                  direction="up"
                  duration={2}
                  delay={index * 0.3}
                >
                  <img src={skill.src} alt={skill.name} className="w-24" />
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
        <div className=" z-20 relative py-20  overflow-hidden min-h-screen flex flex-col gap-10 items-center justify-center bg-theme  px-[8%] ">
          <div className="flex gap-5 items-center justify-center mb-5">
            <img src={logo} alt="" className="w-12" />
          </div>
          <AnimateIn direction="up" duration={2}>
            <h5>Some of my projects</h5>
          </AnimateIn>
          {/* Tombol kategori */}
          <div className="grid grid-cols-1 md:flex gap-3 mb-5">
            <button
              className={`px-4 py-2  rounded-2xl cursor-pointer transition-all ease-in-out duration-300 ${
                kategori === "ProjectOne"
                  ? "bg-violet-600 text-white border-2 border-violet-600"
                  : "border-2 border-indigo-100"
              }`}
              onClick={() => setKategori("ProjectOne")}
            >
              Multi-level School Web
            </button>
            <button
              className={`px-4 py-2 rounded-2xl cursor-pointer transition-all ease-in-out duration-300 ${
                kategori === "ProjectTwo"
                  ? "bg-violet-600 text-white border-2 border-violet-600"
                  : "border-2 border-indigo-100"
              }`}
              onClick={() => setKategori("ProjectTwo")}
            >
              Single School Web
            </button>
            <button
              className={`px-4 py-2 rounded-2xl cursor-pointer transition-all ease-in-out duration-300 ${
                kategori === "ProjectThree"
                  ? "bg-violet-600 text-white border-2 border-violet-600"
                  : "border-2 border-indigo-100"
              }`}
              onClick={() => setKategori("ProjectThree")}
            >
              Mobile App Kasir
            </button>
            <button
              className={`px-4 py-2 rounded-2xl cursor-pointer transition-all ease-in-out duration-300 ${
                kategori === "ProjectFour"
                  ? "bg-violet-600 text-white border-2 border-violet-600"
                  : "border-2 border-indigo-100"
              }`}
              onClick={() => setKategori("ProjectFour")}
            >
              Umroh Web
            </button>
            <button
              className={`px-4 py-2 rounded-2xl cursor-pointer transition-all ease-in-out duration-300 ${
                kategori === "ProjectFive"
                  ? "bg-violet-600 text-white border-2 border-violet-600"
                  : "border-2 border-indigo-100"
              }`}
              onClick={() => setKategori("ProjectFive")}
            >
              Mobile App Cars Rentals
            </button>
          </div>

          {/* Grid proyek + Teknologi */}
          <div className="mt-4 self-start">
            <h6 className="font-semibold mb-2">Technologies used:</h6>
            <div className="flex flex-wrap gap-2">
              {proyek[0][kategori].tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-indigo-100 text-violet-800 rounded-full text-sm dark:bg-violet-800 dark:text-indigo-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {proyek[0][kategori].images.map((img, index) => (
                <AnimateIn
                  key={index}
                  direction="up"
                  duration={1}
                  delay={index * 0.1}
                >
                  <img
                    src={img}
                    alt={`project-${index}`}
                    className="w-full h-full"
                  />
                </AnimateIn>
              ))}
            </div>

            {/* Teknologi yang digunakan */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
