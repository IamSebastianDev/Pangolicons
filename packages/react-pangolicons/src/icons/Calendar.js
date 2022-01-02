
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
          className="pangolicons pangolicons-calendar {className}"
        >
          <rect  x="2" y="3.47" width="20" height="17.5" rx="1.4"/><line  x1="2" y1="9.12" x2="22" y2="9.12"/><line  x1="7" y1="5.01" x2="7" y2="1.26"/><line  x1="17" y1="5.01" x2="17" y2="1.26"/>
        </svg>
      );
    };
    
	