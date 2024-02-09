import { ErrorMessage } from "@hookform/error-message";
import Typography from "../Typography";

interface Inputs {
  name: string;
  type: string;
  placeholder?: string;
  errorMessage: string;
  label: string;
  required: boolean;
  errors: any;
  register: any;
}

export const FormInput = ({
  name,
  type,
  placeholder,
  errorMessage,
  label,
  required,
  errors,
  register,
}: Inputs) => {
  const isEmail = type === "email";

  const validationRules = isEmail
    ? {
        required: {
          value: true,
          message: "Please enter a valid email address.",
        },
        minLength: {
          value: 8,
          message: "This is not long enough to be an email.",
        },
        maxLength: {
          value: 120,
          message: "This is too long.",
        },
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Please enter a valid email address.",
        },
      }
    : {
        valueAsNumber: type === "number" ? true : false,
        required: {
          value: required,
          message: errorMessage,
        },
      };

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={type}>
        <Typography size="md">{label}</Typography>
      </label>
      <div className="flex flex-col gap-1">
        <input
          type={type}
          id={name}
          name={name}
          {...register(name, validationRules)}
          className="block w-full border-b-2 border-white bg-black py-1 text-white focus:outline-none focus:ring-0 focus:ring-white"
          placeholder={placeholder}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <Typography size="xs" color="text-red-400">
              {message}
            </Typography>
          )}
        />
      </div>
    </div>
  );
};
