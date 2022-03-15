
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
          className={['pangolicons pangolicons-ghost', className].join(" ")}
        >
          <path  d="M9.29,22l-2.5-1.25-2.29,1.25V9.5c0-4.14,3.36-7.5,7.5-7.5s7.5,3.36,7.5,7.5v12.5l-2.29-1.25-2.5,1.25-2.71-1.3-2.71,1.3ZM14.33,7.72c-.16,0-.29,.13-.29,.29s.13,.29,.29,.29,.29-.13,.29-.29-.13-.29-.29-.29Zm-4.71,0c-.16,0-.29,.13-.29,.29s.13,.29,.29,.29,.29-.13,.29-.29-.13-.29-.29-.29Z"/>
        </svg>
      );
    };
    
	