import React from 'react';

export function Triangle(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.76795 15C7.53775 16.3333 9.46225 16.3333 10.2321 15L16.7272 3.75C17.497 2.41667 16.5348 0.75 14.9952 0.75H2.00481C0.46521 0.75 -0.497042 2.41667 0.272758 3.75L6.76795 15Z"
        fill="#C0303A"
      />
    </svg>
  );
}
