

import AboutUs from "./components/AboutUs/AboutUs";
import Team from "./components/Team/Team";
import Calendar from "./components/Calendar/Calendar";
import Galery from "./components/Galery/Galery";
import Sponsor from "./components/Sponsors/Sponsor";
import ImageStart from "./components/Start/ImageStart";
import Equipamiento from "./components/equipamiento/Equipamiento";
const Home = () => {
  return (
    <main className="main">

      <ImageStart />
      <AboutUs />
      <Team />
      <Calendar />
      <Equipamiento />
      <Galery />
      <Sponsor />


    </main >
  );
}

export default Home