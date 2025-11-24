// Import React Hook Form, ZodResolver & Zod
import {useForm, type SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import InputField from "@/components/ui/inputs/InputField";
import Button from "@/components/ui/buttons/Button";
import {Link} from "react-router";
// Register Schema
const LoginSchema = z.object({
  username: z
    .string()
    .min(3, {message: "Username must be at least 3 characters"})
    .max(21, {message: "Username must not exceed 21 characters"}),
  email: z.string().regex(/^\S+@\S+\.\S+$/, {message: "Invalid Email"}),
  password: z
    .string()
    .min(8, {message: "Password must be at least 8 characters"}),
});
type LoginSchemaProps = z.infer<typeof LoginSchema>;
// Main Component
const Login = () => {
  // React Hook Form Logic
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<LoginSchemaProps>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });
  // OnSubmit Function
  const onSubmit: SubmitHandler<LoginSchemaProps> = (data) => {
    console.log(data);
    reset();
  };
  // Return JSX
  return (
    <div className="login ccontainer flex-center flex-col gap-5 py-5 min-h-[calc(100vh-73.88px)]">
      <h1 className="login-form-title text-2xl text-primary mb-5 font-jetbrains p-3 sm:p-5 bg-white rounded-lg">
        Login to your account
      </h1>
      <form
        className="login-form flex flex-col gap-5 bg-blue-100/50 py-5 px-1.5 sm:p-10 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          type="text"
          placeholder="Username"
          name="username"
          register={register}
          error={errors.username?.message}
          autoComplete="username"
        />
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          register={register}
          error={errors.email?.message}
          autoComplete="email"
        />
        <InputField
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
        Don't have an account?
        <Link
          to="/register"
          className="underline text-blue-600 visited:text-purple-500 ml-0.5"
        >
          Register
        </Link>
      </span>
    </div>
  );
};
export default Login;
