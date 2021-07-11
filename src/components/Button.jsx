import "./Header.css";


function Button(props) {

    return (
        <div className="Button">
            <button className="btn">{props.children}</button>
        </div>
    );
}

export default Button;
