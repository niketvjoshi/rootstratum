import Navbar      from "@/components/Navbar";
import Hero        from "@/components/Hero";
import Process     from "@/components/Process";
import Services    from "@/components/Services";
import Platform    from "@/components/Platform";
import Credibility from "@/components/Credibility";
import Engagement  from "@/components/Engagement";
import TechStack   from "@/components/TechStack";
import About       from "@/components/About";
import Contact     from "@/components/Contact";
import Footer      from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Services />
        <Platform />
        <Credibility />
        <Engagement />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
