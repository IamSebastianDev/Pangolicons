
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
          className={['pangolicons pangolicons-circleArrowLeftUp', className].join(" ")}
        >
          <path  d="M8.67,8.67l6.66,6.66M8.67,8.67m0,5.12V8.67H13.8M12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22Z"/>
        </svg>
      );
    };
    
	