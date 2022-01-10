
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
          <path  d="M17.29,15.61a4.71,4.71,0,1,0-1.91-9,7.05,7.05,0,1,0-10.22,9"/><line  x1="13.62" y1="13.11" x2="10.38" y2="18.72"/><line  x1="10.48" y1="12.66" x2="7.25" y2="18.27"/><line  x1="14.78" y1="16.97" x2="12.27" y2="21.33"/>
        </svg>
      );
    };
    
	