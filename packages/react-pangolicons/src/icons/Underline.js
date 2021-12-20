
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
          class="pangolicons pangolicons-underline {className}"
        >
          <path  d="M19.69,2v9.33C19.69,15.75,16.25,18,12,18h0c-4.25,0-7.69-2.25-7.69-6.67V2"/><line  x1="4.31" y1="22" x2="19.69" y2="22"/>
        </svg>
      );
    };
    
	