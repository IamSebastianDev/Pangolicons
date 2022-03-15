
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
          className={['pangolicons pangolicons-fnTab', className].join(" ")}
        >
          <path  d="M20.5,22H3.5c-.83,0-1.5-.67-1.5-1.5V3.5c0-.83,.67-1.5,1.5-1.5H20.5c.83,0,1.5,.67,1.5,1.5V20.5c0,.83-.67,1.5-1.5,1.5Zm-8.38-6.47l3.26-3.53-3.26-3.53m3.26,3.53H5.97m12.06-3.53v7.06"/>
        </svg>
      );
    };
    
	