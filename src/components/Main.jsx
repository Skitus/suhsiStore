import "./Main.css";
import Categories from "./Catrgories";
import MenuSort from "./MenuSort";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {setCategory, setSortBy} from "../redux/filter";
import PizzaBlock from "./Pizzablock";
import {fetchSushi} from "../redux/sushi";
import Loader from "../common/Loader";
import {addSushiToCart} from "../redux/cart";

const categories = ['Гунканы', 'Ролы', 'Острые', 'Драконы', 'Гарячие'];
const setItems = [{name: 'популярности', type: 'rating'}, {name: 'цене', type: 'price'}, {
    name: 'алфавиту',
    type: 'name'
}];

function Main() {
    const dispatch = useDispatch();
    const items = useSelector(({sushi}) => sushi.items);
    const isLoaded = useSelector(({sushi}) => sushi.isLoading);

    const {category, sortBy} = useSelector(({filter}) => filter);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    const onSelectSortBy = React.useCallback((sort) => {
        dispatch(setSortBy(sort))
    }, []);

    const handlerSushiToCart = (obj) => {
        dispatch(addSushiToCart(obj));
    }

    React.useEffect(() => {
        dispatch(fetchSushi(category, sortBy));
    }, [category, sortBy]);

    return (
        <div className="Main">
            <div className="flex-main">
                <Categories activeItem={category} categories={categories} onClickItem={onSelectCategory}/>
                <MenuSort activeType={sortBy} items={setItems} onClickType={onSelectSortBy}/>
            </div>
            <div className="sushi_flex">
                {
                    isLoaded ? items.map((obj) => (
                        <PizzaBlock key={obj.id}
                                    id={obj.id}
                                    desc={obj.description}
                                    img={obj.imageUrl}
                                    name={obj.name}
                                    prices={obj.price}
                                    sizes={obj.sizes}
                                    addSushi={handlerSushiToCart}/>)) : Array(8).fill(<Loader/>)
                }
            </div>
        </div>
    );
}

export default Main;
