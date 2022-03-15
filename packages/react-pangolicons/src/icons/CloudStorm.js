
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
          strokeWidth={strokeWidth}
          strokeLinecap={linecap}
          strokeLinejoin={linejoin}
          className={['pangolicons pangolicons-cloudStorm', className].join(" ")}
        >
          <path  d="M5.16,15.61c-1.9-1.26-3.16-3.43-3.16-5.88,0-3.9,3.16-7.06,7.06-7.06,2.78,0,5.17,1.61,6.33,3.94,.58-.26,1.23-.41,1.91-.41,2.6,0,4.71,2.11,4.71,4.71s-2.11,4.71-4.71,4.71m-6.91,3.1l3.24-5.6m-3.14-.45l-3.24,5.6m7.54-1.29l-2.51,4.35"/>
        </svg>
      );
    };
    
	