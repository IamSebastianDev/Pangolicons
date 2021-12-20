
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
          class="pangolicons pangolicons-logoutRight {className}"
        >
          <path  d="M14.06,2h3.66a3,3,0,0,1,3.17,2.85v14.3A3,3,0,0,1,17.72,22H14.06"/><polyline  points="5.89 16.44 3.11 12 5.89 7.56 3.11 12 14.22 12"/>
        </svg>
      );
    };
    
	