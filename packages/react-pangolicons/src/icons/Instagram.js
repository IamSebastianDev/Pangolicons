
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
          className={['pangolicons pangolicons-instagram', className].join(" ")}
        >
          <path  d="M18.27,22H5.73c-2.05,0-3.73-1.68-3.73-3.73V5.73c0-2.05,1.68-3.73,3.73-3.73h12.54c2.05,0,3.73,1.68,3.73,3.73v12.54c0,2.05-1.68,3.73-3.73,3.73ZM12,7.56c-2.45,0-4.44,1.99-4.44,4.44s1.99,4.44,4.44,4.44,4.44-1.99,4.44-4.44-1.99-4.44-4.44-4.44Zm6.11-2.22c-.31,0-.56,.25-.56,.56s.25,.56,.56,.56,.56-.25,.56-.56-.25-.56-.56-.56Z"/>
        </svg>
      );
    };
    
	