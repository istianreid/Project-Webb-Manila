"use client";

import { Button } from "./Button";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Typography from "./Typography";
import Link from "next/link";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa6";

export default function CallUs() {
  let [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "telephone",
      userName: "09xx - xxxx - xxx",
      link: process.env.NEXT_PUBLIC_TELEPHONE,
      icon: "/icons/telephone.png",
    },
    {
      name: "messenger",
      userName: "chummydental",
      link: process.env.NEXT_PUBLIC_MESSENGER_LINK,
      icon: "/icons/messenger.png",
    },
    {
      name: "whatsapp",
      userName: "09xx - xxxx - xxx",
      link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
      icon: "/icons/whatsapp.png",
    },
    {
      name: "Viber",
      userName: "09xx - xxxx - xxx",
      link: process.env.NEXT_PUBLIC_VIBER_LINK,
      icon: "/icons/viber.png",
    },
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="z-50 flex gap-4">
      <Link href="/contact">
        <Button variant="primary">CONTACT US</Button>
      </Link>
      <Button onClick={openModal} variant="secondary" className="gap-5">
        <FaPhone /> <span className="ml-2">CALL US</span>
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[470px] transform overflow-hidden rounded-2xl bg-white p-10 shadow-xl transition-all  md:w-[576px]">
                  <div className="flex w-full justify-end ">
                    <HiXMark
                      color="#04c8c2"
                      size={50}
                      className="cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-5">
                    <Typography variant="h5" fontFamily="dmserif">
                      Call Us for inquiries
                    </Typography>
                    <div className="flex flex-wrap justify-center gap-5">
                      {links.map((item, i) => (
                        <Link key={i} href={`${item.link}`}>
                          <div className="flex items-center gap-5 rounded-lg border-2 border-tradewind-500 p-2 lg:p-6 ">
                            <Image
                              src={item.icon}
                              alt={item.name}
                              width={50}
                              height={50}
                              className="w-[40px] lg:w-[50px]"
                            />
                            <div className="flex flex-col items-start">
                              <Typography variant="lg" customWeight="bold">
                                {item.name}
                              </Typography>
                              <Typography variant="sm" customWeight="light">
                                {item.userName}
                              </Typography>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
