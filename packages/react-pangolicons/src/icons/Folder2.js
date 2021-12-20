
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
          class="pangolicons pangolicons-folder2 {className}"
        >
          <polygon  points="22 19.65 2 19.65 2 4.35 7.91 4.35 10.82 9.06 22 9.06 22 19.65"/><path  d="M12,4.35h8.67A1.34,1.34,0,0,1,22,5.68v.44"/>
        </svg>
      );
    };
    
	