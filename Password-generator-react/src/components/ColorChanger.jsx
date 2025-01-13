import React, { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-2">
        <button
          type="button"
          className="bg-black"
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          type="button"
          className="bg-orange-600"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          type="button"
          className="bg-white text-black"
          onClick={() => setColor("white")}
        >
          White
        </button>
        <button
          type="button"
          className="bg-blue-700"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          type="button"
          className="bg-red-600"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          type="button"
          className="bg-pink-700"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          type="button"
          className="bg-yellow-300"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          type="button"
          className="bg-green-600"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          type="button"
          className="bg-skyblue"
          onClick={() => setColor("skyblue")}
        >
          Skyblue
        </button>
      </div>
    </div>
  );
};

export default ColorChanger;
