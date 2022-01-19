import React from "react";

function ButtonWithIcon({
  contentWithIcon,
  buttonClassName,
  leftIcon,
  rightIcon,
  labelWithIcon,
  labelWithIconClass,
}) {
  return (
    <div className="flex flex-col">
      <label className={labelWithIconClass}>{labelWithIcon}</label>
      <button className={buttonClassName}>
        <span className="material-icons text-center mr-1">{rightIcon}</span>
        {contentWithIcon}
        <span className="material-icons ml-2">{leftIcon}</span>
      </button>
    </div>
  );
}

export default ButtonWithIcon;
