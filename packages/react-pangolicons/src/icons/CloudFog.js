
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
          className={['pangolicons pangolicons-cloudFog', className].join(" ")}
        >
          <path  d="M5.16,16.65c-1.9-1.26-3.16-3.43-3.16-5.88,0-3.9,3.16-7.06,7.06-7.06,2.78,0,5.17,1.61,6.33,3.94,.58-.26,1.23-.41,1.91-.41,2.6,0,4.71,2.11,4.71,4.71s-2.11,4.71-4.71,4.71m-11.18-3.43h10.59m-8.24,3.53h5.88m-8.24,3.53h12.94"/>
        </svg>
      );
    };
    
	