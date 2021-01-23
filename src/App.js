import './App.css';
import Nav from './Components/Nav/Nav';
import Intro from './Components/Intro/Intro';
import Works from './Components/Works/Works';
import Hover from './Components/Hover/Hover';
import Order from './Components/Order/Order';
import Footer from './Components/Footer/Footer';
import Explanation from './Components/Explanation/Explanation';
import Favorites from './Components/Favorites/Favorites';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Works />
      <Explanation />
      <Favorites />
      <Order />
      <Hover />
      <Footer />
    </div>
  );
};

export default App;
