
    import React from "react";

    export default ({
      size = "24",
      color = "currentColor",
      strokeWidth = "1.5",
      linecap = "round",
      linejoin = "round",
      className = ""
    }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap={linecap}
          strokeLinejoin={linejoin}
          className="pangolicons pangolicons-text {className}"
        >
          <line  x1="2" y1="12" x2="22" y2="12"/><line  x1="2" y1="4.86" x2="22" y2="4.86"/><line  x1="2" y1="19.14" x2="17.71" y2="19.14"/>
        </svg>
      );
    };
    
	