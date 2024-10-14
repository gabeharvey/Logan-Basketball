import PlayerBio from './PlayerBio';
import PlayerCards from './PlayerCards';
import Contact from './Contact';
import StatTracker from './StatTracker';
import HoopsFilm from './HoopsFilm';
import Offers from './Offers';

const MainLayout = () => {
  return (
    <>
      <div id="player-bio">
        <PlayerBio />
      </div>
      <div id="hoops-film">
        <HoopsFilm />
      </div>
      <div id="player-cards">
        <PlayerCards />
      </div>
      <div id="stat-tracker">
        <StatTracker />
      </div>
      <div id="offers">
        <Offers />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default MainLayout;
