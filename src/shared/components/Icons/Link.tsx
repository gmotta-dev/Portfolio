export default function Link(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" viewBox="0 0 32 32" className={props.className}>
      <path
        fill="currentColor"
        d="M29.25 6.76a6 6 0 0 0-8.5 0l1.42 1.42a4.01 4.01 0 0 1 5.67 5.67l-8 8a4.006 4.006 0 0 1-5.67-5.66l1.41-1.42-1.41-1.42-1.42 1.42a5.999 5.999 0 0 0 0 8.5A6 6 0 0 0 17 25a5.999 5.999 0 0 0 4.27-1.76l8-8a6 6 0 0 0-.02-8.48Z"
      />
      <path
        fill="currentColor"
        d="M4.19 24.82a4 4 0 0 1 0-5.67l8-8a4 4 0 0 1 5.67 0A3.941 3.941 0 0 1 19 14a4 4 0 0 1-1.17 2.85L15.71 19l1.42 1.42 2.12-2.12a6.018 6.018 0 1 0-8.51-8.51l-8 8a6 6 0 0 0 0 8.51A6 6 0 0 0 7 28a6.07 6.07 0 0 0 4.28-1.76l-1.42-1.42a4 4 0 0 1-5.67 0Z"
      />
    </svg>
  );
}
