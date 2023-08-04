
import Image from "next/image";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
export default function Home() {
  return (
    <div className="bg-dev bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
    </div>
  );
}
