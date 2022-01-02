
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
          className="pangolicons pangolicons-userAdd {className}"
        >
          <path  d="M2.76,20.23V17.32a1.89,1.89,0,0,1,1.74-2H16a1.9,1.9,0,0,1,1.74,2v2.91"/><circle  cx="10.26" cy="7.81" r="4.04"/><line  x1="16.85" y1="10.9" x2="21.24" y2="10.9"/><line  x1="19.04" y1="8.71" x2="19.04" y2="13.1"/>
        </svg>
      );
    };
    
	