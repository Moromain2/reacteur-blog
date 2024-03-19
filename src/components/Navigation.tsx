import Link from "./Link";

interface navigation_props {
    primary_links: {
        label: string;
        url: string;
    }[];
    secondary_links: {
        label: string;
        url: string;
    }[];
}

const Navigation = ({primary_links, secondary_links}: navigation_props) => {
    return (
        <nav>
            <div className="container">
                <ul className="main-links">
                    {primary_links.map((link) => {
                        return (
                            <li key={link.label}><Link label={link.label} url={link.url} /></li>
                        )
                    })}
                </ul>
                <ul className="secondary-link">
                    {secondary_links.map((link) => {
                        return (
                            <li key={link.label}><Link label={link.label} url={link.url} /></li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;