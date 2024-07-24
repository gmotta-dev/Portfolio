"use client";

import { useForm } from "@/client/hooks/useForm";
import Button from "@/shared/components/Clickables/Button";
import contactFormSchema from "./schema";
import { TextInput, TextArea } from "@/shared/components/Inputs";
import { Toast, useToast } from "@/shared/components/Toast";
import contactAction from "./action";
import ArrowRight from "@/shared/components/Icons/carbon/ArrowRight";
import { Fragment, useRef } from "react";
import useDrawer from "@/shared/components/Drawer/useDrawer";
import Email from "@/shared/components/Icons/Email";
import { Drawer } from "@/shared/components/Drawer/Drawer";

export default function Form() {
  const toastStates = useToast();
  const drawerStates = useDrawer();

  return (
    <Fragment>
      <Toast {...toastStates} />
      <Button
        onClick={() => drawerStates.setDrawerContent(<DrawerForm setDrawerContent={drawerStates.setDrawerContent} toastStates={toastStates} />)}
        stylization={{ theme: "primary", icon: { el: Email } }}
        className="w-full max-w-[312px]">
        Send me a message
      </Button>

      <Drawer {...drawerStates} classNames={{ drawer: "flex justify-center items-center h-[450px]" }} />
    </Fragment>
  );
}

const DrawerForm = (props: { setDrawerContent: (content: React.ReactNode) => void; toastStates: ReturnType<typeof useToast> }) => {
  const formStates = useForm({ schema: contactFormSchema });

  const submit = async () => {
    const res = await contactAction(formStates.formValues);
    console.log(res);
    props.setDrawerContent(null);
    props.toastStates.addToast({ ...res.toast, time: 100000 });
  };

  return (
    <form className="flex w-full max-w-[600px] flex-col gap-4" onSubmit={formStates.handleSubmit(submit)}>
      <TextInput placeholder="Enter your email" {...formStates.register("email")} />
      <TextArea placeholder="Enter your message" {...formStates.register("message")} />
      <Button stylization={{ theme: "primary", icon: { el: ArrowRight, loading: formStates.loading } }} className="w-full">
        Send
      </Button>
    </form>
  );
};
