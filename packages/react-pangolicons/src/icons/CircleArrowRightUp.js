
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
          className={['pangolicons pangolicons-circleArrowRightUp', className].join(" ")}
        >
          <path  d="M15.33,8.67,8.67,15.33m6.66-6.66-5.12,0h5.12V13.8M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Z"/>
        </svg>
      );
    };
    
	