import React, { useContext } from 'react';
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay =(props)=>{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return( 
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="img">
                    <img  className='main-img'src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="star">
                    <img src={star_icon} alt="" srcset="" />
                    <img src={star_icon} alt="" srcset="" />
                    <img src={star_icon} alt="" srcset="" />
                    <img src={star_icon} alt="" srcset="" />
                    <img src={star_dull_icon} alt="" srcset="" />
                    <p>{122}</p>
                </div>
                <div className="prices">
                    <div className="old-price">
                        ₹{product.old_price};
                    </div>
                    <div className="new_price">
                        ₹{product.new_price};
                    </div>
                </div>
                    <div className="description">
                    
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam animi, quae natus aspernatur esse cumque ipsam nemo. Delectus repellat odio quasi laboriosam. Ullam velit laudantium ea excepturi atque officiis non!
                    </div>
                    <div className="size">
                        <h1>Select Size</h1>
                        <div className="product-sizes">
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                                <div>XXL</div>
                        </div>
                    </div>
                    <button className='butt' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    <p className='category'><span>Category: </span>Women, T-Shirt, Crop Top</p>
                    <p className='category'><span>Tags: </span>Modern , latest</p>
                
            </div>
            

        </div>
    )
}

export default ProductDisplay