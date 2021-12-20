
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
          class="pangolicons pangolicons-cloudDrizzle {className}"
        >
          <path  d="M17.29,15.6a4.71,4.71,0,1,0-1.91-9,7.05,7.05,0,1,0-10.22,9"/><line  x1="11.41" y1="12.51" x2="11.41" y2="14.28"/><line  x1="8.47" y1="13.69" x2="8.47" y2="15.45"/><line  x1="14.35" y1="14.87" x2="14.35" y2="16.63"/><line  x1="11.41" y1="17.22" x2="11.41" y2="18.98"/><line  x1="8.47" y1="18.4" x2="8.47" y2="20.16"/><line  x1="14.35" y1="19.57" x2="14.35" y2="21.34"/>
        </svg>
      );
    };
    
	