
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
          className={['pangolicons pangolicons-airplay', className].join(" ")}
        >
          <path  d="M3.74,16.06c-.96,0-1.74-.78-1.74-1.74V4.05c0-.96,.78-1.74,1.74-1.74H20.26c.96,0,1.74,.78,1.74,1.74V14.32c0,.96-.78,1.74-1.74,1.74m-8.26-1.88l-6.5,7.5h12.99l-6.5-7.5Z"/>
        </svg>
      );
    };
    
	