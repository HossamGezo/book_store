// Libraries
import clsx from "clsx";
// React Hook Form
import type {Path, UseFormRegister, FieldValues} from "react-hook-form";
// Types
type InuptTypeOption = "text" | "email" | "password";
// Main Type
type InputFieldType<T extends FieldValues> = {
  type: InuptTypeOption;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
} & React.ComponentProps<"input">;
// Main Component
const InputField = <T extends FieldValues>({
  type,
  name,
  register,
  error,
  className,
  ...props
}: InputFieldType<T>) => {
  const baseStyles =
    "w-[325px] h-[45px] bg-white border-b-2 border-b-secondary/75 focus:border-b-primary outline-0 px-1.5 py-2 caret-primary rounded-sm placeholder:text-secondary/30 placeholder:text-sm";
  return (
    <>
      <input
        type={type}
        {...props}
        {...register(name)}
        className={clsx(baseStyles, className)}
      />
      {error && <span className="text-sm text-red-400/85">{error}</span>}
    </>
  );
};
export default InputField;
