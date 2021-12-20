
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
          class="pangolicons pangolicons-robot {className}"
        >
          <rect  x="2" y="12" width="20" height="10" rx="1.15"/><circle  cx="12" cy="4.5" r="2.5"/><line  x1="12" y1="7" x2="12" y2="12"/><circle  cx="8.25" cy="17" r="0.63"/><circle  cx="15.75" cy="17" r="0.63"/>
        </svg>
      );
    };
    
	