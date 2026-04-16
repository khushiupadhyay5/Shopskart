import { useState } from 'react'
import './App.css'

function App() {
 const products = [
    {
        id:1,
        name:'Elegent Blue Ring Handbag',
        price:'₹1,899',
        image:'b1.jpeg',
    },
    {
        id:2,
        name:'Floral Vintage Green Handbag',
        price:'₹1,699',
        image:'b2.jpeg',
    },
    {
        id:3,
        name:'Classic Black Luxury Tote',
        price:'₹1,799',
        image:'b3.jpeg',
    },
     {
        id:4,
        name:'Stylish Black Bucket Bag (Cat Handle Design)',
        price:'₹1,599',
        image:'b4.jpeg',
    },
     {
        id:5,
        name:'Pink Floral Embroidered Handbag',
        price:'₹1,749',
        image:'b5.jpeg',
    },
     {
        id:6,
        name:'Premimum Designer Handbag',
        price:'₹2,099',
        image:'b6.jpeg',
    },
    

]
        const [cart,setCart] = useState([]);
        const [search,setSearch] = useState("");
        const [showCart,setShowCart]= useState(false);
        const addTocart = (product) =>{
              setCart([...cart,product]);
        }
        const clearCart = () => {
        setCart([])
      }
         const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
  return (
           <div className="App">
             <nav className="navbar">
               <div className="nav-container">
                <div className="nav-logo">
                  <h2>🛍️ ShopKart</h2>
                </div>
                 <a href="">Home</a>
                 <a href="">Products</a>
                 <a href="">About</a>
                 <a href="">Contact Us</a>
                 <div className="nav-search">
                  <input type="text" placeholder='Search products' className='search-input' value={search} onChange={(e) => setSearch(e.target.value)}/>
                  <button className='search-btn'>🔍</button>
                 </div>
                 <div className="nav-icons">
                  <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
                    🛒  <span className="cart-count">{cart.length}</span>
                  </div>
                 </div>
               </div>
             </nav>
             {showCart && (
              <div className="cart-summary">
                <div className="cart-header">
                <h2>Cart Summary</h2>
                <button onClick={() => setShowCart(false)}>Close</button>
                <button onClick={clearCart}>Clear Cart</button>
                </div>
               {cart.length === 0 ? (
              <p>Your cart is Empty</p>
            ) : (
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </div>
                ))}
              </div>
            )}                
                      </div>
                    )}
                 <div className="hero">
                   <div className='hero-heading'>
                    <h1 >Online <br></br> 
                    Shopping</h1>
                    <p className='para-heading'>Best Collections choose from online</p>
                        <p className='para-desc'>
              Explore trending products, exclusive deals, and high-quality essentials all in one place. Find what you love with ease and shop with confidence.
              </p>
                    <button>Explore more!!!</button>
                    </div>
                    <div className="img">
                      <img src="hero.png" alt="" />
                    </div>
             </div> 
             <div className="product">
                  <h2>Some products</h2>
                    <div className="product-grid" id="products">
                {filteredProducts.map((product) => (
                  <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Handcrafted premium handbag for daily use and special occasions.</p>
                    <h4>{product.price}</h4>
                    <button onClick={() => addTocart(product)}>Add to cart</button>
                  </div>
                ))}

                  </div>
                  <div className="customer-review-section">
                    <h2>What our Customer says</h2>
                    <div className="review-grid">
                        <div className="review-card">
                             <h3 className="reviewr-name">Amit p.</h3>
                              <span className="stars">★★★★☆</span>
                             <p className='reviex-text'>Unbelievable product and service.Great quality at reasonable prices. I love the variety of collections available here. </p>
                        </div>
                         <div className="review-card">
                             <h3 className="reviewr-name">Neha s.</h3>
                              <span className="stars">★★★★★</span>
                             <p className='reviex-text'>Unbelievable product .Great quality at reasonable prices. I love the variety of collections available here. </p>
                        </div>
                         <div className="review-card">
                             <h3 className="reviewr-name">Tithi B.</h3>
                              <span className="stars">★★★★★</span>
                             <p className='reviex-text'>Unbelievable product and service.Great quality at reasonable prices. I love the variety of collections available here. </p>
                        </div>
                         <div className="review-card">
                             <h3 className="reviewr-name">Ved B.</h3>
                             <span className="stars">★★★★☆</span>
                             <p className='reviex-text'>Unbelievable product and service.Great quality at reasonable prices. I love the variety of collections available here. </p>
                        </div>
                         <div className="review-card">
                             <h3 className="reviewr-name">Tej S.</h3>
                               <span className="stars">★★★★★</span>
                             <p className='reviex-text'>Unbelievable product and service.Great quality at reasonable prices. I love the variety of collections available here. </p>
                        </div>
                         <div className="review-card">
                             <h3 className="reviewr-name">Payal A.</h3>
                               <span className="stars">★★★★★</span>
                             <p className='reviex-text'>Unbelievable product and service.Great quality at reasonable prices. I love the variety of collections available here. </p>
                        </div>
                        
                    </div>
                  </div>
                  <div className="footer">
                       <div className="footer-top">
                        <div className="footer-col">
                            <h3>ShopKart</h3>
                            <p>Your one-stop shop for fashion,gadgets & everyday essentials.</p>
                        </div>
                        <div className="footer-col">
                          <h4>Quick Links</h4>
                          <a href="#">Home</a>
                          <a href="#">Products</a>
                          <a href="#">About</a>
                          <a href="#">Contact</a>
                        </div>
                        <div className="footer-col">
                           <h4>Support</h4>
                            <a href="#">Help Center</a>
                            <a href="#">Shipping & Returns</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                           <div className="footer-col">
                          <h4>Stay Updated</h4>
                          <p>Subscribe for latest offers & updates.</p>
                          <div className="footer-newsletter">
                            <input type="email" placeholder="Enter your email" />
                            <button>Subscribe</button>
                          </div>
                       </div>
                  </div>
                          <div className="footer-bottom">
              <p>© 2026 ShopKart. All rights reserved.</p>
              <p>Made with ❤️ in India.</p>
           </div>
             </div>
           </div>
          </div>
  )
}

export default App
