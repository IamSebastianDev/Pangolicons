
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
          className={['pangolicons pangolicons-externalLink', className].join(" ")}
        >
          <path  d="M22,12v8.26c0,.96-.78,1.74-1.74,1.74H3.74c-.96,0-1.74-.78-1.74-1.74V3.74c0-.96,.78-1.74,1.74-1.74H12m0,10L22,2h-5m5,0V6.19"/>
        </svg>
      );
    };
    
	