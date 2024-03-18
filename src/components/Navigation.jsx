const Navigation = ({primary_links, secondary_links}) => {
    return (
        <nav>
            <div className="container">
                <ul className="main-links">
                    {primary_links.map((link) => {
                        return (
                            <li key={link.label}><a href={link.url}>{link.label}</a></li>
                        )
                    })}
                </ul>
                <ul className="secondary-link">
                    {secondary_links.map((link) => {
                        return (
                            <li key={link.label}><a href={link.url}>{link.label}</a></li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;