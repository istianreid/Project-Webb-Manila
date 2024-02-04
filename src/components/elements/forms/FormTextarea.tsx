import React from "react";

import { ErrorMessage } from "@hookform/error-message";
import Typography from "../Typography";

interface inputs {
  name: string;
  label: string;
  required: boolean;
  errors: any;
  register: any;
  placeholder?: string;
}

export const FormTextarea = ({
  name,
  label,
  required,
  errors,
  register,
  placeholder,
}: inputs) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Typography variant="xl">{label}</Typography>
      <div className="flex w-full flex-col gap-1 ">
        <textarea
          rows={1}
          {...register(name, {
            required: {
              value: required,
              message: "Please enter at least 25 characters",
            },
            maxLength: {
              value: 1000,
              message: "Your message can't be more than 1000 characters",
            },
            minLength: {
              value: 25,
              message: "Please enter at least 25 characters",
            },
          })}
          className="block w-full border-b-2 border-white bg-black py-1 text-white focus:outline-none focus:ring-0 focus:ring-white"
          placeholder={placeholder}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <Typography variant="xs" color="text-red-400">
              {message}
            </Typography>
          )}
        />
      </div>
    </div>
  );
};
