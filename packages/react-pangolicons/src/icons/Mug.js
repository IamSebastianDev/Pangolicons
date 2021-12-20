
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
          class="pangolicons pangolicons-mug {className}"
        >
          <path  d="M17.19,2V15.75c0,3.44-2.25,6.25-5,6.25H7.37c-2.75,0-5-2.81-5-6.25V2M17.19,14.24a1.88,1.88,0,0,0,1.87,1.88h.69a1.88,1.88,0,0,0,1.88-1.88V8.73a1.88,1.88,0,0,0-1.88-1.87h-.69a1.87,1.87,0,0,0-1.87,1.87"/>
        </svg>
      );
    };
    
	