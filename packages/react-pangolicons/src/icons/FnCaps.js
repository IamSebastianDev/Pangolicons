
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
          class="pangolicons pangolicons-fnCaps {className}"
        >
          <rect  x="2" y="2" width="20" height="20" rx="1.5"/><polygon  points="17.88 10.57 12 6.12 6.12 10.57 9.45 10.57 9.45 14.78 14.55 14.78 14.55 10.57 17.88 10.57"/><line  x1="9.45" y1="17.88" x2="14.55" y2="17.88"/>
        </svg>
      );
    };
    
	