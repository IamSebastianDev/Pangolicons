
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
          class="pangolicons pangolicons-folderMinus {className}"
        >
          <polygon  points="22 19.65 2 19.65 2 4.35 9.09 4.35 12 6.71 22 6.71 22 19.65"/><line  x1="9.65" y1="13.18" x2="14.35" y2="13.18"/>
        </svg>
      );
    };
    
	