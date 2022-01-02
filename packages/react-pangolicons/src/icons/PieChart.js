
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
          className="pangolicons pangolicons-pieChart {className}"
        >
          <path  d="M22,12A10,10,0,0,0,12,2"/><path  d="M9.16,2.41A10,10,0,1,0,21.55,15"/><polyline  points="12 2 12 12 22 12"/>
        </svg>
      );
    };
    
	