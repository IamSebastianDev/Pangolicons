
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
          className={['pangolicons pangolicons-circleArrowRightDown', className].join(" ")}
        >
          <path  d="M15.33,15.33,8.67,8.67m6.66,6.66,0-5.12v5.12H10.2M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Z"/>
        </svg>
      );
    };
    
	