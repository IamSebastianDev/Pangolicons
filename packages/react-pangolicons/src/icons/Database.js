
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
          class="pangolicons pangolicons-database {className}"
        >
          <path  d="M12,2C7.4,2,3.66,3.31,3.66,4.94S7.4,7.89,12,7.89s8.34-1.33,8.34-2.95S16.6,2,12,2Z"/><path  d="M12,14.94c-4.6,0-8.34-1.32-8.34-2.94v7.06C3.66,20.69,7.4,22,12,22s8.34-1.31,8.34-2.94V12C20.34,13.62,16.6,14.94,12,14.94Z"/><line  x1="3.66" y1="12" x2="3.66" y2="4.94"/><line  x1="20.34" y1="5.56" x2="20.34" y2="12"/>
        </svg>
      );
    };
    
	