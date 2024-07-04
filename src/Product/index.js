import './index.css';
import ganza from './ganza.png';
import google from './ganzagp.png';
const Products = () => {
  return (
    
    <div className="product">
      <div className="text">
        <h3>Product</h3>
        <p className="product-text">
        GanzaPay presents an innovative approach to financial transactions through mobile applications, leveraging gamification elements to enhance user experience and accessibility. This app combines the convenience of digital payments with engaging game-like features, aiming to make financial operations more interactive and intuitive.
        </p>
        <h2 className='download'>Download the App On</h2>
        <img id="google-play-img" src={google} alt="" />
      </div>
      <div>
        <img src={ganza} alt=""  id='image'/>
        </div>
    </div>
  );
};
export default Products;