
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
          class="pangolicons pangolicons-cookie {className}"
        >
          <path  d="M20.24,10.24a3.22,3.22,0,0,1,.07-.64,4.11,4.11,0,0,1-3.6-4.07,4.91,4.91,0,0,1,.06-.67,2.75,2.75,0,0,1-.65.08,2.93,2.93,0,0,1-2.93-2.86A11.5,11.5,0,0,0,12,2,10,10,0,1,0,22,12.9,2.93,2.93,0,0,1,20.24,10.24Z"/><circle  cx="9.06" cy="7.88" r="0.29"/><circle  cx="7.89" cy="16.12" r="0.29"/><circle  cx="14.94" cy="13.76" r="0.29"/>
        </svg>
      );
    };
    
	