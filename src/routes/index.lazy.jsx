import { createLazyFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
export const Route = createLazyFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {

  return (
    <div className="relative z-0 bg-primary overflow-x-hidden ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
    </div>
  );
}
