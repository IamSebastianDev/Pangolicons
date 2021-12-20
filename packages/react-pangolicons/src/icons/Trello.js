
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
          class="pangolicons pangolicons-trello {className}"
        >
          <rect  x="4.04" y="2" width="16.18" height="20"/><rect  x="7.27" y="4.94" width="3.53" height="14.12"/><rect  x="13.74" y="4.94" width="3.53" height="7.06"/>
        </svg>
      );
    };
    
	