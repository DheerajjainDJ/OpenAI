import React from "react";
import { useNavigate } from "react-router-dom";
import { page_not } from "../assets/index";

const NoMatchRoute = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <div className="mt-8 text-center max-w-xl items-center justify-center flex flex-col gap-4">
        <img
          src={page_not}
          alt="page-not-found"
          className="w-2/3 h-2/3 object-contain rounded-lg shadow-xl"
        />
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-800 w-fit text-white px-10 py-3 uppercase font-semibold rounded-full hover:bg-purple-700 hover:translate-x-1 transition-all hover:font-bold hover:shadow-xl"
        >
          go back
        </button>
      </div>
    </div>
  );
};

export default NoMatchRoute;
