
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
          class="pangolicons pangolicons-circleX {className}"
        >
          <line  x1="8.67" y1="15.33" x2="15.33" y2="8.67"/><line  x1="15.33" y1="15.33" x2="8.67" y2="8.67"/><circle  cx="12" cy="12" r="10"/>
        </svg>
      );
    };
    
	