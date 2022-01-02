
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
          className="pangolicons pangolicons-circleArrowLeft {className}"
        >
          <polyline  points="10.91 15.63 7.29 12 10.91 8.37 7.29 12 16.71 12"/><circle  cx="12" cy="12" r="10"/>
        </svg>
      );
    };
    
	