
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
          className={['pangolicons pangolicons-snpachat', className].join(" ")}
        >
          <path  d="M21.65,18c-1,.54-1.61.48-2.11.8s-.17.87-.48,1.08-1.51,0-2.95.46c-1.2.39-1.95,1.53-4.11,1.53s-2.89-1.13-4.11-1.53c-1.45-.48-2.57-.2-2.95-.46s-.06-.8-.48-1.08-1.15-.26-2.11-.8c-.62-.34-.27-.55-.06-.65,3.5-1.69,4.06-4.31,4.09-4.51a.62.62,0,0,0-.2-.66c-.25-.23-1.36-.92-1.67-1.14-.51-.35-.73-.71-.57-1.15a.69.69,0,0,1,.7-.41l.27,0c.56.12,1.11.4,1.42.48h.12c.17,0,.22-.08.21-.27a21.13,21.13,0,0,1,0-2.93,4.64,4.64,0,0,1,1.21-3A5.42,5.42,0,0,1,12,2.12a5.42,5.42,0,0,1,4.15,1.73,4.65,4.65,0,0,1,1.21,3,21,21,0,0,1,0,2.92c0,.2,0,.28.21.28l.12,0c.31-.07.86-.36,1.42-.48l.27,0a.7.7,0,0,1,.7.42c.16.44-.06.79-.57,1.15-.31.21-1.42.9-1.67,1.13a.62.62,0,0,0-.2.66c0,.2.59,2.82,4.09,4.52C21.92,17.47,22.27,17.68,21.65,18Z"/>
        </svg>
      );
    };
    
	