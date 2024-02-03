"use client";

import React from "react";
import Typography from "./elements/Typography";
import Line from "./elements/line";
import { FormInput } from "./elements/forms/FormInput";
import { FormTextarea } from "./elements/forms/FormTextarea";

import { Button } from "./elements/Button";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";

interface ContactFormProps {
  firstName: string;
  lastName: string;
  email: string;
  inquiryMessage: number;
}

const info = [
  {
    name: "facebook",
    link: "/",
    icon: <FaFacebook color="white" size={40} />,
    info: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    name: "facebook",
    link: "/",
    icon: <MdEmail color="white" size={40} />,
    info: "Lorem ipsum dolor sit amet, consectetur ",
  },
  {
    name: "facebook",
    link: "/",
    icon: <MdCall color="white" size={40} />,
    info: "Lorem ipsum dolor sit amet, consectetur ",
  },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormProps>();

  const onSubmitForm: SubmitHandler<ContactFormProps> = async (values) => {
    console.log(values);

    // try {
    //   await fetch("/api/contact", {
    //     method: "POST",
    //     body: JSON.stringify(values),
    //   });
    //   reset();
    // } catch (error) {
    //   console.log(error);
    // }
    // };
  };

  return (
    <div className="container mx-auto ">
      <div className="flex flex-col gap-10">
        <Typography variant="h1" customWeight="bold">
          LET’S TALK
        </Typography>
        <Line variant="horizontal" />
      </div>

      <div className="flex my-32">
        <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-10  w-7/12 p-10 pr-32">
          <FormInput
            name="name"
            type="text"
            register={register}
            label="Name"
            required={true}
            errors={errors}
            errorMessage="Please enter your name."
          />
          <FormInput
            name="email"
            type="email"
            register={register}
            label="Email"
            required={false}
            errors={errors}
            errorMessage="Please enter your email."
          />
          <FormTextarea name="inquiryMessage" label="Message" required={true} errors={errors} register={register} />

          <div className="flex justify-end">
            <Button type="submit" variant="primary">
              SUBMIT
            </Button>
          </div>
        </form>

        <div className="w-5/12 flex ">
          <Line variant="vertical" />
          <div className="flex w-full flex-col gap-10   p-20">
            {info.map((item, i) => (
              <Link href={item.link} key={i}>
                <div className="flex items-center gap-10">
                  <div>{item.icon}</div>

                  <Typography variant="xl" customWeight="light">
                    {item.info}
                  </Typography>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
