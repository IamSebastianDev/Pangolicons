
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
          className={['pangolicons pangolicons-moonStylized', className].join(" ")}
        >
          <path  d="M21.96,11.29c.02,.23,.04,.47,.04,.71,0,5.52-4.48,10-10,10S2,17.52,2,12,6.48,2,12,2c.24,0,.47,.02,.71,.04-1.77,1.2-2.93,3.22-2.93,5.52,0,3.68,2.98,6.67,6.67,6.67,2.3,0,4.32-1.16,5.52-2.93Z"/>
        </svg>
      );
    };
    
	