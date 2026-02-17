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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
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
  username: z.string().min(2, "Username must be at least 2 Characters Long"),
  // <== EMAIL ==>
  email: z.email("Invalid Email Address"),
  // <== PHONE ==>
  phone: z
    .string()
    .min(10, "Phone number must be between 7 and 12 digits")
    .max(15, "Phone number must be between 7 and 12 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
  // <== LOCATION ==>
  location: z.string().min(1, "Location is Required"),
  // <== ROLE ==>
  role: z.enum(["Admin", "User"], "Role is Required"),
});

// <== EDIT USER COMPONENT ==>
const EditUser = (): JSX.Element => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "iAhmedAbbas7",
      email: "iahmedabbas7@gamil.com",
      phone: "0311-6474871",
      location: "Okara, Punjab, Pakistan",
      role: "Admin",
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
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Your Profile Username</FormDescription>
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
                {/* LOCATION */}
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>Location</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your Location Visible to the Public
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* ROLE */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>Role</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="User">User</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        Only Verified Users can be Admin
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
