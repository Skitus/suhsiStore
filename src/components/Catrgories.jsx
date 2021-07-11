import "./Main.css";
import classNames from "classnames/bind";


function Categories({categories, onClickItem, activeItem}) {

    return (
        <div className="Categories">
            <div onClick={() => onClickItem(null)}
                 className={classNames({
                     active: activeItem === null
                 })}>Все</div>
            {
                categories.map((e, index) => <div
                    key = {`${e}_${index}`}
                    onClick={() => onClickItem(index)}
                    className={classNames({
                        active: activeItem === index
                    })}
                >{e}</div>)
            }
        </div>
    );
}

export default Categories;
