import './index.css';


const Products = () => {
  return (
    <div className="products-container">
    <div className="product">
        <h3>Product</h3>
        <p className="product-text">
        GanzaPay presents an innovative approach to financial transactions through mobile applications, leveraging gamification elements to enhance user experience and accessibility. This app combines the convenience of digital payments with engaging game-like features, aiming to make financial operations more interactive and intuitive.
        </p>
        <h2 className='download'>Download the App On</h2>
        <img src='/images/ganzagp.png' alt='gaza' id='google-play-img'/>
      </div>
      <div>
     <img src='/images/ganza.png' alt='' id='ganza-pay-logo-image'/>

    </div>  
    </div>
  );
};
export default Products;