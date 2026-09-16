import React, { useState } from "react";
import Footer from "./Footer";

import image1 from "../assets/image3.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image1.avif";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: "Digital Art",
    title: "Grid Compilation",
    image: image1,
  },
  {
    id: 2,
    category: "Digital Art",
    title: "Abstract Waves",
    image: image2,
  },
  {
    id: 3,
    category: "Illustration",
    title: "Character Design",
    image: image3,
  },
  {
    id: 4,
    category: "Design",
    title: "Brand Identity",
    image: image4,
  },
  {
    id: 5,
    category: "Animation",
    title: "3D Render",
    image: image5,
  },
  {
    id: 6,
    category: "Illustration",
    title: "Creative Story",
    image: image6,
  },
];

const CATEGORIES = [
  "All",
  "Digital Art",
  "Illustration",
  "Design",
  "Animation",
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter(
          (item) => item.category === activeFilter
        );

  return (
    <>
      <section
        id="portfolio"
        className="min-h-screen bg-white px-8 md:px-16 lg:px-24 py-28"
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h2 className="text-5xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              My creative portfolio
            </h2>

            <p className="text-gray-500 tracking-wider leading-relaxed mt-4 max-w-2xl mx-auto">
              A collection of my favorite works across digital art,
              <br />
              illustration, and design
            </p>

          </div>

          {/* Filter Category */}
          <div className="flex flex-wrap justify-center gap-4 mt-10 mb-14">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`
                  px-4 py-2
                  rounded-lg
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    activeFilter === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[360px]
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:opacity-60
                  "
                />

                {/* Hover Content */}
                <div
                  className="
                    absolute
                    bottom-[10px]
                    left-[10px]
                    opacity-0
                    translate-x-[-30px]
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                    duration-500
                    ease-out
                  "
                >
                  <h3
                    className="
                      inline-block
                      px-3
                      py-1
                      rounded-lg
                      bg-blue-600
                      text-white
                      text-lg
                      font-semibold
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-gray-800">
                    {item.category}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <p className="text-center text-gray-400 mt-10">
              No creations found in this category.
            </p>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;