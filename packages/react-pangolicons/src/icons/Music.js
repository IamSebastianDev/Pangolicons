
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
          className={['pangolicons pangolicons-music', className].join(" ")}
        >
          <path  d="M7.97,19.12c0,1.59-1.29,2.88-2.88,2.88s-2.88-1.29-2.88-2.88,1.29-2.88,2.88-2.88,2.88,1.29,2.88,2.88Zm13.83-2.4V2L7.97,4.57v14.72m10.95-5.58c-1.59,0-2.88,1.29-2.88,2.88s1.29,2.88,2.88,2.88,2.88-1.29,2.88-2.88-1.29-2.88-2.88-2.88Z"/>
        </svg>
      );
    };
    
	