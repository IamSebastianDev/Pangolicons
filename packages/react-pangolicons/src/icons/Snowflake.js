
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
          class="pangolicons pangolicons-snowflake {className}"
        >
          <line  x1="12" y1="21.95" x2="12" y2="12"/><line  x1="12" y1="22" x2="12" y2="21.95"/><polyline  points="14.22 20.89 12 18.67 9.78 20.89"/><line  x1="12" y1="2.05" x2="12" y2="12"/><line  x1="12" y1="2" x2="12" y2="2.05"/><polyline  points="14.22 3.11 12 5.33 9.78 3.11"/><line  x1="21.95" y1="12" x2="12" y2="12"/><line  x1="22" y1="12" x2="21.95" y2="12"/><polyline  points="20.89 9.78 18.67 12 20.89 14.22"/><line  x1="2.05" y1="12" x2="12" y2="12"/><line  x1="2" y1="12" x2="2.05" y2="12"/><polyline  points="3.11 9.78 5.33 12 3.11 14.22"/><line  x1="16.71" y1="16.71" x2="12" y2="12"/><line  x1="19.07" y1="19.07" x2="19.04" y2="19.04"/><line  x1="7.29" y1="7.29" x2="12" y2="12"/><line  x1="4.93" y1="4.93" x2="4.96" y2="4.96"/><line  x1="16.71" y1="7.29" x2="12" y2="12"/><line  x1="19.07" y1="4.93" x2="19.04" y2="4.96"/><line  x1="7.29" y1="16.71" x2="12" y2="12"/><line  x1="4.93" y1="19.07" x2="4.96" y2="19.04"/>
        </svg>
      );
    };
    
	