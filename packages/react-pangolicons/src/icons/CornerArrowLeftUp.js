
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
          class="pangolicons pangolicons-cornerArrowLeftUp {className}"
        >
          <path  d="M2,11.05,8.44,4.61l6.44,6.44L8.44,4.61V15.79a3.6,3.6,0,0,0,3.6,3.6H22"/>
        </svg>
      );
    };
    
	