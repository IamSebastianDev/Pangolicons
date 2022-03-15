
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
          className={['pangolicons pangolicons-convertToLink', className].join(" ")}
        >
          <path  d="M9.42,17.81h-1.61c-3.19,0-5.81-2.61-5.81-5.81h0c0-3.19,2.61-5.81,5.81-5.81h1.61m-1.29,5.81h7.74m-1.29,5.81h1.61c3.19,0,5.81-2.61,5.81-5.81h0c0-3.19-2.61-5.81-5.81-5.81h-1.61"/>
        </svg>
      );
    };
    
	