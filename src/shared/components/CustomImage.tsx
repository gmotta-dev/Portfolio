import { ImgHTMLAttributes } from "react";

type TCustomImage = ImgHTMLAttributes<HTMLImageElement> & { loader?: boolean };

export default function CustomImage({ loader = true, ...props }: TCustomImage) {
  const src = loader ? process.env.NEXT_PUBLIC_CLOUDFRONT_URL + "/images/" + props.src : props.src;

  return <img loading="lazy" {...props} src={src} />;
}
