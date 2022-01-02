
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
          className="pangolicons pangolicons-cornerArrowRightDown {className}"
        >
          <path  d="M22,13l-6.44,6.44L9.12,13l6.44,6.44V8.21A3.6,3.6,0,0,0,12,4.61H2"/>
        </svg>
      );
    };
    
	