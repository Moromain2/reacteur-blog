interface link_props {
    label: string;
    url: string;
    new_window?: boolean;
}

const Link = ({label, url, new_window}: link_props) => {
    if (new_window === true) {
        return <a href={url} target="_blank">{label}</a>
    } else {
        return <a href={url}>{label}</a>
    }
}

export default Link;