
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
          className={['pangolicons pangolicons-login', className].join(" ")}
        >
          <path  d="M14.06,2h3.66c1.74,0,3.17,1.28,3.17,2.85v14.29c0,1.57-1.43,2.85-3.17,2.85h-3.66m-2.62-5.56l2.78-4.44-2.78-4.44,2.78,4.44H3.11"/>
        </svg>
      );
    };
    
	