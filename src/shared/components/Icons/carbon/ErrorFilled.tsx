export default function ErrorFilled(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" viewBox="0 0 32 32" className={props.className}>
      <path
        fill="currentColor"
        d="M16 2A13.914 13.914 0 0 0 2 16a13.914 13.914 0 0 0 14 14 13.915 13.915 0 0 0 14-14A13.914 13.914 0 0 0 16 2Zm5.445 21L9 10.556 10.556 9 23 21.445 21.445 23Z"
      />
    </svg>
  );
}
