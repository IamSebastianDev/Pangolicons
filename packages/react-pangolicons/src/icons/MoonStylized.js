
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
          className={['pangolicons pangolicons-moonStylized', className].join(" ")}
        >
          <path  d="M16.44,14.22A6.66,6.66,0,0,1,12.71,2c-.24,0-.47,0-.71,0A10,10,0,1,0,22,12c0-.24,0-.47,0-.71A6.64,6.64,0,0,1,16.44,14.22Z"/>
        </svg>
      );
    };
    
	