
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
          className={['pangolicons pangolicons-archive', className].join(" ")}
        >
          <path  d="M21.01,7.62H2.99c-.55,0-.99-.44-.99-.99v-1.77c0-.55,.44-.99,.99-.99H21.01c.55,0,.99,.44,.99,.99v1.77c0,.55-.44,.99-.99,.99ZM3.88,7.62v10.52c0,1.09,.89,1.98,1.98,1.98h12.29c1.09,0,1.98-.89,1.98-1.98V7.62m-11.88,3.75h7.5"/>
        </svg>
      );
    };
    
	