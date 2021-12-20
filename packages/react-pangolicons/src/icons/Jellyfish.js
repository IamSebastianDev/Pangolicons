
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
          class="pangolicons pangolicons-jellyfish {className}"
        >
          <path  d="M19.06,9.06a7.06,7.06,0,1,0-14.12,0Z"/><path  d="M12.13,12.59a7.88,7.88,0,0,0-.57,4.7C12.13,19.65,10,22,10,22"/><path  d="M15.52,12.59s1.78,2.35,1.15,4.7S18.38,22,18.38,22"/><path  d="M5.63,21.91a7.88,7.88,0,0,0,.57-4.7c-.57-2.36,1.56-4.71,1.56-4.71"/>
        </svg>
      );
    };
    
	