import ContentWrapper from "@/shared/components/ContentWrapper";
import Form from "./Form/Form";

export default function Contact() {
  return (
    <ContentWrapper element="section" id="contact" className="relative mt-24 bg-cover lg:mt-48">
      <div className="relative mx-auto flex max-w-[808px] flex-col items-center gap-4 border border-neutral-700 bg-neutral-950 py-16 md:flex-row md:justify-between md:px-12">
        <h5 className="text-center font-bebas-neue text-2xl md:max-w-[312px] md:text-left md:text-4xl">
          GOT ANY IDEAS? <br /> OR JUST WANT TO CHAT?
        </h5>
        <Form />

        <div className="absolute left-1/2 top-1/2 z-[-1] -translate-x-1/2 -translate-y-1/2 ">
          <span className="w-screen block bg-gradient-to-r from-neutral-950 via-neutral-600 to-neutral-950 h-[1px]"/>
        </div>
      </div>
    </ContentWrapper>
  );
}
