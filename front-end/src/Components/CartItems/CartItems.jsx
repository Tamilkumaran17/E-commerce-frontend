import React, { useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import Remove_icon from '../Assets/cart_cross_icon.png';
const CartItems =()=>{
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    return( 
        <div className='cartitems'>
            <div className="main">
                <p>Products</p>
                <p>Title</p>
                <p>price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

                {all_product.map((e)=>{
                    if(cartItems[e.id]>0)
                    {

                        return<div>
                            <div className="format main">
                                <img src={e.image} alt="" className='product-icon' />
                                <p className='title'>{e.name}</p>
                                <p>₹{e.new_price} </p>
                                <button className='quantity'>{cartItems[e.id]} </button>
                                <p>₹{e.new_price * cartItems[e.id]} </p>
                                <img className='removeicon' src={Remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
    
                    }
                    return null;


                })}

                <div className="down">
                    <div className="total">
                        <h1>cart totals</h1>
                        <div>
                            <div className="total-item">
                                <p>Subtotal</p>
                                <p>₹{getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="total-item">
                                <p>Shipping fee</p>
                                <p>free</p>
                            </div>
                            <hr />
                            <div className="total-item">
                                <h3>Total</h3>
                                <h3>₹{getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button className='proceed'>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="promocode">
                        <p>If you have promo code, Enter it here</p>
                        <div className="promobox">
                            <input type="text" placeholder='promo code'/>
                                <button className='submit'>Submit</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CartItems