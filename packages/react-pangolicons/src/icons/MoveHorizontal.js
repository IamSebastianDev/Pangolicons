
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
          class="pangolicons pangolicons-moveHorizontal {className}"
        >
          <polyline  points="19.35 14.65 22 12 19.35 9.35"/><polyline  points="4.65 9.35 2 12 4.65 14.65"/><line  x1="2" y1="12" x2="22" y2="12"/>
        </svg>
      );
    };
    
	