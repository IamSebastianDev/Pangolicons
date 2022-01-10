
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
          className={['pangolicons pangolicons-creditcard', className].join(" ")}
        >
          <path  d="M20.24,19.56H3.76A1.76,1.76,0,0,1,2,17.8V7.2A1.76,1.76,0,0,1,3.76,5.44H20.24A1.76,1.76,0,0,1,22,7.2V17.8A1.76,1.76,0,0,1,20.24,19.56Z"/><line  x1="2" y1="10.35" x2="22" y2="10.35"/>
        </svg>
      );
    };
    
	