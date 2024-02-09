import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { FaCarSide } from "react-icons/fa";
import Typography from "../Typography";

interface inputs {
  name: string;
  list: string[];
  placeholder?: string;
  errorMessage: string;
  label: string;
  required: boolean;
  errors: any;
  register: any;
}

export const FormSelect = ({
  name,
  list,
  placeholder,
  errorMessage,
  label,
  required,
  errors,
  register,
}: inputs) => {
  return (
    <div className="flex w-full flex-col gap-1 p-2">
      <label>
        <Typography size="md" className="font-JacquesM">
          {label}
        </Typography>
      </label>
      <select
        id={name}
        name={name}
        {...register(name, {
          required: {
            value: required,
            message: errorMessage,
          },
        })}
        className={`block w-full rounded-md  border-gray-200 px-4 py-1 placeholder-gray-500 shadow-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 lg:py-2 ${
          errors[name] && "ring-1 ring-red-500"
        }`}
        placeholder={placeholder}
      >
        {list.map((item: any) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Typography size="xs" color="text-red-500">
            {message}
          </Typography>
        )}
      />
    </div>
  );
};
