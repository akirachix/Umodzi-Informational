import Intro from "./Landingpage";
import Navb from "./Navbar";
import Products from "./Product";

function Nav(){
  return(
    <div>
      
      <Navb/>
      <Intro/>
      <Products/>
    </div>
  );
};

export default Nav;