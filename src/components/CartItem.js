import React from 'react';
import minus from './../accets/img/minus.svg';
import plus from './../accets/img/plus.svg';
import remove from './../accets/img/delete.svg';
import { useDispatch } from 'react-redux';
import { setSelectedCount } from '../redux/actions/cart';
import Skeleton from 'react-loading-skeleton';


const CartItem = ({ id, title, description, image, price, onRemove, onMinus, onPlus, selectedCount }) => {

    const dispatch = useDispatch();

    const handleRemoveClick = () => {
        onRemove(id);
    };

    const handlePlusItem = () => {
        onPlus(id);
    };

    const handleMinusItem = () => {
        onMinus(id);
    };

    const handleChange = (e) => {
        const value = { val: e.target.value, id }
        dispatch(setSelectedCount(value))
    }

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={image || <Skeleton count={5} width={820} height={20} />}
                    alt="Product"
                />
            </div>

            <div className="cart__item-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="cart__item-count">
                <div onClick={handleMinusItem}
                    className="button cart__item-count-minus">
                    <img src={minus} alt="minus" />
                </div>

                <input className="cart__item-count-input" type='number' value={selectedCount} onChange={handleChange} />

                <div onClick={handlePlusItem}
                    className="button cart__item-count-plus">
                    <img src={plus} alt="plus" />
                </div>

            </div>

            <div className="cart__item-price">
                <b>{price} €</b>

            </div>
            <div onClick={handleRemoveClick}
                className="cart__item-remove">

                <img src={remove} alt="remove" />

            </div>
        </div>
    )
}

export default CartItem;