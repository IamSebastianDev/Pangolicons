
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
          className="pangolicons pangolicons-delimitor {className}"
        >
          <line  x1="2" y1="12" x2="22" y2="12"/><line  x1="2" y1="8.15" x2="2" y2="15.85"/><line  x1="22" y1="8.15" x2="22" y2="15.85"/>
        </svg>
      );
    };
    
	