
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
          class="pangolicons pangolicons-spoon {className}"
        >
          <path  d="M21.35,2.65c-1.53-1.52-5.23-.29-8.28,2.76s-2.9,5.37-1.38,6.9,3.85,1.66,6.9-1.38S22.87,4.18,21.35,2.65Zm-9.66,9.66L2,22"/>
        </svg>
      );
    };
    
	