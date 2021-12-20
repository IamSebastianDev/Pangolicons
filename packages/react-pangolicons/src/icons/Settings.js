
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
          class="pangolicons pangolicons-settings {className}"
        >
          <circle  cx="7.33" cy="6" r="0.67"/><rect  x="2.67" y="2" width="18.67" height="8" rx="3.4"/><circle  cx="16.67" cy="18" r="0.67"/><rect  x="2.67" y="14" width="18.67" height="8" rx="3.4" transform="translate(24 36) rotate(180)"/>
        </svg>
      );
    };
    
	