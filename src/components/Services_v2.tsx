import React from "react";
import SectionContainer from "./elements/SectionContainer";
import Typography from "./elements/Typography";
import Line from "./elements/line";
import { Button } from "./elements/Button";

export default function ServicesV2() {
  const services = [
    {
      title: "WEB DEVELOPMENT PACKAGE",
      subTitile:
        "Unlock the full potential of your online presence with our Web Development Package.",
      services: [
        "Web Design & Development",
        "Social Media & Google Map Integration",
        "Email & Messenger Integration",
        "Basic SEO Optimization",
        "Mobile Responsiveness",
        "Domain & Hosting ( 1 Year )",
        "Free Maintenance & Enhancement ( 1 Year )",
      ],
    },
  ];

  return (
    <SectionContainer>
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 lg:gap-20 ">
        <Typography element="h2" size="7xl" weight="black">
          SERVICES.
        </Typography>

        <div>
          {services.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-10 border-2 border-white p-5 lg:p-20"
            >
              <div className="flex flex-col gap-5">
                <Typography element="h2" size="5xl" weight="bold">
                  {item.title}
                </Typography>
                <Typography
                  size="lg"
                  className="mx-auto text-center lg:w-[60%]"
                  weight="light"
                >
                  {item.subTitile}
                </Typography>
              </div>

              <ul className="mx-auto flex  w-[90%] list-disc flex-col gap-2 text-white">
                {item.services.map((service, i) => (
                  <li key={i}>
                    <Typography size="lg" weight="light">
                      {service}
                    </Typography>
                  </li>
                ))}
              </ul>
              <div>
                <Button variant="primary">REQUEST FOR QOUTATION</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
