
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
          className="pangolicons pangolicons-github {className}"
        >
          <path  d="M9.75,22c.12-.87,0-5.83.43-6.16-3-.34-6.12-1.5-6.12-6.65a5.19,5.19,0,0,1,1.38-3.6A4.84,4.84,0,0,1,5.57,2s1.13-.36,3.7,1.38A12.55,12.55,0,0,1,12.63,3,12.68,12.68,0,0,1,16,3.41C18.56,1.67,19.69,2,19.69,2a4.84,4.84,0,0,1,.13,3.56,5.19,5.19,0,0,1,1.38,3.6c0,5.17-3.14,6.3-6.13,6.63A3.23,3.23,0,0,1,16,18.31c0,1.8,0,3.25,0,3.69H9.3c0-.32,0-1.16,0-2.29-3.74.82-4.52-1.8-4.52-1.8a3.57,3.57,0,0,0-1.5-2"/>
        </svg>
      );
    };
    
	