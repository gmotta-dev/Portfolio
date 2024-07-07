import { Metadata } from "next";

const buildMetadata = (props: TMetadata) => {
  const chosenImg = props.loaderOG || "SEO-main.webp";
  const loader = process.env.NEXT_PUBLIC_CLOUDFRONT_URL;

  const images = [{ url: `${loader}/images/${chosenImg}`, width: 1000, height: 800 }];
  const description = props.description;

  const metadata: Metadata = {
    title: props.title,
    description,
    openGraph: { images, description },
    twitter: { images, description },
  };

  return metadata;
};

export default buildMetadata;
export type TMetadata = { title: string; description: string; loaderOG?: string };
