
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
          class="pangolicons pangolicons-convertToLink {className}"
        >
          <path  d="M9.42,17.81H7.81A5.83,5.83,0,0,1,2,12H2A5.83,5.83,0,0,1,7.81,6.19H9.42"/><line  x1="8.13" y1="12" x2="15.87" y2="12"/><path  d="M14.58,17.81h1.61A5.83,5.83,0,0,0,22,12h0a5.83,5.83,0,0,0-5.81-5.81H14.58"/>
        </svg>
      );
    };
    
	