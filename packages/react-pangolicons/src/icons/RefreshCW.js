
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
          className={['pangolicons pangolicons-refreshCW', className].join(" ")}
        >
          <path  d="M20.23,10.15a8,8,0,0,1,.26,2A8.15,8.15,0,0,1,6.58,17.94m1,4.06-1-4.06m.06,0,3.83-1.4"/><path  d="M3.77,13.85a8,8,0,0,1-.26-2A8.15,8.15,0,0,1,17.42,6.06M16.44,2l1,4.06m-.06,0-3.83,1.4"/>
        </svg>
      );
    };
    
	