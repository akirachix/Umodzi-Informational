import Intro from "./Landingpage";
import Navb from "./Navbar";
import Products from "./Product";
import Footer from "./Footer";

function Nav(){
  return(
    <div>
      
      <Navb/>
      <Intro/>
      <Products/>
      <Footer/>

    </div>
  );
};

export default Nav;