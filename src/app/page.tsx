import Articles from "@/components/Articles";
import Comments from "@/components/Comments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Stats />
      <Articles />
      <Comments />
      <Contact />
      <Footer />
    </div>
  );
}
