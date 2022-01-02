
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
          className="pangolicons pangolicons-infoCircle {className}"
        >
          <line  x1="12" y1="11.01" x2="12" y2="16.44"/><line  x1="12" y1="7.56" x2="12" y2="8.05"/><circle  cx="12" cy="12" r="10"/>
        </svg>
      );
    };
    
	