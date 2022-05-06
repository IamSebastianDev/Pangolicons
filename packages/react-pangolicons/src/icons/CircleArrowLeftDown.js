
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
          className={['pangolicons pangolicons-circleArrowLeftDown', className].join(" ")}
        >
          <path  d="M8.67,15.33l6.66-6.66M8.67,15.33m5.12,0H8.67V10.2M22,12A10,10,0,1,0,12,22,10,10,0,0,0,22,12Z"/>
        </svg>
      );
    };
    
	