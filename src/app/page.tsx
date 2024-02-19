import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import HeroV2 from "@/components/Hero_v2";
import Navigation from "@/components/Navigation";

import ServicesV2 from "@/components/Services_v2";
import WorksV2 from "@/components/Works_v2";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroV2 />
      <ServicesV2 />
      <WorksV2 />
      <ContactForm />
      <Footer />
    </main>
  );
}
