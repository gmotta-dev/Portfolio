export default function Warning(props: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 2C13.2311 2 10.5243 2.82109 8.22202 4.35943C5.91973 5.89777 4.12532 8.08427 3.06569 10.6424C2.00607 13.2006 1.72882 16.0155 2.26901 18.7313C2.80921 21.447 4.14258 23.9416 6.10051 25.8995C8.05845 27.8574 10.553 29.1908 13.2687 29.731C15.9845 30.2712 18.7994 29.9939 21.3576 28.9343C23.9157 27.8747 26.1022 26.0803 27.6406 23.778C29.1789 21.4757 30 18.7689 30 16C30 12.287 28.525 8.72601 25.8995 6.1005C23.274 3.475 19.713 2 16 2ZM16 28C13.6266 28 11.3066 27.2962 9.33316 25.9776C7.35977 24.6591 5.8217 22.7849 4.91345 20.5922C4.0052 18.3995 3.76756 15.9867 4.23058 13.6589C4.69361 11.3311 5.83649 9.19295 7.51472 7.51472C9.19296 5.83649 11.3312 4.6936 13.6589 4.23058C15.9867 3.76755 18.3995 4.00519 20.5922 4.91345C22.7849 5.8217 24.6591 7.35977 25.9776 9.33316C27.2962 11.3065 28 13.6266 28 16C28 19.1826 26.7357 22.2348 24.4853 24.4853C22.2348 26.7357 19.1826 28 16 28Z"
        fill="currentColor"
      />
      <path
        d="M15 8H17V19H15V8ZM16 22C15.7033 22 15.4133 22.088 15.1666 22.2528C14.92 22.4176 14.7277 22.6519 14.6142 22.926C14.5006 23.2001 14.4709 23.5017 14.5288 23.7926C14.5867 24.0836 14.7296 24.3509 14.9393 24.5607C15.1491 24.7704 15.4164 24.9133 15.7074 24.9712C15.9983 25.0291 16.2999 24.9993 16.574 24.8858C16.8481 24.7723 17.0824 24.58 17.2472 24.3334C17.412 24.0867 17.5 23.7967 17.5 23.5C17.5 23.1022 17.342 22.7206 17.0607 22.4393C16.7794 22.158 16.3978 22 16 22Z"
        fill="currentColor"
      />
    </svg>
  );
}