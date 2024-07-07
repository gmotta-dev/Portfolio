"use client";

import { DeepPartial } from "@/shared/util/types/DeepPartial";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { SomeZodObject, z, ZodDiscriminatedUnion, ZodFormattedError, ZodIntersection, ZodSchema } from "zod";


/**
 * My custom version of a React Hook Form
 * It allows you to validate a form with Zod and handle the form values and errors.
 * It also allows you to register fields with the correct types based on the schema and handle their onChange event.
 */
export const useForm = <T extends SomeZodObject | ZodIntersection<any, any> | ZodDiscriminatedUnion<any, any>>(props?: UseFormStatesProps<T>) => {
  const [formValues, setFormValues] = useState<InferSchemaType<T>>((props?.defaultValues as z.infer<T>) || ({} as z.infer<T>));
  const [errors, setErrors] = useState<ZodFormattedError<z.infer<T>>>({} as ZodFormattedError<z.infer<T>>);

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleValuesValidation = async (formData: any, cb?: (parsedFormData: any) => void | Promise<void>) => {
    if (props?.schema) {
      const result = props.schema.safeParse(formData);

      console.log(result);

      if (result.success) {
        setErrors({} as ZodFormattedError<z.infer<T>>);
        setHasSubmitted(false);
        if (cb) await cb(result.data);
      } else if (result.error) {
        setErrors(result.error.format() as ZodFormattedError<z.infer<T>>);
      }
    }
  };

  const register = (
    name: ExtractKeys<InferSchemaType<T>>,
    opt?: { type?: "text" | "select" | "radio" | "textarea"; onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void },
  ) => {
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newFormValues = { ...formValues, [name]: e.target.value };
      setFormValues(newFormValues);
      if (opt?.onChange) opt.onChange(e);
    };

    const value = opt?.type !== "radio" ? formValues[name] || "" : undefined;

    return { onChange, name: name, error: (errors as any)?.[name]?._errors[0], value: value as string };
  };

  const handleSubmit = (mySubmit: (formVal: InferSchemaType<T>) => void | Promise<void>) => async (e?: FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    setLoading(true);
    setHasSubmitted(true);

    await handleValuesValidation(formValues, mySubmit);

    setLoading(false);
  };

  useEffect(() => {
    if (hasSubmitted) handleValuesValidation(formValues);
  }, [hasSubmitted, formValues]);

  return { register, formValues, loading, setHasSubmitted, setLoading, handleSubmit, errors, setFormValues, setErrors };
};

export type InferSchemaType<T> = T extends ZodSchema<infer U> ? U : never;
export type ExtractKeys<T> = T extends T ? keyof T : never;

type UseFormStatesProps<T extends SomeZodObject | ZodIntersection<any, any> | ZodDiscriminatedUnion<any, any>> = { schema?: T; defaultValues?: DeepPartial<InferSchemaType<T>> };