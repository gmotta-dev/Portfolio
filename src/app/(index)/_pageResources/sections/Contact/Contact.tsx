import ContentWrapper from "@/shared/components/ContentWrapper";
import Form from "./Form/Form";
import Bg from "@/app/(index)/Bg";

export default function Contact() {
  return (
    <section id="contact" className="relative mt-24 h-[640px] bg-cover lg:mt-32">
      <Bg />
      <ContentWrapper element="div" className="z-10 flex flex-col items-center pt-20">
        <header className="max-w-[716px] text-center">
          <h2 className="mb-3 font-bebas-neue text-5xl leading-[95%] tracking-wider md:text-[80px]">Building Tomorrow's Web Today.</h2>
          <p className="font-bebas-neue text-3xl tracking-wider text-neutral-500">Let's TALK</p>
        </header>
        <Form />
      </ContentWrapper>
    </section>
  );
}
