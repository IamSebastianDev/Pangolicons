
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
          className={['pangolicons pangolicons-eyeOpen', className].join(" ")}
        >
          <path  d="M22,12c0,1.29-4.48,6.47-10,6.47S2,13.29,2,12,6.48,5.53,12,5.53s10,5.18,10,6.47Zm-10-2.94c-1.62,0-2.94,1.32-2.94,2.94s1.32,2.94,2.94,2.94,2.94-1.32,2.94-2.94-1.32-2.94-2.94-2.94Z"/>
        </svg>
      );
    };
    
	