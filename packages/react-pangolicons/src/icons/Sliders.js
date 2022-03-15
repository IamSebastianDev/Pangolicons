
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
          className={['pangolicons pangolicons-sliders', className].join(" ")}
        >
          <path  d="M12,17.12v4.32m0-4.32,0-14.57V13.67m7.78-3.33v11.11m0-11.75,0-2.57,0-4.57V7.12m-15.56,3.77v10.56m0-10.56,0-8.33v5.56m-2.22,2.78H6.44m3.33,6.23h4.44m3.33-10h4.44"/>
        </svg>
      );
    };
    
	