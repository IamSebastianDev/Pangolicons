
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
          className={['pangolicons pangolicons-bluetoothConnected', className].join(" ")}
        >
          <path  d="M11.79,22V2l7.94,5-7.94,5,7.94,5-7.94,5Zm-5.5-6.62l5.5-3.38,7.94-5m-13.44,1.25l5.5,3.75,7.94,5M5.49,12H2m20,0h-3.49"/>
        </svg>
      );
    };
    
	