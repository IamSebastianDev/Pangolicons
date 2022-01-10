
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
          className={['pangolicons pangolicons-cloudHail', className].join(" ")}
        >
          <path  d="M17.29,16.05a4.71,4.71,0,1,0-1.91-9,7.05,7.05,0,1,0-10.22,9"/><line  x1="11.41" y1="14.13" x2="11.41" y2="15.9"/><line  x1="8.47" y1="15.31" x2="8.47" y2="17.07"/><line  x1="14.35" y1="16.48" x2="14.35" y2="18.25"/><line  x1="11.41" y1="18.54" x2="11.41" y2="18.54"/><line  x1="8.47" y1="19.72" x2="8.47" y2="19.72"/><line  x1="14.35" y1="20.9" x2="14.35" y2="20.9"/>
        </svg>
      );
    };
    
	