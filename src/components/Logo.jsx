import "./Header.css";
import sushiLogo from "./images/sushi.svg";

function Logo() {
    return (
        <div className="Logo">
            <div className="flex-logo">
                <div>
                    <img src={sushiLogo} className="img"/>
                </div>
                <div>
                    <h2>React Sushi</h2>
                    <p>самые вкусные суши во вселенной</p>
                </div>
            </div>
        </div>
    );
}

export default Logo;
