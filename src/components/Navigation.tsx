"use client";

import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
// import { Divide as Hamburger } from "react-facebook";
import Typography from "./elements/Typography";
import Hamburger from "hamburger-react";
import { FaBullseye } from "react-icons/fa6";
import Line from "./elements/line";

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
    <div className="px-5 lg:px-10">
      <nav className="container mx-auto flex items-center justify-between py-5 lg:px-0 lg:py-5 ">
        <Link href="/">
          <Typography
            size="5xl"
            weight="extrabold"
            color="text-malachite-500"
            className="z-90 tracking-[-3px]"
          >
            webbmanila.com
          </Typography>
        </Link>

        <Hamburger
          size={40}
          color="#02d825"
          toggled={isOpen}
          toggle={setOpen}
        />
      </nav>

      <MenuPopoutPanel isOpen={isOpen} setOpen={setOpen} links={links} />
    </div>
  );
}

const MenuPopoutPanel = ({ isOpen, setOpen, links }: any) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex w-full lg:w-6/12  ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-full border-2 border-black bg-black lg:border-white ">
                {/* navigation */}
                <div className="flex h-screen  flex-col  ">
                  <div className="flex justify-end p-5">
                    <Hamburger
                      size={40}
                      color="#02d825"
                      toggled={isOpen}
                      toggle={setOpen}
                    />
                  </div>
                  <div className="mx-auto mt-10  hidden border-r-2 lg:block">
                    <ul className="relative m-10 flex  list-none flex-col  gap-8 p-10 lg:items-start">
                      {links.map(
                        (
                          item: { name: string; link: string; line: boolean },
                          i: number,
                        ) => (
                          <li key={i}>
                            <Link href={item.link}>
                              <Typography size="5xl">{item.name}</Typography>
                            </Link>
                            {item.line === true ? (
                              <div className="absolute my-4 h-[1px] w-full bg-white"></div>
                            ) : null}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="mx-auto mt-10 block  w-full lg:hidden">
                    <ul className=" m-10 flex  list-none flex-col  gap-8  p-10 lg:items-start">
                      {links.map(
                        (
                          item: { name: string; link: string; line: boolean },
                          i: number,
                        ) => (
                          <li
                            key={i}
                            className="flex flex-col items-center gap-5"
                          >
                            <Link href={item.link}>
                              <Typography size="5xl">{item.name}</Typography>
                            </Link>
                            {item.line === true ? (
                              <Line variant="horizontal" />
                            ) : null}
                          </li>
                        ),
                      )}
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
