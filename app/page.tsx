import Header from "../components/Header";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="relative bg-gradient flex flex-col mx-auto sm:px-10 px-5 pb-10">
      <Header />
      <main id="main-content">
        <Hero />
        <Grid />
      </main>
      <Footer />
    </div>
  );
}
