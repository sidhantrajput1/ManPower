/* eslint-disable react/prop-types */
import { useState } from "react";
import carouselData from "./CrouselData";

function Review() {
  const [curr, setCurr] = useState(0);

  const prev = curr === 0 ? carouselData.length - 1 : curr - 1;
  const next = curr === carouselData.length - 1 ? 0 : curr + 1;

  const arr = [prev, curr, next];

  function previous() {
    setCurr((curr) => (curr === 0 ? carouselData.length - 1 : curr - 1));
  }

  function nextS() {
    setCurr((curr) => (curr === carouselData.length - 1 ? 0 : curr + 1));
  }

  return (
    <div className="bg-gray-50 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800">What People Say About Us</h3>
          <div className="flex gap-4">
            <button
              onClick={previous}
              className="p-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-300 transition ease-in-out duration-200"
            >
              &lt;
            </button>
            <button
              onClick={nextS}
              className="p-2 bg-[#FFA229] text-black rounded-full shadow-lg hover:bg-yellow-400 transition ease-in-out duration-200"
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {arr.map((currIdx, idx) => {
            const { imageUrl, title, description, name, altText } = carouselData[currIdx];
            return (
              <div
                className=" rounded-lg shadow-lg flex-shrink-0 transform transition-transform ease-in-out duration-300"
                key={idx}
              >
                <Carousel
                  img={imageUrl}
                  title={title}
                  decription={description}
                  name={name}
                  altText={altText}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Carousel({ img, decription, altText, title, name }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <img
          className="h-16 w-16 rounded-full object-cover border-2 border-gray-200"
          src={img}
          alt={altText}
        />
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700 leading-relaxed">{decription}</p>
    </div>
  );
}

export default Review;
