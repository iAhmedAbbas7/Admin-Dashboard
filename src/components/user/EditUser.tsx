// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { z } from "zod";
import { JSX } from "react";
import { Input } from "../ui/input";
import { Edit } from "lucide-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { ScrollArea } from "../ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";

// <== FORM SCHEMA ==>
const formSchema = z.object({
  // <== USERNAME ==>
  fullName: z.string().min(2, "FullName must be at least 2 Characters Long"),
  // <== EMAIL ==>
  email: z.email("Invalid Email Address"),
  // <== PHONE ==>
  phone: z
    .string()
    .min(10, "Phone number must be between 7 and 12 digits")
    .max(15, "Phone number must be between 7 and 12 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  // <== ADDRESS ==>
  address: z.string().min(1, "Address is Required"),
  // <== CITY ==>
  city: z.string().min(1, "City is Required"),
});

// <== EDIT USER COMPONENT ==>
const EditUser = (): JSX.Element => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "Ahmed Abbas",
      email: "iahmedabbas7@gamil.com",
      phone: "0311-6474871",
      address: "123 Main Street",
      city: "Okara, Punjab",
    },
  });
  // RETURNING THE EDIT USER CONTENT
  return (
    // MAIN CONTAINER
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="flex items-center gap-2 w-full mb-2">
          <Edit />
          <span>Edit User</span>
        </SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <ScrollArea>
              <form
                className="space-y-4 w-full"
                onSubmit={form.handleSubmit(() => {})}
              >
                {/* USERNAME */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>FullName</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Your Profile FullName</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* EMAIL */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Only Admin can see your Email
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* PHONE */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Only Admin can see your Phone Number
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* ADDRESS */}
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your Address Visible to the Public
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* CITY */}
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>City</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Your city will be visible to the public
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* SUBMIT BUTTON */}
                <Button type="submit">Submit</Button>
              </form>
            </ScrollArea>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

// <== EXPORTING THE EDIT USER COMPONENT ==>
export default EditUser;
