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
import SectionContainer from "./elements/SectionContainer";

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
    info: "Webb Manila",
  },
  {
    name: "facebook",
    link: "/",
    icon: <MdEmail color="white" size={40} />,
    info: "ernestoreid@gmail.com",
  },
  {
    name: "facebook",
    link: "/",
    icon: <MdCall color="white" size={40} />,
    info: "+63 912 3456 123",
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
    <SectionContainer>
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-center gap-5 lg:gap-10">
          <Typography element="h2" size="7xl" weight="bold">
            LET’S TALK
          </Typography>
          {/* <Line variant="horizontal" /> */}
        </div>

        <div className=" flex  flex-wrap xl:my-32">
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="mx-auto flex w-full flex-col gap-5 px-5 py-20 lg:gap-10 xl:w-6/12 xl:p-10 "
          >
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
            <FormTextarea
              name="inquiryMessage"
              label="Message"
              required={true}
              errors={errors}
              register={register}
            />

            <div className="flex justify-end">
              <Button type="submit" variant="primary">
                SUBMIT
              </Button>
            </div>
          </form>

          <div className="flex w-full items-center border-t-2 border-white  pt-10 lg:border-t-0 lg:pt-0 xl:w-5/12 xl:border-l-2">
            <div className="flex w-full  flex-col gap-5 p-5 lg:flex-row lg:gap-10 lg:p-20 xl:flex-col">
              {info.map((item, i) => (
                <Link href={item.link} key={i}>
                  <div className="flex items-center gap-10 ">
                    <div>{item.icon}</div>

                    <Typography size="xl" weight="light">
                      {item.info}
                    </Typography>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
