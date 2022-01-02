
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
          className="pangolicons pangolicons-haze {className}"
        >
          <line  x1="7.71" y1="5.57" x2="20.57" y2="5.57"/><line  x1="2" y1="9.86" x2="14.86" y2="9.86"/><line  x1="2" y1="14.14" x2="22" y2="14.14"/><line  x1="4.6" y1="18.43" x2="20.31" y2="18.43"/>
        </svg>
      );
    };
    
	