// Libraries
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { z } from "zod";

// Components
import InputField from "@/components/ui/inputs/InputField";
import Button from "@/components/ui/buttons/Button";
import PasswordField from "@/components/ui/inputs/PasswordField";

// Register Schema
const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid Email Address" }).trim(),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters" }),
});
type LoginSchemaType = z.infer<typeof LoginSchema>;

// Main Component
const Login = () => {
  // React Hook Form Logic
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });
  // OnSubmit Function
  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    console.log(data);
    reset();
  };

  // Return JSX
  return (
    <div className="custom-container flex items-center justify-center flex-col gap-5 py-5 min-h-[calc(100vh-73.88px)]">
      <h1 className="shadow-lg text-2xl text-primary mb-5 font-jetbrains p-3 sm:p-5 bg-white rounded-lg">
        Login to your account
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
        <PasswordField
          type="password"
          name="password"
          placeholder="Password"
          register={register}
          error={errors.password?.message}
          autoComplete="current-password"
        />
        <Button type="submit" size="sm">
          Login
        </Button>
      </form>
      <span className="text-lg font-light text-gray-500">
        Forgot Your Password?
        <Link
          to="/reset-password"
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 ml-1"
        >
          Reset Password
        </Link>
      </span>
    </div>
  );
};
export default Login;
