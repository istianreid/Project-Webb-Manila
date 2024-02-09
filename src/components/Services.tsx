import React from "react";
import SectionContainer from "./elements/SectionContainer";
import Typography from "./elements/Typography";
import Line from "./elements/line";

export default function Services() {
  const services = [
    {
      no: "01",
      title: "WEB DESIGN",
      content:
        "Web Design Excellence: Transform your online presence with our stunning designs! We craft websites that capture attention, turning your ideas into a captivating digital reality. Let's make your brand stand out and create a memorable online experience together! ✨🎨 ",
      line: true,
    },
    {
      no: "02",
      title: "WEB DEVELOPMENT",
      content:
        "Web Development Mastery: Elevate your digital functionality with our coding expertise! We're the team that brings your online vision to life, from sleek makeovers to comprehensive web solutions. Let's collaborate and code our way to online success! 🌐💻 ",
      line: true,
    },
    {
      no: "03",
      title: "ENHANCEMENT & MAINTENANCE",
      content:
        "Revitalize and Thrive: Elevate your online presence with our Web Enhancement and Maintenance Services! We add that extra flair to keep your website fresh and engaging, while our maintenance marvels ensure it runs smoothly. Let's collaborate to ensure your digital space remains hassle-free and your brand stays at the forefront of excellence! ✨🌐",
      line: false,
    },
  ];

  return (
    <SectionContainer>
      <div className="container mx-auto ">
        <div className="flex flex-col gap-5 lg:gap-10">
          <Typography element="h2" size="7xl" weight="bold">
            WHAT WE DO.
          </Typography>
          <Line variant="horizontal" />
        </div>

        <div className="my-5 flex flex-wrap justify-center  gap-10  lg:my-10 xl:my-20 xl:gap-0  2xl:my-32">
          {services.map((item, i) => (
            <div
              key={i}
              className="relative flex w-full  border-b-2 border-r-0 border-white py-10 last:border-b-2 2xl:w-4/12 2xl:border-b-0 2xl:border-r-2 2xl:py-0 2xl:last:border-none"
            >
              <div className="flex flex-col gap-5 p-0 lg:gap-10 2xl:p-10 ">
                <Typography element="h3" size="5xl" weight="medium">
                  {item.title}
                </Typography>
                <Typography size="lg" weight="light">
                  {item.content}
                </Typography>
                <Typography
                  size="7xl"
                  weight="bold"
                  className="absolute bottom-10 right-10 2xl:bottom-0 2xl:left-10"
                >
                  {item.no}
                </Typography>

                <div className="h-[60px]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
