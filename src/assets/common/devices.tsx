import * as React from "react";
const DevicesSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    fill="currentColor"
    fillRule="evenodd"
    viewBox="0 0 30 30"
    {...props}
  >
    <path d="M4 11a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1zm3.5 11c-.67 0-1.236.452-1.426 1.063l-2.656.443A.5.5 0 0 0 3 24v3a.5.5 0 0 0 .418.494l2.656.443C6.264 28.547 6.83 29 7.5 29h4c.67 0 1.236-.452 1.426-1.063l2.656-.443A.5.5 0 0 0 16 27v-3a.5.5 0 0 0-.418-.494l-2.656-.444A1.505 1.505 0 0 0 11.5 22zm0 1h4c.286 0 .5.214.5.5v4c0 .286-.214.5-.5.5h-4a.488.488 0 0 1-.5-.5v-4c0-.286.214-.5.5-.5zM6 24.092v2.816l-2-.332v-2.152zm7 0 2 .332v2.152l-2 .332zM5.5 3a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h11c.67 0 .654-1 0-1H6V4h18v4.5c0 .66 1 .67 1 0v-5a.5.5 0 0 0-.5-.5zm-4-2C.678 1 0 1.678 0 2.5v17c0 .822.678 1.5 1.5 1.5h15c.67 0 .66-1 0-1h-15a.488.488 0 0 1-.5-.5v-17c0-.286.214-.5.5-.5h24c.286 0 .5.214.5.5v6c0 .677 1 .66 1 0v-6c0-.822-.678-1.5-1.5-1.5zm21 11h3a.499.499 0 1 1 0 1h-3a.499.499 0 1 1 0-1zm-3-2c-.822 0-1.5.678-1.5 1.5v16c0 .822.678 1.5 1.5 1.5h9c.822 0 1.5-.678 1.5-1.5v-16c0-.822-.678-1.5-1.5-1.5zm0 1h9c.286 0 .5.214.5.5v16c0 .286-.214.5-.5.5h-9a.488.488 0 0 1-.5-.5v-16c0-.286.214-.5.5-.5zM24 25c.554 0 1 .446 1 1s-.446 1-1 1-1-.446-1-1 .446-1 1-1z" />
  </svg>
);
export default DevicesSVG;
