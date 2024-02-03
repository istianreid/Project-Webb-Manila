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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis ",
      image: "/work images/Chummy Star.png",
    },

    {
      title: "CARASAQUIT LAW & NOTARIAL OFFICE",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis ",
      image: "/work images/Carasaquit Law Office.png",
    },

    {
      title: "K NETWORK",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis ",
      image: "/work images/K Network.png",
    },
  ];

  return (
    <SectionContainer>
      <div className="container mx-auto ">
        <Typography variant="h1" customWeight="bold" className="my-20">
          RECENT & ONGOING WORK.
        </Typography>
        {/* <Line variant="horizontal" /> */}

        <div>
          {work.map((item, i) => (
            <div key={i} className="flex items-center border-t-2 py-32 px-10">
              <div className="w-6/12 flex flex-col gap-10 ">
                <Typography variant="h3" customWeight="semibold" className="w-[60%]">
                  {item.title}
                </Typography>
                <Typography variant="lg" customWeight="light" className="w-[80%]">
                  {item.content}
                </Typography>
              </div>
              <div className="w-6/12">
                <Image src={item.image} alt={item.title} width={735} height={474} className="mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
