
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
          class="pangolicons pangolicons-fullscreenExit {className}"
        >
          <polyline  points="6 2 6 6 2 6"/><polyline  points="18 2 18 6 22 6"/><polyline  points="6 22 6 18 2 18"/><polyline  points="18 22 18 18 22 18"/>
        </svg>
      );
    };
    
	