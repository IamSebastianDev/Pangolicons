
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
          className={['pangolicons pangolicons-webcam', className].join(" ")}
        >
          <path  d="M14.35,9.06c0,1.3-1.05,2.35-2.35,2.35s-2.35-1.05-2.35-2.35,1.05-2.35,2.35-2.35,2.35,1.05,2.35,2.35Zm-2.35-7.06c-3.9,0-7.06,3.16-7.06,7.06s3.16,7.06,7.06,7.06,7.06-3.16,7.06-7.06-3.16-7.06-7.06-7.06Zm0,14.12v5.88m-5.29,0h10.59"/>
        </svg>
      );
    };
    
	