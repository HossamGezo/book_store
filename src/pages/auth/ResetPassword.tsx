// Libraries
import { Link } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Components
import InputField from "@/components/ui/inputs/InputField";
import Button from "@/components/ui/buttons/Button";

// Register Schema
const ResetEmailSchema = z.object({
  email: z.string().email({ message: "Invalid Email Address" }).trim(),
});
type ResetEmailSchemaType = z.infer<typeof ResetEmailSchema>;

// Main Component
const ResetPassword = () => {
  // React Hook Form Logic
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetEmailSchemaType>({
    mode: "onChange",
    resolver: zodResolver(ResetEmailSchema),
  });
  // OnSubmit Function
  const onSubmit: SubmitHandler<ResetEmailSchemaType> = (data) => {
    console.log(data);
    reset();
  };

  // Return JSX
  return (
    <div className="custom-container flex items-center justify-center flex-col gap-5 py-5 min-h-[calc(100vh-73.88px)]">
      <h1 className="shadow-lg text-2xl text-primary mb-5 font-jetbrains p-5 bg-white rounded-lg">
        Enter your email
      </h1>
      <form
        className="shadow-lg flex flex-col gap-5 bg-blue-100/50 py-5 px-1.5 sm:p-10 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          register={register}
          error={errors.email?.message}
          autoComplete="email"
        />
        <Button type="submit" size="sm">
          Submit
        </Button>
      </form>
      <span className="text-lg font-light text-gray-500">
        Back to
        <Link
          to="/login"
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 ml-1"
        >
          Login
        </Link>
      </span>
    </div>
  );
};
export default ResetPassword;
