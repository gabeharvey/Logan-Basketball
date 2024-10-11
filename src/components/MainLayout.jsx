import PlayerBio from './PlayerBio';
import PlayerCards from './PlayerCards';
import Contact from './Contact';
import BasketballStatTracker from './BasketballStatTracker';

const MainLayout = () => {
  return (
    <>
      <PlayerBio />
      <PlayerCards />
      <BasketballStatTracker />
      <Contact />
    </>
  );
};

export default MainLayout;