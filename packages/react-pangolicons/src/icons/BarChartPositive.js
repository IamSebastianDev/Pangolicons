
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
          className={['pangolicons pangolicons-barChartPositive', className].join(" ")}
        >
          <line  x1="19.5" y1="2" x2="19.5" y2="22"/><line  x1="4.5" y1="15.53" x2="4.5" y2="22"/><line  x1="9.5" y1="22" x2="9.5" y2="12.22"/><line  x1="14.5" y1="22" x2="14.5" y2="7.29"/>
        </svg>
      );
    };
    
	