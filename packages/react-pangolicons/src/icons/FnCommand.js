
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
          className={['pangolicons pangolicons-fnCommand', className].join(" ")}
        >
          <path  d="M20.5,22H3.5c-.83,0-1.5-.67-1.5-1.5V3.5c0-.83,.67-1.5,1.5-1.5H20.5c.83,0,1.5,.67,1.5,1.5V20.5c0,.83-.67,1.5-1.5,1.5Zm-6.74-5.88c0,1.3,1.05,2.35,2.35,2.35s2.35-1.05,2.35-2.35-1.05-2.35-2.35-2.35H7.88c-1.3,0-2.35,1.05-2.35,2.35s1.05,2.35,2.35,2.35,2.35-1.05,2.35-2.35V7.88c0-1.3-1.05-2.35-2.35-2.35s-2.35,1.05-2.35,2.35,1.05,2.35,2.35,2.35h8.24c1.3,0,2.35-1.05,2.35-2.35s-1.05-2.35-2.35-2.35-2.35,1.05-2.35,2.35v8.24Z"/>
        </svg>
      );
    };
    
	