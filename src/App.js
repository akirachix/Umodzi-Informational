import React from "react";
import About from "./About";
import Products from "./Product";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Landing from "./Landing";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Products/>
      <About />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;

   

    
