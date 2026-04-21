import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Extras } from "@/components/extras";
import { Scope } from "@/components/scope";
import { Contact } from "@/components/contact";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Hero />
      <About />
      <Services />
      <Extras />
      <Scope />
      <Contact />
    </main>
  );
}
