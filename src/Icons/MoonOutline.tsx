import type { SVGProps } from "react";

const MoonOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0174 1.80157C5.37072 2.29221 1.75 6.22328 1.75 11C1.75 16.1086 5.89137 20.25 11 20.25C15.7767 20.25 19.7078 16.6293 20.1984 11.9826C18.8717 13.6669 16.8126 14.75 14.5 14.75C10.4959 14.75 7.25 11.5041 7.25 7.5C7.25 5.18738 8.33315 3.1283 10.0174 1.80157ZM0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C11.7166 0.25 12.0754 0.821258 12.1368 1.27627C12.196 1.71398 12.0342 2.27065 11.531 2.57467C9.86266 3.5828 8.75 5.41182 8.75 7.5C8.75 10.6756 11.3244 13.25 14.5 13.25C16.5882 13.25 18.4172 12.1373 19.4253 10.469C19.7293 9.96584 20.286 9.80404 20.7237 9.86316C21.1787 9.92461 21.75 10.2834 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11Z"
      fill="currentColor"
    />
  </svg>
);

export default MoonOutline;