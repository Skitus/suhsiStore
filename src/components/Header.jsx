import "./Header.css";
import Logo from "./Logo";
import Button from "./Button";
import Main from "./Main";
import {Link, Route} from 'react-router-dom';
import Cart from "./Cart";
import {useSelector} from "react-redux";

function Header(props) {
    const {totalCount, totalPrice} = useSelector(({cart}) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount
    }));

    return (
        <div className="header">
            <div className="flex-header">
                <Link to="/">
                    <Logo/>
                </Link>
                <Link to="/cart">
                    <Button>{`${totalPrice} $ | ${totalCount} шт.`}</Button>
                </Link>
            </div>
            <Route path="/" component={Main} exact></Route>
            <Route path="/cart" component={Cart} exact></Route>
        </div>
    );
}

export default Header;
