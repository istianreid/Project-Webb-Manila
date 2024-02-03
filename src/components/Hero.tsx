import { Button } from "./elements/Button";
import SectionContainer from "./elements/SectionContainer";
import Typography from "./elements/Typography";

export default function Hero() {
  return (
    <SectionContainer>
      <div className="container mx-auto flex flex-col gap-10">
        <Typography variant="custom1" customWeight="bold">
          CREATIVE WEBSITE SIMPLIFIES SALES & MARKETING
        </Typography>
        <div>
          <Button variant="primary"> LES'T tALK </Button>
        </div>

        <Typography variant="lg" customWeight="light" className="text-end">
          Webb Manila is a 2024 startup, a collective of dedicated freelancers in the <br /> realms of web design and
          development, committed to simplifying sales <br /> and marketing for Small and Medium Enterprises (SMEs).
        </Typography>
      </div>
    </SectionContainer>
  );
}
