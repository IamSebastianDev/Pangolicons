
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
          className={['pangolicons pangolicons-trashcanEmpty', className].join(" ")}
        >
          <path  d="M5.13,6v13.7A2.32,2.32,0,0,0,7.44,22h9.12a2.32,2.32,0,0,0,2.31-2.31V6"/><line  x1="3.98" y1="5.97" x2="20.02" y2="5.97"/><path  d="M8.34,5.54C8.34,4.78,9,2,9.71,2h4.58c.76,0,1.37,2.78,1.37,3.54"/>
        </svg>
      );
    };
    
	