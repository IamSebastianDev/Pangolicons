
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
          className={['pangolicons pangolicons-database', className].join(" ")}
        >
          <path  d="M20.34,4.94c0,1.62-3.74,2.95-8.34,2.95S3.66,6.56,3.66,4.94s3.74-2.94,8.34-2.94,8.34,1.31,8.34,2.94ZM12,14.94c-4.6,0-8.34-1.31-8.34-2.94v7.06c0,1.63,3.74,2.94,8.34,2.94s8.34-1.31,8.34-2.94v-7.06c0,1.62-3.74,2.94-8.34,2.94ZM3.66,12V4.94m16.67,.63v6.44"/>
        </svg>
      );
    };
    
	