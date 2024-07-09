export default function Badge(props: { text: string, el: 'span' | 'li' | 'div' }) {
  return <props.el className="text-mostard-400  text-xs bg-mostard-400/10 py-1 px-3">{props.text}</props.el>;
}

