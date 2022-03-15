
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
          className={['pangolicons pangolicons-tablet', className].join(" ")}
        >
          <path  d="M18.18,22H5.82c-1.08,0-1.95-.87-1.95-1.95V3.95c0-1.08,.87-1.95,1.95-1.95h12.35c1.08,0,1.95,.87,1.95,1.95V20.05c0,1.08-.87,1.95-1.95,1.95Zm-6.18-4.69c-.22,0-.41,.14-.41,.31s.18,.31,.41,.31,.41-.14,.41-.31-.18-.31-.41-.31Z"/>
        </svg>
      );
    };
    
	