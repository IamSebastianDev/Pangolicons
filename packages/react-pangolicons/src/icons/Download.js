
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
          className="pangolicons pangolicons-download {className}"
        >
          <polyline  points="7.8 11.92 12 16.12 16.2 11.92 12 16.12 12 3.18"/><path  d="M22,16.12v2.94a1.76,1.76,0,0,1-1.76,1.76H3.76A1.76,1.76,0,0,1,2,19.06V16.12"/>
        </svg>
      );
    };
    
	