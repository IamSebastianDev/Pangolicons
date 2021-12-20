
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
          class="pangolicons pangolicons-layoutList {className}"
        >
          <rect  x="2" y="2" width="20" height="20" rx="1.5"/><line  x1="7" y1="7.14" x2="17" y2="7.14"/><line  x1="7" y1="12.15" x2="17" y2="12.15"/><line  x1="7" y1="16.86" x2="17" y2="16.86"/>
        </svg>
      );
    };
    
	