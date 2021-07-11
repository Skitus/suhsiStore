import "./Main.css";
import React from "react";
import classNames from "classnames";

const PizzaBlock = ({id,img, name, prices, sizes, desc, addSushi}) => {

    const [activeSize, setActiveSize] = React.useState(0);
    const [activePrice, setActivePice] = React.useState(0);

    const onSelectSize = (index) => {
        setActiveSize(index);
        setActivePice(index);
    }

    const onClickSushi = () => {
        const obj = {
            id,
            img,
            name,
            prices:prices[activePrice],
            sizes:sizes[activeSize],
            desc,
        };
        addSushi(obj);
    }
    return (
        <div className="block_sushi">
            <img src={img} className="img_sushi"/>
            <p className="name">{name}</p>
            <p className="description">{desc}</p>
            <div className="flex-sizes">{
                sizes.map((size, index) => <span key={`${size}_${index}`}
                                                        onClick={() => onSelectSize(index)}
                                                        className={classNames({
                                                            active: activeSize === index,
                                                            disabled: !sizes.includes(size),
                                                            size: true
                                                        })}
                >{size}</span>)
            }</div>
            <div className="flex-price">
                <button className="btn-main" onClick={onClickSushi}>В корзину</button>
                <h2 className="price">{prices.map((e, index) => activePrice === index ?
                    <span key={`${e}_${index}`}>{e} $</span> : '')} </h2>
            </div>
        </div>
    );
}

export default PizzaBlock;