
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
          className={['pangolicons pangolicons-wifiOff', className].join(" ")}
        >
          <path  d="M12.77,17.66c0,.42-.34,.75-.75,.75s-.75-.34-.75-.75,.34-.75,.75-.75,.75,.34,.75,.75Zm2.99-2.54c-.36-.53-.82-.97-1.37-1.31m4.49-.81c-.46-.68-1.02-1.28-1.65-1.8m-6.64-1.72c-2.27,.39-4.22,1.7-5.45,3.54m16.87-2.14c-.64-.93-1.4-1.78-2.27-2.5m-5.95-2.66c-.58-.08-1.17-.13-1.77-.13-4.17,0-7.84,2.11-10.01,5.32M19.5,4.5L4.5,19.5"/>
        </svg>
      );
    };
    
	