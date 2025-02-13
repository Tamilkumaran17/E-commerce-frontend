import React, { useContext, useState } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import Remove_icon from '../Assets/cart_cross_icon.png';
import { toast } from 'react-toastify';

const CartItems =()=>{
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext);

    const [quantities,setQuantities] = useState(cartItems);

    const increment = (id) =>{
        setQuantities((prev)=>({
            ...prev,
            [id]: (prev[id]||0) + 1,
        }));
    };

    const decrement = (id)=>{
        setQuantities((prev) =>{
            if(prev[id] >  1) return { ...prev, [id]: prev[id]-1 };
            else{
                const updated = {...prev};
                // delete updated[id];
                return updated;
            }
        })
    };

    const handleRemove = (id) => {
        removeFromCart(id); // Remove from context
        setQuantities((prev) => {
            const updatedQuantities = { ...prev };
            delete updatedQuantities[id]; // Ensure the total updates correctly
            return updatedQuantities;
        });
        toast.error("Removed")
        
    };
    

    const calculateTotal = ()=>{
        return all_product.reduce((tot,item)=>{
            return tot + (quantities[item.id] || 0) * item.new_price;
        },0);
    };


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
                               <div className="quantity-controls">
                                    <button onClick={() => decrement(e.id)} className='minus'>-</button>
                                    <span className="quantity">{quantities[e.id] || 0}</span>
                                    <button onClick={() => increment(e.id)} className='plus'>+</button>
                                </div>
                                <p style={{fontWeight:'bold'}}>₹{e.new_price * (quantities[e.id] || 0)}</p>
                                <img className='removeicon' src={Remove_icon} onClick={()=>{handleRemove(e.id)}} alt="" />
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
                                <p>₹{calculateTotal()}</p>
                            </div>
                            <hr />
                            <div className="total-item">
                                <p>Shipping fee</p>
                                <p>free</p>
                            </div>
                            <hr />
                            <div className="total-item">
                                <h3>Total</h3>
                                <h3>₹{calculateTotal()}</h3>
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