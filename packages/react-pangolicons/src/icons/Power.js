
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
          className={['pangolicons pangolicons-power', className].join(" ")}
        >
          <path  d="M16.4,6.06c2.48,1.5,4.14,4.22,4.14,7.33,0,4.72-3.83,8.55-8.55,8.55S3.45,18.1,3.45,13.38c0-3.11,1.66-5.83,4.14-7.33M12,1.93V13.47"/>
        </svg>
      );
    };
    
	