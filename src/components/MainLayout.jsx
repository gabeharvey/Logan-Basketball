import PlayerBio from './PlayerBio';
import PlayerCards from './PlayerCards';
import Contact from './Contact';
import BasketballStatTracker from './BasketballStatTracker';
import HoopsFilm from './HoopsFilm';

const MainLayout = () => {
  return (
    <>
      <PlayerBio />
      <HoopsFilm />
      <PlayerCards />
      <BasketballStatTracker />
      <Contact />
    </>
  );
};

export default MainLayout;