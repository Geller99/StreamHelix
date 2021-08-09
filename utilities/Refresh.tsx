import Tippy from "@tippyjs/react";
import React from "react";


function Refresh() {
  return (
    <Tippy content='Refresh'>
      <svg
        width="24"
        height="24"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.65991 0.133949L0.160409 8.04243C-0.172101 8.35182 0.0468214 8.90848 0.501006 8.90848H2.3398L3.059 17.0875C3.1044 17.6038 3.53682 17.9999 4.05515 17.9999H13.9483C14.4667 17.9999 14.8991 17.6038 14.9445 17.0875L15.6637 8.90848H17.5C17.9542 8.90848 18.1731 8.35182 17.8406 8.04243L9.3411 0.133949C9.14915 -0.0446497 8.85185 -0.0446496 8.65991 0.133949ZM12.0001 13C12.0001 14.6568 10.6569 16 9.00005 16C7.3432 16 6.00005 14.6568 6.00005 13C6.00005 11.3431 7.3432 9.99998 9.00005 9.99998C10.6569 9.99998 12.0001 11.3431 12.0001 13Z"
          fill="rgba(255, 255, 255, 0.8)"
          // style="transition: fill 150ms ease 0s;"
        ></path>
      </svg>
    </Tippy>
  );
}

export default Refresh;
