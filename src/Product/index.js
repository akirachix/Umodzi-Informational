import './index.css';
import ganza from './ganza.png';
import google from './ganzagp.png';
const Products = () => {
  return (
    
    <div className="product">
      <div className="text">
        <h3>Product</h3>
        <p className="product-text">
          GanzaPay is gamified app for mobile money apps.<br/>With GanzaPay you can send money, withdraw money, <br/>check balance and call customer care without the need to read or write.
        </p>
        <h2>Download the App On</h2>
        <img id="google-play-img" src={google} alt="" />
      </div>
      <div>
        <img src={ganza} alt=""  id='image'/>
        </div>
    </div>
  );
};
export default Products;