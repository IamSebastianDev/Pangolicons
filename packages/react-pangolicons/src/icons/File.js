
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
          className={['pangolicons pangolicons-file', className].join(" ")}
        >
          <path  d="M13.37,2V9.14h6.84L13.37,2H5.7A2,2,0,0,0,3.79,4V20A2,2,0,0,0,5.7,22H18.3a2,2,0,0,0,1.91-2V9.14Z"/>
        </svg>
      );
    };
    
	