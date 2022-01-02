
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
          className="pangolicons pangolicons-strikethrough {className}"
        >
          <path  d="M10.46,11.66c-.69-.31-3.84-2-3.84-4.74A5.16,5.16,0,0,1,12,2a5.16,5.16,0,0,1,5.38,4.92"/><line  x1="2.77" y1="11.83" x2="21.23" y2="11.83"/><path  d="M14,12.34c.69.31,3.84,2,3.84,4.74A5.16,5.16,0,0,1,12.43,22a5.16,5.16,0,0,1-5.38-4.92"/>
        </svg>
      );
    };
    
	