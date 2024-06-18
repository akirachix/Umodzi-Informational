import Intro from "./Landingpage";
import Navb from "./Navbar";
import Products from "./Product";
import About from "./contact/contact";

function Nav(){
  return(
    <div>
      
      <Navb/>
      <Intro/>
      <Products/>
      <About/>
    </div>
  );
};

export default Nav;