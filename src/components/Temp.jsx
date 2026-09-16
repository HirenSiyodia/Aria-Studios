import React, { useState } from "react";

import image1 from "../assets/about.jpeg";
import image2 from "../assets/about.jpeg";
import image3 from "../assets/about.jpeg";
import image4 from "../assets/about.jpeg";
import image5 from "../assets/about.jpeg";
import image6 from "../assets/about.jpeg";

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

const Temp = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-white px-8 md:px-16 lg:px-24 py-28">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-wider">
            My creative portfolio
          </h1>

          <p className="mt-5 text-lg text-gray-500 tracking-wide leading-relaxed max-w-2xl mx-auto">
            A collection of my favorite works across digital art, illustration,
            and design.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-14">
          {CATEGORIES.map((category) => (
            <button key={category} onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
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
              <img src={item.image} alt={item.title}
                className="w-full h-[380px] object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-60"/>

              {/* Hover Content */}
              <div
                className="
                  absolute
                  bottom-3
                  left-3
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
          <div className="text-center py-20">
            <p className="text-gray-400">
              No creations found in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Temp;
