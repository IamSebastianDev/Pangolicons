
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
          className={['pangolicons pangolicons-frown', className].join(" ")}
        >
          <path  d="M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12,6.48,2,12,2s10,4.48,10,10Zm-13.89-3.33c-.31,0-.56,.25-.56,.56s.25,.56,.56,.56,.56-.25,.56-.56-.25-.56-.56-.56Zm7.78,0c-.31,0-.56,.25-.56,.56s.25,.56,.56,.56,.56-.25,.56-.56-.25-.56-.56-.56Zm0,8.06c-3.89-3.27-7.78,0-7.78,0"/>
        </svg>
      );
    };
    
	