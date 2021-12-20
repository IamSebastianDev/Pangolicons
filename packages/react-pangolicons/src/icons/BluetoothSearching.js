
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
          class="pangolicons pangolicons-bluetoothSearching {className}"
        >
          <polygon  points="9.82 22 9.82 12 9.82 2 17.77 7 9.82 12 17.77 17 9.82 22"/><polyline  points="4.32 15.38 9.82 12 17.77 7"/><polyline  points="4.32 8.25 9.82 12 17.77 17"/><path  d="M19.63,9.68a3.12,3.12,0,0,1,1,2.32,3.15,3.15,0,0,1-1.1,2.39"/><circle  cx="16.57" cy="12" r="0.31"/>
        </svg>
      );
    };
    
	