
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
          className={['pangolicons pangolicons-server', className].join(" ")}
        >
          <path  d="M21,20.88H3a1,1,0,0,1-1-1V15.21a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1v4.67A1,1,0,0,1,21,20.88ZM6.67,17.21a.34.34,0,1,0,.33.33A.34.34,0,0,0,6.67,17.21Z"/><path  d="M21,9.79H3a1,1,0,0,1-1-1V4.12a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1V8.79A1,1,0,0,1,21,9.79ZM17.17,6.12a.34.34,0,1,0,.33.34A.34.34,0,0,0,17.17,6.12Z"/>
        </svg>
      );
    };
    
	