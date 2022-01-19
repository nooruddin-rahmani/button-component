import React from "react";

function Buttons({
  content,
  labelContent,
  labelClassname,
  buttonClassname,
  iconContent1,
  iconContent2,
}) {
  return (
    <div className="flex flex-col">
      <label className={labelClassname}>{labelContent}</label>
      <button className={buttonClassname}>{content}</button>
    </div>
  );
}

export default Buttons;
