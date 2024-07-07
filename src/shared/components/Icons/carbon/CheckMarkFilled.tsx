export default function CheckmarkFilled(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" viewBox="0 0 32 32" className={props.className}>
      <path fill="currentColor" d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28Zm-2 19.59-5-5L10.59 15 14 18.41 21.41 11l1.596 1.586L14 21.59Z" />
    </svg>
  );
}
