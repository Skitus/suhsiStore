import "./Cart.css";
import {useDispatch, useSelector} from "react-redux";
import EmptyCage from "./EmptyCage";
import {clearSushi, removeCartItem} from "../redux/cart";
import {Link} from "react-router-dom";
import Span from "./Span";
import React from "react";

const Cart = (props) => {
    const dispatch = useDispatch();
    const {totalPrice, totalCount, items} = useSelector(({cart}) => cart);

    const pizzasGroup = Object.keys(items).map(key => {
        return {
            key: items[key].items[0],
            count: items[key].items.length
        };
    });


    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотите удалить пиццу')) {
            dispatch(removeCartItem(id));
        }
    }

    const clearItems = () => {
        if (window.confirm('Вы действительно хотите очистить корзину')) {
            dispatch(clearSushi());
        }
    }
    return (
        <div className="cart">
            {totalCount ? <div className="flex-cart">
                <div className="flex-cart-cage">
                    <div><h2>Корзина</h2></div>
                    <div className="clearCage" onClick={clearItems}><p> Очистить Корзину </p></div>
                </div>
                <div className="sushiBlock">
                    <div className="flex-blockSushi">
                        {
                            pizzasGroup.map(obj => <Span id={obj.key.id} sizes={obj.key.sizes} prices={obj.key.prices}
                                                         onRemoveItem={onRemoveItem} img={obj.key.img}
                                                         name={obj.key.name} count = {obj.count}
                            />)
                        }
                    </div>
                    <div className="flex-cart-cage">
                        <div><h2>Всего заказано: <b><i>{totalCount}</i></b> набора</h2></div>
                        <div><h2>Сумма заказа<b><i> {totalPrice}</i></b> $</h2></div>
                    </div>
                    <div className="flex-cart-cage">
                        <Link to="/">
                            <button className="btns">Вернуться назад</button>
                        </Link>
                        <button className="btnsk" onClick={() => alert('Спасибо за опкупку')}>Оплатить Сейчас</button>
                    </div>
                </div>
            </div> : <EmptyCage/>
            }
        </div>
    );
}
export default Cart;