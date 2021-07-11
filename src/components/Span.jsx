import React from "react";

const Span = React.memo(({img, name, sizes, prices, onRemoveItem, id, count}) => {

    const onHandleClick = () => {
        onRemoveItem(id);
    }

    return (
        <div className="block">
            <div className="flex">
                <div>
                    <img src={img} className="img_sushiBlock"/>
                </div>
                <div className="block-text">
                    <h3>{name}</h3>
                    <p>{sizes} грамм</p>
                </div>
                <div>
                </div>
            </div>
            <div className="PriceBlock">
                <h3>
                    {prices} $
                </h3>
            </div>
            <div>
                <span>{count}</span>
            </div>
            <div className="deleteSushi">
                <span onClick={onHandleClick}>X</span>
            </div>
        </div>
    );
})

export default Span;
