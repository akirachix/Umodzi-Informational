import './index.css';
import gplogo from "./gplogo.png";

function Navb() {

  return (
    <div className="topNav">
      <div className="logo">
        <img src={gplogo} alt="Logo"></img>
        <h6>GanzaPay</h6>
      </div>
      <div className="textNav">
        <a href="home">Home</a>
        <a href="Product">Product</a>
        <a href="About">About Us</a>
        <a href="Contact">Contact Us</a>{" "}
      </div>
    </div>
  );
}

export default Navb;