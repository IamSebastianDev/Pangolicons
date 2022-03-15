
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
          className={['pangolicons pangolicons-voicemail', className].join(" ")}
        >
          <path  d="M9.5,12c0,2.07-1.68,3.75-3.75,3.75s-3.75-1.68-3.75-3.75,1.68-3.75,3.75-3.75,3.75,1.68,3.75,3.75Zm8.75-3.75c-2.07,0-3.75,1.68-3.75,3.75s1.68,3.75,3.75,3.75,3.75-1.68,3.75-3.75-1.68-3.75-3.75-3.75ZM5.75,15.75h12.5"/>
        </svg>
      );
    };
    
	