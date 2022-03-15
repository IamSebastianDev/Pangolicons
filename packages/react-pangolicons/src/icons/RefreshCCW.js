
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
          className={['pangolicons pangolicons-refreshCCW', className].join(" ")}
        >
          <path  d="M20.23,13.85c.17-.65,.26-1.33,.26-2.04,0-4.5-3.65-8.15-8.15-8.15-2.25,0-4.29,.91-5.76,2.39m.97-4.06l-.97,4.06m.06,0l3.83,1.39m-6.7,2.69c-.17,.65-.26,1.33-.26,2.04,0,4.5,3.65,8.15,8.15,8.15,2.25,0,4.29-.91,5.76-2.39m-.97,4.06l.97-4.06m-.06,0l-3.83-1.39"/>
        </svg>
      );
    };
    
	