import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeCartItem, plusCartItem, minusCartItem, fetchProduct } from '../redux/actions/cart';
import Preloader from './Preloader';


const Cart = () => {

    const dispatch = useDispatch();

    const { totalPrice, items, isLoaded } = useSelector(({ cart }) => cart);

    useEffect(() => {
        if (items.length === 0) dispatch(fetchProduct());
    }); 

    const onRemoveItem = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            dispatch(removeCartItem(id));
        }
    };

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };

    const handleClick = (e) => {
        if (items.length === 0) e.preventDefault()
    }

    return (

        <div className="content">

            <div className="container">
                <div className="cart">
                    <div className="content__items">
                        {!isLoaded ? <Preloader /> : null}
                        {
                            items.length > 0
                                ? items.map(item => <CartItem key={item.id}
                                    onRemove={onRemoveItem}
                                    onMinus={onMinusItem}
                                    onPlus={onPlusItem}
                                    {...item} />)
                                : (<p className='content__items-empty'>Your Cartlist is empty</p>)
                        }
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom-details">
                            <span> {totalPrice || 0} € </span>
                        </div>
                        <div className="cart__bottom-button">
                            <NavLink to="/shipping" onClick={handleClick}><button disabled={items.length === 0} className="btn">BUY</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;