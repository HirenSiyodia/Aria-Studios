import React from "react";
import image1 from "../assets/image3.jpg";
import image2 from "../assets/image2.jpg";
import { Link } from "react-router-dom";

const Featured = () => {
  const works = [
    {
      image: image1,
      title: "Digital Art",
      category: "Neon Dreams",
    },
    {
      image: image2,
      title: "Illustration",
      category: "Abstract Flow",
    },
  ];

  return (
    <section className="min-h-screen px-8 md:px-20 lg:px-36 py-20">
      <div className="max-w-8xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 tracking-wider font-semibold">
            Featured works
          </h2>

          <p className="text-lg text-gray-500 tracking-wide leading-relaxed">
            A glimpse into my latest creative projects and
            artistic explorations
          </p>
        </div>

        {/* Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[350px] object-cover
                transition-all duration-500
                group-hover:scale-105
                group-hover:opacity-600"
              />

              {/* Hover Overlay */}
              <div
                className="absolute bottom-[10px] left-[10px]
  opacity-0 translate-x-[-20px]
  group-hover:opacity-100 group-hover:translate-x-0
  transition-all duration-500 ease-out"
              >
                <h6 className="inline-block p-1 text-sm text-gray-200 bg-blue-600 rounded-xl text-center">
                  {work.title}
                </h6>

                <p className="mt-2 text-3xl font-medium text-gray-200 tracking-wide">
                  {work.category}
                </p>
              </div>
            </div>
          ))}
        </div>
          
      </div>
      <div className="mt-10 flex justify-center gap-5">
      <Link
            to="/portfolio"
            className="px-6 py-2 bg-white text-gray-700 tracking-wider border rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            View Full Portfolio  →
          </Link>
          </div>
    </section>
  );
};

export default Featured;