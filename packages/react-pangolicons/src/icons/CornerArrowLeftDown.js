
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
          class="pangolicons pangolicons-cornerArrowLeftDown {className}"
        >
          <path  d="M2,13l6.44,6.44L14.88,13,8.44,19.39V8.21A3.6,3.6,0,0,1,12,4.61H22"/>
        </svg>
      );
    };
    
	