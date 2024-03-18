const Header = ({title, baseline}) => {
    return (
        <header className="container">
            <h1>{title}</h1>
            <p>{baseline}</p>
        </header>
    )
}

export default Header;