import React from "react";

export const QrIcon = ({
  color = "white",
  size = "32",
}: {
  color?: string;
  size?: string | number;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16V20C2 21.1046 2.89543 22 4 22H8M2 8V4C2 2.89543 2.89543 2 4 2H8M22 8V4C22 2.89543 21.1046 2 20 2H16M22 16V20C22 21.1046 21.1046 22 20 22H16"
        stroke={color}
      />
      <path d="M6 6H10V10H6V6Z" stroke={color} />
      <path d="M14 6H18V10H14V6Z" stroke={color} />
      <path d="M6 14H10V18H6V14Z" stroke={color} />
      <path d="M18 14H14V18" stroke={color} />
      <path d="M18 18H18.01" stroke={color} />
    </svg>
  );
};
