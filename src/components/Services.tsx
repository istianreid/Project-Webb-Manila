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
        <div className="flex flex-col gap-10">
          <Typography variant="h1" customWeight="bold">
            WHAT WE DO.
          </Typography>
          <Line variant="horizontal" />
        </div>

        <div className="flex justify-between my-32 ">
          {services.map((item, i) => (
            <div key={i} className="flex w-4/12 relative">
              <div className="flex flex-col gap-10 p-10 ">
                <Typography variant="h3" customWeight="medium">
                  {item.title}
                </Typography>
                <Typography variant="lg" customWeight="light">
                  {item.content}
                </Typography>
                <Typography variant="h1" customWeight="bold" className="absolute bottom-0">
                  {item.no}
                </Typography>

                <div className="h-[60px]"></div>
              </div>
              {item.line === true ? <Line variant="vertical" /> : null}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
