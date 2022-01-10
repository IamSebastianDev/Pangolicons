
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
          className={['pangolicons pangolicons-sunBig', className].join(" ")}
        >
          <circle  cx="12" cy="12" r="5"/><line  x1="12" y1="2" x2="12" y2="7"/><line  x1="22" y1="12" x2="17" y2="12"/><line  x1="12" y1="22" x2="12" y2="17"/><line  x1="2" y1="12" x2="7" y2="12"/><line  x1="4.93" y1="4.93" x2="8.46" y2="8.46"/><line  x1="19.07" y1="4.93" x2="15.54" y2="8.46"/><line  x1="19.07" y1="19.07" x2="15.54" y2="15.54"/><line  x1="4.93" y1="19.07" x2="8.46" y2="15.54"/>
        </svg>
      );
    };
    
	