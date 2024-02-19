import React from "react";
import SectionContainer from "./elements/SectionContainer";
import Typography from "./elements/Typography";
import Line from "./elements/line";
import Image from "next/image";

export default function WorksV2() {
  const work = [
    {
      title: "XTREME AUTO FZE",
      content:
        "Xtreme Auto FZE is a car dealership of pre-owned 4WD from Australia and other countries. In 2002, the company was founded in Dubai. The new leadership wants Xtreme Auto FZE to be well-known throughout the UAE and eventually the world.",
      image: "/work images/Xreme Auto Fze.png",
    },
    {
      title: "CHUMMY STAR DENTAL CARE",
      content:
        "Transforming smiles through comprehensive dental expertise, from orthodontics to cosmetic procedures, implants, surgeries, and general care.",
      image: "/work images/Chummy Star.png",
    },

    {
      title: "CARASAQUIT LAW & NOTARIAL OFFICE",
      content:
        "Advocating your rights with experience and dedication. Your reliable partner for legal solutions and peace of mind. Expertise, Integrity, Results.",
      image: "/work images/Carasaquit Law Office.png",
    },

    {
      title: "K NETWORK",
      content:
        "K Network is an organization that aims to bridge education oppurtunity gap through initiatives designed to support every learner in reaching their full potential.",
      image: "/work images/K Network.png",
    },
  ];

  return (
    <SectionContainer>
      <div className="container mx-auto flex flex-col items-center gap-10 lg:gap-20 ">
        <Typography element="h2" size="7xl" weight="bold">
          PROJECTS.
        </Typography>

        <div className=" flex flex-wrap">
          {work.map((item, i) => (
            <div
              key={i}
              className="flex w-full flex-col gap-5 py-10 lg:w-[50%] lg:gap-10 lg:p-10 "
            >
              <Image
                src={item.image}
                alt={item.title}
                width={763}
                height={492}
              />
              <div className=" flex flex-col items-start gap-5">
                <Typography size="5xl" weight="semibold" className="">
                  {item.title}
                </Typography>
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
