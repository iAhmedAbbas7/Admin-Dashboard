// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import * as React from "react";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import type { Label as LabelPrimitive } from "radix-ui";

// <== FORM PROVIDER COMPONENT ==>
const Form = FormProvider;

// <== FORM FIELD TYPE ==>
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

// <== FORM FIELD CONTEXT ==>
const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

// <== FORM FIELD COMPONENT ==>
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  // RETURNING THE FORM FIELD
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

// <== USE FORM FIELD HOOK ==>
const useFormField = () => {
  // GETTING THE FORM FIELD CONTEXT
  const fieldContext = React.useContext(FormFieldContext);
  // GETTING THE FORM ITEM CONTEXT
  const itemContext = React.useContext(FormItemContext);
  // GETTING THE FORM CONTEXT
  const { getFieldState } = useFormContext();
  // GETTING THE FORM STATE
  const formState = useFormState({ name: fieldContext.name });
  // GETTING THE FIELD STATE
  const fieldState = getFieldState(fieldContext.name, formState);
  // IF NO CONTEXT IS AVAILABLE
  if (!fieldContext) {
    // THROWING AN ERROR
    throw new Error("useFormField should be used within <FormField>");
  }
  // GETTING THE FIELD ID
  const { id } = itemContext;
  // RETURNING THE FORM FIELD
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

// <== FORM ITEM CONTEXT TYPE ==>
type FormItemContextValue = {
  id: string;
};

// <== FORM ITEM CONTEXT ==>
const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

// <== FORM ITEM COMPONENT ==>
function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  // GENERATING A UNIQUE ID
  const id = React.useId();
  // RETURNING THE FORM ITEM
  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

// <== FORM LABEL COMPONENT ==>
function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  // GETTING THE FORM FIELD
  const { error, formItemId } = useFormField();
  // RETURNING THE FORM LABEL
  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

// <== FORM CONTROL COMPONENT ==>
function FormControl({ ...props }: React.ComponentProps<typeof Slot.Root>) {
  // GETTING THE FORM FIELD
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();
  // RETURNING THE FORM CONTROL
  return (
    <Slot.Root
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

// <== FORM DESCRIPTION COMPONENT ==>
function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  // GETTING THE FORM FIELD
  const { formDescriptionId } = useFormField();
  // RETURNING THE FORM DESCRIPTION
  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

// <== FORM MESSAGE COMPONENT ==>
function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  // GETTING THE FORM FIELD
  const { error, formMessageId } = useFormField();
  // RETURNING THE FORM MESSAGE
  const body = error ? String(error?.message ?? "") : props.children;
  // IF NO BODY
  if (!body) {
    // RETURNING NULL
    return null;
  }
  // RETURNING THE FORM MESSAGE
  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}

// <== EXPORTING THE FORM COMPONENTS ==>
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
