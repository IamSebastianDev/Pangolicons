
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
          class="pangolicons pangolicons-parcel {className}"
        >
          <path  d="M12,2,22,6V18L12,22,2,18V6L7.64,3.74ZM2,6l10,4L22,6M12,10V22M17,8,7,4"/>
        </svg>
      );
    };
    
	