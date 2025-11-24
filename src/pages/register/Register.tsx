// Import React Hook Form, ZodResolver & Zod
import {useForm, type SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import InputField from "@/components/ui/inputs/InputField";
import Button from "@/components/ui/buttons/Button";
import {Link} from "react-router";
// Register Schema
const RegisterSchema = z
  .object({
    username: z.string(),
    email: z.string().regex(/^\S+@\S+\.\S+$/, {message: "Invalid Email"}),
    password: z
      .string()
      .min(8, {message: "Password must be at least 8 characters"}),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords doesn't match",
  });
type RegisterSchemaPorps = z.infer<typeof RegisterSchema>;
// Main Component
const Register = () => {
  // React Hook Form Logic
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterSchemaPorps>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });
  // OnSubmit Function
  const onSubmit: SubmitHandler<RegisterSchemaPorps> = (data) => {
    console.log(data);
  };
  // Return JSX
  return (
    <div className="register ccontainer flex-center flex-col gap-5 py-5 min-h-[calc(100vh-73.88px)]">
      <h1 className="register-form-title text-2xl text-primary mb-5 font-jetbrains p-5 bg-white rounded-lg">
        Create An Account
      </h1>
      <form
        className="register-form flex flex-col gap-5 bg-blue-100/50 py-5 px-1.5 sm:p-10 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          type="text"
          placeholder="Username"
          name="username"
          register={register}
          error={errors.username?.message}
        />
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          register={register}
          error={errors.email?.message}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          register={register}
          error={errors.password?.message}
        />
        <InputField
          type="password"
          name="confirmPassword"
          placeholder="confirm Password"
          register={register}
          error={errors.confirmPassword?.message}
        />
        <Button type="submit" size="sm">
          Register
        </Button>
      </form>
      <span className="text-lg font-light text-gray-500">
        Already have an account{" "}
        <Link
          to="/login"
          className="underline text-blue-600 visited:text-purple-500 ml-0.5"
        >
          login
        </Link>
      </span>
    </div>
  );
};
export default Register;
