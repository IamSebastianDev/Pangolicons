
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
          <path  d="M18.27,22H5.73A3.74,3.74,0,0,1,2,18.27V5.73A3.74,3.74,0,0,1,5.73,2H18.27A3.74,3.74,0,0,1,22,5.73V18.27A3.74,3.74,0,0,1,18.27,22ZM12,7.56A4.44,4.44,0,1,0,16.44,12,4.44,4.44,0,0,0,12,7.56Zm6.11-2.23a.55.55,0,0,0-.55.56.54.54,0,0,0,.55.55.55.55,0,0,0,.56-.55A.56.56,0,0,0,18.11,5.33Z"/>
        </svg>
      );
    };
    
	