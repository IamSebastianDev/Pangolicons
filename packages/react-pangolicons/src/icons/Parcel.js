
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
          className={['pangolicons pangolicons-parcel', className].join(" ")}
        >
          <path  d="M12,2l10,4v12l-10,4L2,18V6L7.64,3.74l4.36-1.74ZM2,6l10,4,10-4m-10,4v12m5-14L7.04,3.98"/>
        </svg>
      );
    };
    
	