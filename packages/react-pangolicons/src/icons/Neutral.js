
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
          class="pangolicons pangolicons-neutral {className}"
        >
          <path  d="M22,12A10,10,0,1,1,12,2,10,10,0,0,1,22,12ZM8.11,8.67a.56.56,0,0,0,0,1.11.56.56,0,1,0,0-1.11Zm7.78,0a.56.56,0,1,0,0,1.11.56.56,0,0,0,0-1.11Zm-7.78,6.6s-.55.06,7.78,0"/>
        </svg>
      );
    };
    
	