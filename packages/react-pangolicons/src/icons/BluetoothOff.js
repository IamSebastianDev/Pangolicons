
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
          className={['pangolicons pangolicons-bluetoothOff', className].join(" ")}
        >
          <path  d="M15.36,19.5l-4,2.5V2l7.94,5-7.94,5m-5.5,3.38L11.39,12l7.94-5"/><line  x1="2" y1="2" x2="22" y2="22"/>
        </svg>
      );
    };
    
	