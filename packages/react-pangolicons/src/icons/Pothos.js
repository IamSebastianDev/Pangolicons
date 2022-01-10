
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
          className={['pangolicons pangolicons-pothos', className].join(" ")}
        >
          <path  d="M12,2S-3.75,18,12,22V2s15.75,16,0,20"/><line  x1="9" y1="10" x2="9" y2="14"/><line  x1="14.86" y1="13" x2="14.86" y2="17.1"/>
        </svg>
      );
    };
    
	