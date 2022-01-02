
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
          className="pangolicons pangolicons-shuffle {className}"
        >
          <line  x1="2" y1="22" x2="22" y2="2"/><polyline  points="22 15.53 22 22 15.53 22"/><polyline  points="15.53 2 22 2 22 8.47"/><line  x1="9.21" y1="9.21" x2="2" y2="2"/><line  x1="22" y1="22" x2="14.95" y2="14.95"/>
        </svg>
      );
    };
    
	