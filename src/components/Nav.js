import React from "react";

function Nav() {
  return (
    <nav className="flex flex-col bg-lightGray h-screen w-60 items-center">
      <h1 className="mt-12 font-semibold">
        <li href="https://www.devchallenges.io">
          <span className="text-red-400">Dev</span>Challenges.io
        </li>
      </h1>
      <div className="flex flex-col space-y-5 mt-32">
        <li href="#" className="text-gray-400 hover:text-black cursor-pointer">
          Colors
        </li>
        <li href="#" className="text-gray-400 hover:text-black cursor-pointer">
          Typography
        </li>
        <li href="#" className="text-gray-400 hover:text-black cursor-pointer">
          Spaces
        </li>
        <li href="#" className="text-gray-400 hover:text-black cursor-pointer">
          Buttons
        </li>
        <li href="#" className="font-bold cursor-pointer">
          Inputs
        </li>
        <li href="#" className="text-gray-400 hover:text-black cursor-pointer">
          Grid
        </li>
      </div>
    </nav>
  );
}

export default Nav;
