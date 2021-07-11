import photoEmpty from "./images/Layer 2.png";
import {Link} from "react-router-dom";

const EmptyCage = () => {
    return (
        <div className="empty">
            <div>
                <h1>Корзина пустая</h1>
                <p>Вероятней всего, вы не заказывали ещё суши. Для того, чтобы заказать суши, перейди на главную
                    страницу.</p>
                <img src={photoEmpty}/>
                <Link to="/">
                    <button>Вернуться назад</button>
                </Link>
            </div>
        </div>
    );
}

export default EmptyCage;