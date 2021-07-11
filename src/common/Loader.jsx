import ContentLoader from "react-content-loader";

const Loader = (props) => {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={460}
            viewBox="0 0 400 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}>
            <circle cx="169" cy="171" r="132"/>
            <rect x="281" y="374" rx="0" ry="0" width="1" height="1"/>
            <rect x="23" y="309" rx="0" ry="0" width="296" height="85"/>
            <circle cx="40" cy="275" r="23"/>
            <circle cx="288" cy="274" r="20"/>
        </ContentLoader>);
}

export default Loader;