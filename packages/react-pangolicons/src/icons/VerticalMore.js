
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
          className={['pangolicons pangolicons-verticalMore', className].join(" ")}
        >
          <rect  x="11.09" y="2" width="1.82" height="1.82"/><rect  x="11.09" y="11.09" width="1.82" height="1.82"/><rect  x="11.09" y="20.18" width="1.82" height="1.82"/>
        </svg>
      );
    };
    
	