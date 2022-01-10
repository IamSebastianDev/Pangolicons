
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
          className={['pangolicons pangolicons-library', className].join(" ")}
        >
          <line  x1="5.13" y1="2" x2="5.13" y2="22"/><line  x1="8.88" y1="22" x2="8.88" y2="7"/><line  x1="12.63" y1="22" x2="12.63" y2="4.5"/><line  x1="18.88" y1="22" x2="16.38" y2="7"/>
        </svg>
      );
    };
    
	