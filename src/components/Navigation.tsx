"use client";

import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
// import { Divide as Hamburger } from "react-facebook";
import Typography from "./elements/Typography";
import Hamburger from "hamburger-react";
import { FaBullseye } from "react-icons/fa6";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const links = [
    {
      link: "/",
      name: "WHAT WE DO",
      line: true,
    },
    {
      link: "/",
      name: "RECENT WORKS",
      line: true,
    },
    {
      link: "/",
      name: "LET'S TALK",
      line: false,
    },
  ];

  return (
    <div>
      <nav className="container mx-auto flex items-center justify-between p-5 lg:p-0 lg:py-5   ">
        <Link href="/">
          <Typography variant="h3" customWeight="bold" customColor="text-malachite-500" className="z-90">
            webbmanila
          </Typography>
        </Link>

        <Hamburger size={40} color="white" toggled={isOpen} toggle={setOpen} />
      </nav>

      <MenuPopoutPanel isOpen={isOpen} setOpen={setOpen} links={links} />
    </div>
  );
}

const MenuPopoutPanel = ({ isOpen, setOpen, links }: any) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex lg:w-6/12 w-full  ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto  w-full bg-black lg:border-white border-black border-2  ">
                {/* navigation */}
                <div className="flex flex-col h-screen">
                  <div className="flex justify-end p-5">
                    <Hamburger size={40} color="white" toggled={isOpen} toggle={setOpen} />
                  </div>
                  <div className="flex m-auto items-center  border-r-2 ">
                    <ul className="flex list-none flex-col  gap-8  relative m-10 p-10">
                      {links.map((item: { name: string; link: string; line: boolean }, i: number) => (
                        <li key={i}>
                          <Link href={item.link}>
                            <Typography variant="h3">{item.name}</Typography>
                          </Link>
                          {item.line === true ? <div className="bg-white my-4 h-[1px] w-full absolute"></div> : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
