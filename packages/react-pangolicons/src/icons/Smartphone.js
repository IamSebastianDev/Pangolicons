
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
          class="pangolicons pangolicons-smartphone {className}"
        >
          <path  d="M16.3,22H7.7a2,2,0,0,1-1.95-1.95V4A2,2,0,0,1,7.7,2h8.6a2,2,0,0,1,1.95,2v16.1A2,2,0,0,1,16.3,22ZM12,17.31a.32.32,0,1,0,.31.31A.31.31,0,0,0,12,17.31Z"/>
        </svg>
      );
    };
    
	