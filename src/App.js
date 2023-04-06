import About from "./component/About";
import Contact from "./component/Contact";
import Expierence from "./component/Expierence";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Portfolio from "./component/Portfolio";
import SocialLinks from "./component/SocialLinks";


function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Expierence/>
      <Contact/>
      <SocialLinks/>
    </>
 
  );
}

export default App;
