"use client";

import { useForm } from "@/client/hooks/useForm";
import Button from "@/shared/components/Clickables/Button";
import contactFormSchema from "./schema";
import { TextInput, TextArea } from "@/shared/components/Inputs";
import { Toast, useToast } from "@/shared/components/Toast";
import contactAction from "./action";
import ArrowRight from "@/shared/components/Icons/carbon/ArrowRight";
import { Fragment } from "react";
import useDrawer from "@/shared/components/Drawer/useDrawer";
import Email from "@/shared/components/Icons/Email";
import { Drawer } from "@/shared/components/Drawer/Drawer";

export default function Form() {
  const drawerStates = useDrawer();

  return (
    <Fragment>
      <Button onClick={() => drawerStates.setDrawerContent(<DrawerForm />)} stylization={{ theme: "primary", icon: { el: Email } }} className="w-full max-w-[312px]">
        Send me a message
      </Button>

      <Drawer {...drawerStates} classNames={{ drawer: "flex justify-center items-center h-[450px]" }} />
    </Fragment>
  );
}

const DrawerForm = () => {
  const formStates = useForm({ schema: contactFormSchema });
  const toastStates = useToast();

  const submit = async () => {
    const res = await contactAction(formStates.formValues);
    console.log(res);
    toastStates.addToast({ ...res.toast, time: 100000 });
  };

  return (
    <form className="flex w-full max-w-[600px] flex-col gap-4" onSubmit={formStates.handleSubmit(submit)}>
      <Toast {...toastStates} />
      <TextInput placeholder="Enter your email" {...formStates.register("email")} />
      <TextArea placeholder="Enter your message" {...formStates.register("message")} />
      <Button stylization={{ theme: "primary", icon: { el: ArrowRight, loading: formStates.loading } }} className="w-full">
        Send
      </Button>
    </form>
  );
};
