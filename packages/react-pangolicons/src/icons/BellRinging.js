
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
          class="pangolicons pangolicons-bellRinging {className}"
        >
          <path  d="M12,3.18a4.6,4.6,0,0,1,4.6,4.6S16.48,17,20.48,18.09h-17C7.52,17,7.4,7.78,7.4,7.78A4.6,4.6,0,0,1,12,3.18M9,21.39a7.61,7.61,0,0,0,5.92,0M20.24,7.88A9,9,0,0,0,17.88,2M3.94,7.89A7.54,7.54,0,0,1,6.29,2"/>
        </svg>
      );
    };
    
	