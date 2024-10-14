import PlayerBio from './PlayerBio';
import PlayerCards from './PlayerCards';
import Contact from './Contact';
import BasketballStatTracker from './BasketballStatTracker';
import HoopsFilm from './HoopsFilm';
import Offers from './Offers';

const MainLayout = () => {
  return (
    <>
      <PlayerBio />
      <HoopsFilm />
      <PlayerCards />
      <BasketballStatTracker />
      <Offers />
      <Contact />
    </>
  );
};

export default MainLayout;