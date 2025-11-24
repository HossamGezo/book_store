// Import React Hook Form & Zod
import {useForm, type SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
// React Icons
import {ImLocation} from "react-icons/im";
import {BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
// Components
import InputField from "@/components/ui/inputs/InputField";
import Button from "@/components/ui/buttons/Button";
// Styles
import "./contact.css";
// Zod Schema
const Schema = z.object({
  name: z
    .string()
    .min(3, {message: "Name must be at least 3 characters"})
    .max(21, {message: "Name must not exceed 21 characters"}),
  subject: z
    .string()
    .min(3, {message: "Subject must be at least 3 characters"})
    .max(21, {message: "Subject must not exceed 21 characters"}),
  email: z.string().regex(/^\S+@\S+\.\S+$/, {message: "Invalid Email"}),
  message: z
    .string()
    .min(6, {message: "Message must be at least 6 characters"})
    .max(200, {message: "Message must not exceed 200 characters"}),
});
type SchemaProps = z.infer<typeof Schema>;
// Main Component
const Contact = () => {
  // React Hook Form Logic
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<SchemaProps>({
    mode: "onChange",
    resolver: zodResolver(Schema),
  });
  // onSubmit Function
  const onSubmit: SubmitHandler<SchemaProps> = (data) => {
    console.log(data);
    reset();
  };
  // Return JSX
  return (
    <div className="contact ccontainer">
      {/* Contact Address */}
      <div className="contact-address">
        <div className="contact-address-location">
          <ImLocation className="icon" />
          <span>Address</span>
          <span>Egypt – Cairo – Nasr City</span>
        </div>
        <div className="contact-address-location">
          <BsFillTelephoneFill className="icon" />
          <span>Phone</span>
          <span>123-456-789</span>
        </div>
        <div className="contact-address-location">
          <MdEmail className="icon" />
          <span>Email</span>
          <span>info@fakeemail.com</span>
        </div>
      </div>
      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-3xl text-primary mb-10 font-jetbrains">
          Contact Us Form
        </h1>
        <div className="inputs-wrapper grid grid-cols-1 xl:grid-cols-3 gap-5">
          <InputField
            type="text"
            placeholder="Name *"
            name="name"
            register={register}
            error={errors.name?.message}
            autoComplete="name"
          />
          <InputField
            type="text"
            placeholder="Subject *"
            name="subject"
            register={register}
            error={errors.subject?.message}
            autoComplete="off"
          />
          <InputField
            type="email"
            placeholder="Email *"
            name="email"
            register={register}
            error={errors.email?.message}
            autoComplete="email"
          />
          <div className="flex flex-col gap-1 xl:col-span-3">
            <textarea
              className="resize-none h-[300px] bg-white border-b-2 border-b-secondary/75 focus:border-b-primary outline-0 px-1.5 py-2 rounded-sm caret-primary placeholder:text-secondary/30"
              placeholder="Your Message"
              {...register("message")}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-400/85">
                {errors.message?.message}
              </span>
            )}
          </div>
        </div>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};
export default Contact;
