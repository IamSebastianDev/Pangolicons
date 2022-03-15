
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
          className={['pangolicons pangolicons-cloudSun', className].join(" ")}
        >
          <path  d="M2,16.85c0-3.4,2.76-6.16,6.16-6.16,2.42,0,4.51,1.4,5.52,3.44,.51-.23,1.07-.36,1.67-.36,2.27,0,4.1,1.84,4.1,4.1s-1.84,4.1-4.1,4.1H4.75c-1.66-1.1-2.75-2.99-2.75-5.13Zm15.16-6.11c0-2.14-1.74-3.88-3.88-3.88-1.07,0-2.04,.43-2.74,1.14m2.74-5.98v1.94m8.72,6.78h-1.94M7.47,4.92l1.14,1.14m10.49-1.14l-.97,.97"/>
        </svg>
      );
    };
    
	