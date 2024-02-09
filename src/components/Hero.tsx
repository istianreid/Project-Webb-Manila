import { Button } from "./elements/Button";
import SectionContainer from "./elements/SectionContainer";
import Typography from "./elements/Typography";

export default function Hero() {
  return (
    <SectionContainer>
      <div className="container mx-auto flex flex-col gap-10">
        <Typography
          element="h1"
          size="custom1"
          weight="bold"
          className=" w-10/12 "
        >
          CREATIVE WEBSITE SIMPLIFIES SALES & MARKETING
        </Typography>

        <div>
          <Button variant="primary"> LETS tALK </Button>
        </div>
        <div className="flex justify-end">
          <Typography
            element="h2"
            size="lg"
            weight="light"
            className=" w-10/12 text-end lg:w-5/12"
          >
            Webb Manila is a 2024 startup, a collective of dedicated freelancers
            in the realms of web design and development, committed to
            simplifying sales and marketing for Small and Medium Enterprises
            (SMEs).
          </Typography>
        </div>
      </div>
    </SectionContainer>
  );
}
