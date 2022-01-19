import React from "react";

function Nav() {
  return (
    <nav className="flex flex-col bg-lightGray h-screen w-60 items-center">
      <h1 className="mt-12 font-semibold">
        <a href="https://www.devchallenges.io">
          <span className="text-red-400">Dev</span>Challenges.io
        </a>
      </h1>
      <div className="flex flex-col space-y-5 mt-32">
        <a href="#" className="text-gray-400 hover:text-black">
          Colors
        </a>
        <a href="#" className="text-gray-400 hover:text-black">
          Typography
        </a>
        <a href="#" className="text-gray-400 hover:text-black">
          Spaces
        </a>
        <a href="#" className="text-gray-400 hover:text-black">
          Buttons
        </a>
        <a href="#" className="font-bold">
          Inputs
        </a>
        <a href="#" className="text-gray-400 hover:text-black">
          Grid
        </a>
      </div>
    </nav>
  );
}

export default Nav;
