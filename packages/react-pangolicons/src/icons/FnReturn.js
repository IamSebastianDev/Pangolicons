
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
          className={['pangolicons pangolicons-fnReturn', className].join(" ")}
        >
          <path  d="M20.5,22H3.5c-.83,0-1.5-.67-1.5-1.5V3.5c0-.83,.67-1.5,1.5-1.5H20.5c.83,0,1.5,.67,1.5,1.5V20.5c0,.83-.67,1.5-1.5,1.5ZM9.96,10.74l-3.26,3.28,3.26,3.28m-3.26-3.28h10.59V6.71h-5.74"/>
        </svg>
      );
    };
    
	