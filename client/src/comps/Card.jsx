import React from "react";
import { download_pic } from "../assets/index";
import { downloadImage } from "../utils/index";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="card relative group rounded-xl shadow-card hover:shadow-cardhover">
      <img
        src={photo}
        loading="lazy"
        alt="card"
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="group-hover:flex flex-col absolute hidden bottom-0 left-0 right-0 m-2 p-4 bg-gray-900 max-h-[94.5%] rounded-md">
        <p className="text-white text-xs md:text-sm font-medium overflow-y-auto">
          {prompt}
        </p>
        <div className="flex mt-5 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-purple-800 text-white rounded-full flex items-center font-semibold justify-center text-md uppercase">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            type="button"
            title="Download Image"
            onClick={() => downloadImage(_id, photo)}
            className="border-none outline-none bg-transparent"
          >
            <img
              src={download_pic}
              alt="download"
              className="h-8 w-8 mt-3 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
