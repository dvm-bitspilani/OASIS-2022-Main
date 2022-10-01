import React from "react";

function MailIcon(props) {
  return (
    <a href={props.email}>
      <svg
        width="22"
        height="16"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.20041 8.02625L2.50825 3.84364V12.2089H17.5656C17.5656 13.1328 16.8166 13.8819 15.8926 13.8819H2.50825C2.04816 13.8819 1.65444 13.7182 1.32708 13.3909C0.999163 13.0629 0.835205 12.6689 0.835205 12.2089V2.1706C0.835205 1.71051 0.999163 1.31651 1.32708 0.988596C1.65444 0.661238 2.04816 0.497559 2.50825 0.497559H15.8926C16.3527 0.497559 16.7467 0.661238 17.0746 0.988596C17.4019 1.31651 17.5656 1.71051 17.5656 2.1706V12.2089H15.8926V3.84364L9.20041 8.02625ZM9.20041 6.3532L15.8926 2.1706H2.50825L9.20041 6.3532ZM2.50825 3.84364V2.1706V12.2089V7.18973V3.84364Z"
          fill="#8E8E8E"
        />
      </svg>
    </a>
  );
}

export default MailIcon;