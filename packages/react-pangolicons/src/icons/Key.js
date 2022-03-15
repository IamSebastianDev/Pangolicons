
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
          className={['pangolicons pangolicons-key', className].join(" ")}
        >
          <path  d="M3.86,20.5l-1.25-1.25c-1.37-1.37-1.37-3.62,0-4.99l1.25-1.25c1.37-1.37,3.62-1.37,4.99,0l1.25,1.25c1.37,1.37,1.37,3.62,0,4.99l-1.25,1.25c-1.37,1.37-3.62,1.37-4.99,0Zm6.65-7.9L19.87,3.25m-3.12,5.2l2.08,2.08,3.12-3.12-3.12-3.12"/>
        </svg>
      );
    };
    
	