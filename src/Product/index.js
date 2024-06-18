import './index.css';
import ganza from './ganza.png';
import google from './ganzagp.png';
const Products = () => {
  return (
    <div className="product">
      <div className="text">
        
        <p className="product-text">
          GanzaPay is gamified app for mobile money apps.<br />With GanzaPay you can send money,<br /> withdraw money, check balance and call customer care<br /> without the need to read or write.
        </p>
        <h2>Download the App On</h2>
        <img className="google-play-img" src={google} alt="" />
      </div>
      <div id="image">
        <img src={ganza} alt="" />
      </div>
    </div>
  );
};
export default Products;