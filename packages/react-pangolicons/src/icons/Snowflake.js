
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
          className={['pangolicons pangolicons-snowflake', className].join(" ")}
        >
          <path  d="M12,21.95V12m0,10v-.05m2.22-1.06l-2.22-2.22-2.22,2.22M12,2.05V12m0-10v.05m-2.22,1.06l2.22,2.22,2.22-2.22m7.73,8.89H12m10,0h-.05m-1.06-2.22l-2.22,2.22,2.22,2.22M2.05,12H12m-10,0h.05m1.06,2.22l2.22-2.22-2.22-2.22m8.89,2.22l4.71,4.71m2.37,2.37l-.03-.03M7.29,7.29l4.71,4.71M4.93,4.93l.03,.03m11.74,2.33l-4.71,4.71m7.07-7.07l-.03,.03M7.29,16.71l4.71-4.71m-7.07,7.07l.03-.03"/>
        </svg>
      );
    };
    
	