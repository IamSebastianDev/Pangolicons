
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
          className="pangolicons pangolicons-codepen {className}"
        >
          <polygon  points="2 8.67 12 15.33 22 8.67 12 2 2 8.67"/><polygon  points="2 15.33 12 22 22 15.33 12 8.67 2 15.33"/><line  x1="2" y1="8.67" x2="2" y2="15.33"/><line  x1="12" y1="15.33" x2="12" y2="22"/><line  x1="22" y1="8.67" x2="22" y2="15.33"/><line  x1="12" y1="2" x2="12" y2="8.67"/>
        </svg>
      );
    };
    
	