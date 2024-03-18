const Navigation = (main_links) => {
    return (
        <nav>
            <ul className="main-links">
                {main_links.map(link => {
                    <li><a href={link.url}>{link.label}</a></li>
                })}
            </ul>
            <ul className="secondary-links">
                {secondary_links.map(link => {
                    <li><a href={link.url}>{link.label}</a></li>
                })}
            </ul>
        </nav>
    )
}

export default Navigation;