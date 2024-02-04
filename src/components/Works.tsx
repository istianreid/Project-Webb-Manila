import React from "react";
import SectionContainer from "./elements/SectionContainer";
import Typography from "./elements/Typography";
import Line from "./elements/line";
import Image from "next/image";

export default function Works() {
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
      <div className="container mx-auto ">
        <div className="flex flex-col gap-5 lg:gap-10">
          <Typography element="h2" variant="7xl" weight="bold">
            RECENT & ONGOING WORK.
          </Typography>
          <Line variant="horizontal" />
        </div>

        <div>
          {work.map((item, i) => (
            <div
              key={i}
              className="flex flex-wrap-reverse items-center gap-10 border-b-2 px-5 py-20 last:border-none lg:flex-nowrap lg:px-10 lg:py-32"
            >
              <div className="flex w-full flex-col gap-5 lg:w-6/12 lg:gap-10 ">
                <Typography
                  variant="5xl"
                  weight="semibold"
                  className="lg:w-[95%] 2xl:w-[80%]"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="lg"
                  weight="light"
                  className=" lg:w-[95%] 2xl:w-[80%]"
                >
                  {item.content}
                </Typography>
              </div>
              <div className="w-full lg:w-6/12">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={735}
                  height={474}
                  className="mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
