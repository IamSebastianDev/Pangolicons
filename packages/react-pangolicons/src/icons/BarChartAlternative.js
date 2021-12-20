
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
          stroke-width={strokeWidth}
          stroke-linecap={linecap}
          stroke-linejoin={linejoin}
          class="pangolicons pangolicons-barChartAlternative {className}"
        >
          <line  x1="12" y1="2" x2="12" y2="22"/><line  x1="17.88" y1="22" x2="17.88" y2="12.22"/><line  x1="6.12" y1="22" x2="6.12" y2="7.29"/>
        </svg>
      );
    };
    
	