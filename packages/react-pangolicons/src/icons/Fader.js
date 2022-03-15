
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
          strokeWidth={strokeWidth}
          strokeLinecap={linecap}
          strokeLinejoin={linejoin}
          className={['pangolicons pangolicons-fader', className].join(" ")}
        >
          <path  d="M12,10.36v11.64m0-11.64,0-3.75,0-4.61V6.61m3.75,0h-7.5v3.75h7.5v-3.75Z"/>
        </svg>
      );
    };
    
	