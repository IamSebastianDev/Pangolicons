
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
          className={['pangolicons pangolicons-bookClosed', className].join(" ")}
        >
          <path  d="M4.67,20V4c0-1.1,.9-2,2-2h12.67V22H6.67c-1.1,0-2-.9-2-2Zm14.67-3.33H7.33c-1.47,0-2.67,1.19-2.67,2.67"/>
        </svg>
      );
    };
    
	