import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <Works />
      <ContactForm />
      <Footer />
    </main>
  );
}
