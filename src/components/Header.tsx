interface header_props {
    title: string;
    baseline: string;
}

const Header = ({title, baseline}: header_props) => {
    return (
        <header className="container">
            <h1>{title}</h1>
            <p>{baseline}</p>
        </header>
    )
}

export default Header;