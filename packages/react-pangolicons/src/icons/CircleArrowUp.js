
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
          class="pangolicons pangolicons-circleArrowUp {className}"
        >
          <polyline  points="8.37 10.91 12 7.29 15.63 10.91 12 7.29 12 16.71"/><circle  cx="12" cy="12" r="10"/>
        </svg>
      );
    };
    
	