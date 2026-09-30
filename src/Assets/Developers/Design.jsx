import React from "react";
import iconsCSS from "./icon.module.css";

export default function Design() {
  return (
    <div>
      <svg
        className={iconsCSS.design}
        width="77"
        height="116"
        viewBox="0 0 77 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.25 115.5C29.876 115.5 38.5 106.876 38.5 96.25V77H19.25C8.624 77 0 85.624 0 96.25C0 106.876 8.624 115.5 19.25 115.5Z"
          fill="#0ACF83"
        />
        <path
          d="M0 57.75C0 47.124 8.624 38.5 19.25 38.5H38.5V77H19.25C8.624 77 0 68.376 0 57.75Z"
          fill="#A259FF"
        />
        <path
          d="M0 19.25C0 8.624 8.624 0 19.25 0H38.5V38.5H19.25C8.624 38.5 0 29.876 0 19.25Z"
          fill="#F24E1E"
        />
        <path
          d="M38.5 0H57.75C68.376 0 77 8.624 77 19.25C77 29.876 68.376 38.5 57.75 38.5H38.5V0Z"
          fill="#FF7262"
        />
        <path
          d="M77 57.75C77 68.376 68.376 77 57.75 77C47.124 77 38.5 68.376 38.5 57.75C38.5 47.124 47.124 38.5 57.75 38.5C68.376 38.5 77 47.124 77 57.75Z"
          fill="#1ABCFE"
        />
      </svg>
    </div>
  );
}
