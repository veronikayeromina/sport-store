import { About } from "../components/About/About";
import { Benefits } from "../components/Benefits/Benefits";
import { Categories } from "../components/Categories/Categories";
import { Choice } from "../components/Choice/Choice";
import { Filter } from "../components/Filter/Filter";
import { Hero } from "../components/Hero/Hero";
import { Popular } from "../components/Popular/Popular";
import { Products } from "../components/Products/Products";
import { Questions } from "../components/Questions/Questions";
import { Sale } from "../components/Sale/Sale";
import { Video } from "../components/Video/Video";

function Home() {
  return (
    <div>
      <Hero />
      <Choice />
      <Popular />
      <About />
      <Sale />
      <Categories />
      <Questions />
      <Products />
      <Video />
      <Filter />
      <Benefits />
    </div>
  );
}

export default Home;
