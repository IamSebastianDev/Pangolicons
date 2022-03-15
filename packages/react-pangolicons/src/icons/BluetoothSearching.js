
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
          className={['pangolicons pangolicons-bluetoothSearching', className].join(" ")}
        >
          <path  d="M9.82,22V2l7.94,5-7.94,5,7.94,5-7.94,5Zm-5.5-6.62l5.5-3.38,7.94-5m-13.44,1.25l5.5,3.75,7.94,5m1.78-2.61c.68-.57,1.11-1.43,1.11-2.39s-.4-1.75-1.03-2.32m-3.06,2c-.17,0-.31,.14-.31,.31s.14,.31,.31,.31,.31-.14,.31-.31-.14-.31-.31-.31Z"/>
        </svg>
      );
    };
    
	