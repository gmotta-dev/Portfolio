import React, { ComponentPropsWithoutRef } from "react";
import { twColors } from "../../../../tailwind.config";
import MyLogo from "../Icons/MyLogo";

export default function EmailTemplate(props: { children: React.ReactNode } & ComponentPropsWithoutRef<"div">) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div
          style={{
            width: "100%",
            maxWidth: "464px",
            borderRadius: "0.5rem",
            border: "1px solid #d1d5db",
            backgroundColor: twColors.neutral[900],
            padding: "48px 0px",
            color: twColors.neutral[50],
          }}>
          <center style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem"}}>
            <img src={process.env.NEXT_PUBLIC_CLOUDFRONT_URL + "/images/my-logo-light.png"} alt="logo" />
          </center>
          <div style={{ marginTop: "2rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", ...props.style }}>{props.children}</div>
        </div>
      </body>
    </html>
  );
}
