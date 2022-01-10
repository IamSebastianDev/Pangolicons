
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
          <polyline  points="8.67 13.79 8.67 8.67 13.79 8.67 8.67 8.67 15.33 15.33"/><circle  cx="12" cy="12" r="10"/>
        </svg>
      );
    };
    
	