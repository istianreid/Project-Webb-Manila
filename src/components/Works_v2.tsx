import React from "react";
import SectionContainer from "./elements/SectionContainer";
import Typography from "./elements/Typography";
import Line from "./elements/line";
import Image from "next/image";
import Link from "next/link";

export default function WorksV2() {
  const work = [
    {
      title: "XTREME AUTO FZE",
      content:
        "Xtreme Auto FZE is a car dealership of pre-owned 4WD from Australia and other countries. In 2002, the company was founded in Dubai.",
      image: "/work images/Xreme Auto Fze.png",
      link: "https://www.xtremeauto4x4.com/",
    },
    {
      title: "CHUMMY STAR DENTAL CARE",
      content:
        "Chummy Star Dental Care, the place where you can get top-notch dental services with a personal touch in your neighborhood.",
      image: "/work images/Chummy Star.png",
      link: "https://www.chummystardentalcare.com/",
    },
    // {
    //   title: "CARASAQUIT LAW & NOTARIAL OFFICE",
    //   content:
    //     "Advocating your rights with experience and dedication. Your reliable partner for legal solutions and peace of mind. Expertise, Integrity, Results.",
    //   image: "/work images/Carasaquit Law Office.png",
    // },

    // {
    //   title: "K NETWORK",
    //   content:
    //     "K Network is an organization that aims to bridge education oppurtunity gap through initiatives designed to support every learner in reaching their full potential.",
    //   image: "/work images/K Network.png",
    // },
  ];

  return (
    <SectionContainer>
      <div className="container mx-auto flex flex-col items-start gap-10 lg:items-center lg:gap-20 ">
        <Typography element="h2" size="7xl" weight="black">
          PROJECTS.
        </Typography>

        <div className=" flex flex-wrap">
          {work.map((item, i) => (
            <div
              key={i}
              className="flex w-full flex-col gap-5 pb-10 lg:w-[50%] lg:gap-10 lg:p-10 "
            >
              <Link href={item.link} target="_blank">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={763}
                  height={492}
                />
              </Link>

              <div className=" flex flex-col items-start gap-5">
                <Link href={item.link} target="_blank">
                  <Typography size="5xl" weight="bold" className="">
                    {item.title}
                  </Typography>
                </Link>
                <Typography size="lg" weight="light" className="w-[90%]">
                  {item.content}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
