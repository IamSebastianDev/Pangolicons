
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
          className={['pangolicons pangolicons-wind', className].join(" ")}
        >
          <path  d="M8.33,2.57c.51-.36,1.13-.57,1.8-.57,1.73,0,3.13,1.4,3.13,3.12s-1.4,3.12-3.13,3.12H2m0,3.75H18.87c1.73,0,3.13-1.4,3.13-3.12s-1.4-3.12-3.13-3.12c-.67,0-1.29,.21-1.8,.57m-5,15.11c.51,.36,1.13,.57,1.8,.57,1.73,0,3.13-1.4,3.13-3.12s-1.4-3.12-3.13-3.12H2"/>
        </svg>
      );
    };
    
	