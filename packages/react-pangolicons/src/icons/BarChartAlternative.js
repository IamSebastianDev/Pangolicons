
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
          className={['pangolicons pangolicons-barChartAlternative', className].join(" ")}
        >
          <line  x1="12" y1="2" x2="12" y2="22"/><line  x1="17.88" y1="22" x2="17.88" y2="12.22"/><line  x1="6.12" y1="22" x2="6.12" y2="7.29"/>
        </svg>
      );
    };
    
	