import React from 'react';
import '.Products.css';
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

function Products() {
     return (
        <div className="products-page">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
