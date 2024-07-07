"use client";

import { useForm } from "@/client/hooks/useForm";
import Button from "@/shared/components/Clickables/Button";
import contactFormSchema from "./schema";
import { TextInput, TextArea } from "@/shared/components/Inputs";
import { Toast, useToast } from "@/shared/components/Toast";
import contactAction from "./action";
import ArrowRight from "@/shared/components/Icons/carbon/ArrowRight";

export default function Form() {
  const toastStates = useToast();
  const formStates = useForm({ schema: contactFormSchema });

  const submit = async () => {
    const res = await contactAction(formStates.formValues);
    console.log(res);
    toastStates.addToast({...res.toast, time: 100000});
  };

  return (
    <form className="mt-4 flex w-full max-w-[600px] flex-col gap-4" onSubmit={formStates.handleSubmit(submit)}>
      <Toast {...toastStates} />
      <TextInput placeholder="Enter your email" {...formStates.register("email")} />
      <TextArea placeholder="Enter your message" {...formStates.register("message")} />
      <Button stylization={{ theme: "primary", icon: { el: ArrowRight, loading: formStates.loading } }} className="w-full">
        Send
      </Button>
    </form>
  );
}
