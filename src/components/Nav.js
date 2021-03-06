import React from "react";

function Nav() {
  return (
    <nav className="flex flex-col bg-lightGray h-screen w-60 items-center">
      <h1 className="mt-12 font-semibold list-none">
        <li href="https://www.devchallenges.io">
          <span className="text-red-400">Dev</span>Challenges.io
        </li>
      </h1>
      <div className="flex flex-col space-y-5 mt-32">
        <li
          href="#"
          className="text-gray-400 hover:text-black cursor-pointer list-none"
        >
          Colors
        </li>
        <li
          href="#"
          className="text-gray-400 hover:text-black cursor-pointer list-none"
        >
          Typography
        </li>
        <li
          href="#"
          className="text-gray-400 hover:text-black cursor-pointer list-none"
        >
          Spaces
        </li>
        <li
          href="#"
          className="text-gray-400 hover:text-black cursor-pointer list-none"
        >
          Buttons
        </li>
        <li href="#" className="font-bold cursor-pointer list-none">
          Inputs
        </li>
        <li
          href="#"
          className="text-gray-400 hover:text-black cursor-pointer list-none"
        >
          Grid
        </li>
      </div>
    </nav>
  );
}

export default Nav;
