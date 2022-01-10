
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
          className={['pangolicons pangolicons-sunSmall', className].join(" ")}
        >
          <circle  cx="12" cy="12" r="4.44"/><line  x1="12" y1="2" x2="12" y2="4.22"/><line  x1="22" y1="12" x2="19.78" y2="12"/><line  x1="12" y1="22" x2="12" y2="19.78"/><line  x1="2" y1="12" x2="4.22" y2="12"/><line  x1="5.33" y1="5.33" x2="6.64" y2="6.64"/><line  x1="18.67" y1="5.33" x2="17.56" y2="6.44"/><line  x1="18.67" y1="18.67" x2="17.56" y2="17.56"/><line  x1="5.33" y1="18.67" x2="6.64" y2="17.36"/>
        </svg>
      );
    };
    
	