import React from "react";
import about from "../assets/about.jpeg";
import { FaGraduationCap, FaBriefcase, FaAward } from "react-icons/fa";
import Footer from "./Footer";
const About = () => {
  const skills = [
    "Digital Art",
    "Illustration",
    "UI/UX Design",
    "Motion Graphics",
    "Procreate",
    "Adobe Creative Suite",
    "Figma",
    "Blender",
    "3D Modeling",
    "Character Design",
  ];

  const milestones = [
    {
      year:'2019',
      title:'BFA in Digital Arts',
      description:'Graduated from Rhode Island School of Design with honors',
      icon: <FaGraduationCap/>,
    },
    {
      year:'2021',
      title:'Freelance Journey Begins',
      description:'Started working with international clients on creative projects',
      icon:<FaBriefcase/>
    },
    {
      year:'2023',
      title:'Award Recognition',
      description:'Featured in Digital Arts Magazine for innovative design work',
      icon:<FaAward/>
    }
  ]

  return (
    <>
    <section id="about" className="min-h-screen px-36 py-12 mt-16">
      {/* About Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="h-[572px] rounded-2xl overflow-hidden">
          <img
            src={about}
            alt="About me"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-2">
          <h1 className="text-6xl font-semibold leading-tight tracking-wide text-gray-900">
            Creating art
            <br />
            that
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              moves people
            </span>
          </h1>

          <div className="mt-6 text-gray-500 tracking-wide">
            <p className="text-lg leading-8">
              I'm a digital artist and designer based in Portland, passionate
              about creating visual stories that connect with audiences. With
              over 5 years of experience, I specialize in bringing imaginative
              concepts to life through bold colors, dynamic compositions, and
              innovative techniques.
            </p>

            <p className="mt-4 text-lg leading-8">
              My work spans across digital illustration, UI/UX design, and
              motion graphics. I believe that great art has the power to
              inspire, challenge perspectives, and create meaningful connections
              between creators and their audiences.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-6xl mx-auto mt-20">
        {/* Heading */}
        <div className="flex items-center justify-center">
          <p className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 tracking-wider">
            Skills & expertise
          </p>
        </div>

        {/* Skill Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {skills.map((item) => (
            <button
              key={item}
              className="
                px-5 py-2
                rounded-xl
                bg-gray-100
                text-gray-800
                tracking-wide
                hover:bg-blue-500
                hover:text-gray-100
                transition
              "
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* ÷Milestones */}
      <div className="max-6xl mx-auto py-12 mt-12">
          {/* Heading */}
          <div className="flex items-center justify-center">
            <p className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 tracking-wider">Key milestones</p>
          </div>

          <div className="space-y-10">
          {milestones.map((item)=>(
            <div key={item.year} className="grid grid-cols-[60px_1fr] gap-5 items-start mt-10">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center text-xl mt-5">
                  {item.icon}
              </div>
               <div className="border-b border-gray-200">
          <p className="pt-1 text-sm font-semibold text-blue-500 ">
            {item.year}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-2 text-gray-500 mb-4">
            {item.description}
          </p>
        </div>
              
            </div>
          ))}
          </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;
