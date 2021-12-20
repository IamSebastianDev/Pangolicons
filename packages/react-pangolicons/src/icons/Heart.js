
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
          class="pangolicons pangolicons-heart {className}"
        >
          <path  d="M11.94,7.49A5.42,5.42,0,0,0,6.59,2H6.51C2.71,2.06.69,6.72,2.94,9.87l9,12.13L21.22,9.79c2-3.25-.09-7.73-3.84-7.79h-.09a5.43,5.43,0,0,0-5.35,5.49"/>
        </svg>
      );
    };
    
	