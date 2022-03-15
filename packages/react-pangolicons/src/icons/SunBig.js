
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
          className={['pangolicons pangolicons-sunBig', className].join(" ")}
        >
          <path  d="M17,12c0,2.76-2.24,5-5,5s-5-2.24-5-5,2.24-5,5-5,5,2.24,5,5ZM12,2V7m10,5h-5m-5,10v-5M2,12H7m-2.07-7.07l3.54,3.54m10.61-3.54l-3.54,3.54m3.54,10.61l-3.54-3.54m-10.61,3.54l3.54-3.54"/>
        </svg>
      );
    };
    
	