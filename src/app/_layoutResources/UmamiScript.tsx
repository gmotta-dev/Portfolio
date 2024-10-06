import Script from "next/script";

export default function UmamiScript() {
  if(process.env.NODE_ENV !== "production") return null;

  return <Script defer src="https://umami.gmotta.com/script.js" data-website-id="f59a7781-5ffc-40ee-84b4-9876fd4ff791" />;
}
