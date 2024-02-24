import { Button } from "./elements/Button";
import SectionContainer from "./elements/SectionContainer";
import Typography from "./elements/Typography";

export default function HeroV2() {
  return (
    <SectionContainer>
      <div className="container mx-auto flex flex-col items-center  gap-10 text-center">
        <Typography
          element="h2"
          size="3xl"
          weight="light"
          color="text-malachite-500"
        >
          Freelance Web Design & Development
        </Typography>

        <Typography element="h1" size="custom1" weight="extrabold">
          SIMPLIFY YOUR MARKETING & GROW YOUR SALES
        </Typography>

        <Typography
          element="h3"
          size="lg"
          weight="light"
          className="w-[80%] xl:w-[42%]"
        >
          We help Small and Medium Enterprises (SMEs), to promote products and
          services, showcase portfolios, and enhance online credibility. To
          foster trust with potential clients, and elevate {" business's "}
          professionalism
        </Typography>

        <Button variant="primary"> {"LET'S TALK"} </Button>
      </div>
    </SectionContainer>
  );
}
