
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
          stroke-width={strokeWidth}
          stroke-linecap={linecap}
          stroke-linejoin={linejoin}
          class="pangolicons pangolicons-cornerArrowDownRight {className}"
        >
          <path  d="M13,22l6.44-6.44L13,9.12l6.44,6.44H8.21A3.6,3.6,0,0,1,4.61,12V2"/>
        </svg>
      );
    };
    
	