import Link from "./Link";

const UsefulLinks = ({links_array}) => {
    return (
        <div className="card-container useful-links">
            <h2>Useful Links</h2>
            <ul>
                {links_array.map(link => {
                    return (
                        <li key={link.label}><Link label={link.label} url={link.url} new_window={true}/></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UsefulLinks;