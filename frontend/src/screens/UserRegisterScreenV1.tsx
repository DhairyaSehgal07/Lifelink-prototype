import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import Navbar from "@/myComponents/Navbar";
// import Footer from "../../mycomponents/Footer";
import { Link } from "react-router-dom";

const formSchema = z.object({
  userName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  emailAddress: z.string().email(),
  password: z.string().min(3),
  occupation: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  address: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fatherName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string(),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  gender: z.enum(["male", "female"], {
    required_error: "You need to select a gender.",
  }),
  bloodGroup: z.string({
    required_error: "Please select a blood group.",
  }),
});

export default function LoginScreenV1() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      emailAddress: "",
      password: "",
      occupation: "",
      address: "",
      fatherName: "",
    },
    mode: "onSubmit", // Only validate on form submission
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <>
      <Navbar />
      <Link to="/login">
        <h1 className="m-14 mb-0 ml-20 rounded-[0.8rem]  py-[1.8rem] text-[2.4rem] sm:m-0 sm:ml-32 sm:mt-16 lg:ml-56 ">
          Go Back
        </h1>
      </Link>
      <main className="flex  flex-grow flex-col items-center  justify-center p-20  ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex w-full max-w-3xl flex-col gap-8  border  p-12 shadow-xl"
          >
            <h1 className="text-bold mb-3 text-[3.6rem] text-foreground">
              Register
            </h1>
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        className="py-[2rem] text-2xl"
                        type="input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-2xl" />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                      Mobile Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[2rem] text-2xl"
                        placeholder="Mobile Number"
                        type="input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-2xl" />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[2rem] text-2xl"
                        placeholder="Email address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-2xl" />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[2rem] text-2xl"
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-2xl" />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  {/* className="space-y-3" */}
                  <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                    Gender
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row gap-6"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            className="h-8 w-8 rounded-full "
                            value="male"
                          />
                        </FormControl>
                        <FormLabel className="text-3xl font-normal">
                          Male
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            className="h-8 w-8 rounded-full"
                            value="female"
                          />
                        </FormControl>
                        <FormLabel className="text-3xl font-normal">
                          Female
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                    Date of Birth
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "h-16 w-[240px] pl-3 text-left text-2xl font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-6 w-6 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="h-auto w-auto p-4 text-3xl" // Adjusted padding for more space
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bloodGroup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                    Blood Group
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="text-2xl">
                        <SelectValue placeholder="Select your blood group" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem className="text-2xl" value="A+">
                        A+
                      </SelectItem>
                      <SelectItem className="text-2xl" value="A-">
                        A-
                      </SelectItem>
                      <SelectItem className="text-2xl" value="B+">
                        B+
                      </SelectItem>
                      <SelectItem className="text-2xl" value="B-">
                        B-
                      </SelectItem>
                      <SelectItem className="text-2xl" value="AB+">
                        AB+
                      </SelectItem>
                      <SelectItem className="text-2xl" value="AB-">
                        AB-
                      </SelectItem>
                      <SelectItem className="text-2xl" value="O+">
                        O+
                      </SelectItem>
                      <SelectItem className="text-2xl" value="O-">
                        O-
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {/* <FormDescription>
                Select your blood group
              </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                      Occupation
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[2rem] text-2xl"
                        placeholder="Occupation"
                        type="input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-2xl" />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                      Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[2rem] text-2xl"
                        placeholder="Address"
                        type="input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-2xl" />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="fatherName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-3xl leading-[1.8] tracking-wide">
                      Father's Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[2rem] text-2xl"
                        placeholder="Father's Name"
                        type="input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-2xl" />
                  </FormItem>
                );
              }}
            />

            <Button
              type="submit"
              className="w-[25%] rounded-[0.8rem] py-[1.8rem] text-3xl"
            >
              Register
            </Button>

            <div className="mt-2">
              <p className="m-1 text-3xl font-medium">
                Already got an account?
              </p>
              <Link to="/Login">
                <h1 className="text-2xl">Login</h1>
              </Link>

              {/* <AlertDialog>
                <AlertDialogTrigger className="text-3xl">
                  Register
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-5xl">
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-4xl">
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="p-8 text-3xl">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="p-8 text-3xl">
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog> */}
            </div>
          </form>
        </Form>
      </main>
      {/* <Footer /> */}
    </>
  );
}
