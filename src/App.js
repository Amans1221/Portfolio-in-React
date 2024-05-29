
import Header,{HeaderPhone} from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import Experince from "./components/Experince.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Testimonial from "./components/Testimonial.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";
import {useState,useEffect} from "react"



import "./styles/App.scss"


function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const[ratio,setRatio] = useState(window.innerWidth / window.innerHeight);

  
useEffect(() => {
  const resizeRatio = ()=> {
    setRatio(window.innerWidth / window.innerHeight);
  };
window.addEventListener("resize", resizeRatio)
  return () => {
    window.removeEventListener("resize", resizeRatio)
  };

}, [ratio])


  return ratio < 2? (

    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
 <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
 <Home />
 <Work />
 <Experince />
 <Services />
 <Testimonial />
 <Contact />
 <Toaster />
 <Footer />
 
 
 
   </>
   ) : <em id="customMessage">Please Change the ratio to view</em>
}
export default App;