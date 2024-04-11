import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-[118%] text-white bg-gradient-to-r from-black absolute flex justify-start items-center">
      <div className="mb-32 ml-12">
        <div>
          <h1 className="text-2xl font-bold p-2">{title}</h1>
          <p className="w-[30%] text-sm p-2">{overview}</p>
        </div>
        <div className="flex">
          <button className="py-2 px-6 mx-2 bg-white font-semibold text-slate-900 bg-opacity-100 rounded">
            Play
          </button>
          <button className="py-2 px-6 mx-2 bg-white font-semibold text-white bg-opacity-30 rounded">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
