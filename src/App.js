import React from "react";
import Nav from "./components/Nav";
import Buttons from "./components/Buttons";
import ButtonWithIcon from "./components/ButtonWithIcon";

function App() {
  return (
    <div className="flex flex-row text-gray-900">
      <Nav />
      <div className="mx-20 mt-14">
        <h1 className="font-poppins font-medium text-2xl text-gray-600 ">
          Buttons
        </h1>
        <div className="flex">
          <Buttons
            content="Default"
            buttonClassname="px-3 py-2 bg-gray-200 rounded-md w-20 shadow-sm"
            labelContent="<Button/>"
            labelClassname="text-xs font-normal mt-8 mb-3"
          />
          <Buttons
            content="Default"
            buttonClassname="px-3 py-2 bg-gray-200 hover:bg-gray-400 ml-44 rounded-md w-20 focus:bg-gray-400 "
            labelContent="&:hover, &:focus"
            labelClassname="text-xs font-normal mt-8 mb-3 ml-44 text-gray-500 font-medium"
          />
        </div>
        <div className="flex">
          <Buttons
            content="Default"
            buttonClassname=" py-2 border border-blue-700 border-md border-5 w-24 text-blue-700 rounded-md  shadow-sm"
            labelContent='<Button variant-"outline" />'
            labelClassname="text-xs font-normal mt-8 mb-3"
          />
          <Buttons
            content="Default"
            buttonClassname="py-2 border border-blue-700 border-md border-5 w-24 ml-90 text-blue-700 rounded-md shadow-sm hover:bg-blue-200 focus:bg-blue-200"
            labelContent="&:hover, &:focus"
            labelClassname="text-xs font-normal ml-90 mt-8 mb-3"
          />
        </div>
        <div className="flex">
          <Buttons
            content="Default"
            buttonClassname=" py-2 text-left w-24 text-blue-700 rounded-md "
            labelContent='<Button variant-"text" />'
            labelClassname="text-xs font-normal mt-8 mb-3"
          />
          <Buttons
            content="Default"
            buttonClassname="py-2 w-24 ml-28 text-blue-700 rounded-md hover:bg-blue-200"
            labelContent="&:hover, &:focus"
            labelClassname="text-xs font-normal ml-28 mt-8 mb-3"
          />
        </div>
        <div className="flex">
          <Buttons
            content="Default"
            buttonClassname=" py-2 w-24 text-white bg-blue-700 rounded-md "
            labelContent="<Button disableShadow />"
            labelClassname="text-xs font-normal mt-14 mb-3"
          />
        </div>
        <div className="flex">
          <Buttons
            content="Disabled"
            buttonClassname="px-3 py-2 bg-gray-200 w-24 text-gray-400 rounded-md shadow-sm cursor-not-allowed"
            labelContent="<Button disabled />"
            labelClassname="text-xs font-normal mt-8 mb-3"
          />
          <Buttons
            content="Disabled"
            buttonClassname="px-3 py-2 bg-gray-200 w-24 ml-44 text-gray-400 rounded-md hover:bg-white cursor-not-allowed"
            labelContent='<Button variant="text" disabled />'
            labelClassname="text-xs font-normal mt-8 mb-3 ml-44 font-medium"
          />
        </div>
        <div className="flex">
          <ButtonWithIcon
            contentWithIcon="Default"
            buttonClassName="flex py-3 px-4 w-32 text-white bg-blue-700 rounded-md"
            rightIcon="add_shopping_cart"
            labelWithIcon="<Button startIcon=”local_grocery_store” />"
            labelWithIconClass="text-xs font-normal mt-14 mb-3"
          />
          <ButtonWithIcon
            contentWithIcon="Default"
            buttonClassName="flex py-3  px-3 w-32 text-white ml-9 bg-blue-700 rounded-md"
            leftIcon="add_shopping_cart"
            labelWithIcon="<Button endIcon=”local_grocery_store” />"
            labelWithIconClass="text-xs font-normal mt-14 mb-3 ml-9"
          />
        </div>
        <div className="flex">
          <Buttons
            content="Default"
            buttonClassname="px-3 py-2 bg-blue-700 w-24 text-white rounded-md shadow-sm"
            labelContent="<Button size=”sm” />"
            labelClassname="text-xs font-normal mt-8 mb-3"
          />
          <Buttons
            content="Default"
            buttonClassname="px-3 py-3 bg-blue-700 w-28 ml-20 text-white rounded-md"
            labelContent="<Button size=”md” />"
            labelClassname="text-xs font-normal mt-8 mb-3 ml-20 font-medium"
          />
          <Buttons
            content="Default"
            buttonClassname="px-3 py-3 bg-blue-700 w-32 ml-20 text-white rounded-md "
            labelContent="<Button size=”lg” />"
            labelClassname="text-xs font-normal mt-8 mb-3 ml-20 font-medium"
          />
        </div>
        <div className="flex">
          <Buttons
            content="Default"
            buttonClassname="px-3 py-2 bg-gray-200 rounded-md w-20 shadow-sm"
            labelContent="<Button color=”default” />"
            labelClassname="text-xs font-normal mt-8 mb-3"
          />
          <Buttons
            content="Default"
            buttonClassname=" py-2 w-24 text-white bg-blue-700 rounded-md ml-20 "
            labelContent="<Button color=”primary” />"
            labelClassname="text-xs font-normal mt-8 mb-3 ml-20"
          />
          <Buttons
            content="Secondary"
            buttonClassname=" py-2 px-4 w-28 text-white bg-gray-700 rounded-md ml-20 "
            labelContent="<Button color=”primary” />"
            labelClassname="text-xs font-normal mt-8 mb-3 ml-20"
          />
          <Buttons
            content="Danger"
            buttonClassname=" py-2 w-24 text-white bg-red-600 rounded-md ml-20 "
            labelContent="<Button color=”primary” />"
            labelClassname="text-xs font-normal mt-8 mb-3 ml-20"
          />
        </div>
        <div className="flex">
          <Buttons
            content="Default"
            buttonClassname="px-3 py-2 bg-gray-200 rounded-md w-20 shadow-sm hover:bg-gray-400 focus:bg-gray-400"
            labelContent="<Button color=”default” />"
            labelClassname="text-xs font-normal mt-8 mb-3"
          />
          <Buttons
            content="Default"
            buttonClassname=" py-2 w-24 text-white bg-blue-700 rounded-md ml-20 hover:bg-blue-800 focus:bg-blue-800"
            labelContent="<Button color=”primary” />"
            labelClassname="text-xs font-normal mt-8 mb-3 ml-20"
          />
          <Buttons
            content="Secondary"
            buttonClassname=" py-2 px-4 w-28 text-white bg-gray-700 rounded-md ml-20 hover:bg-gray-800 focus:bg-gray-800"
            labelContent="<Button color=”primary” />"
            labelClassname="text-xs font-normal mt-8 mb-3 ml-20"
          />
          <Buttons
            content="Danger"
            buttonClassname=" py-2 w-24 text-white bg-red-600 rounded-md ml-20 hover:bg-red-700 focus:bg-red-700"
            labelContent="<Button color=”primary” />"
            labelClassname="text-xs font-normal mt-8 mb-3 ml-20"
          />
        </div>
        <div className="flex flex-col mt-16 space-y-9 mb-10">
          <span>
            Icons:
            <a href="https://material.io/resources/icons/?style=round">
              https://material.io/resources/icons/?style=round
            </a>
          </span>
          <span>
            created
            <span className="underline font-semibold">Nooruddin</span> -
            devChallenges.io
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
