/* This example requires Tailwind CSS v2.0+ */
import { Switch } from "@headlessui/react";
import Typography from "../Typography";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const FormToogle = ({ value, onChange, label }: any) => {
  return (
    <Switch.Group as="div" className="flex items-center justify-between gap-2">
      <Switch
        checked={value}
        onChange={onChange}
        className={classNames(
          value ? "bg-red-500" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none  ",
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            value ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
          )}
        />
      </Switch>
      <Switch.Label>
        <Typography size="md">{label}</Typography>
      </Switch.Label>
    </Switch.Group>
  );
};
