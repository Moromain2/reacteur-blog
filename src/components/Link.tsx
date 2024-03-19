interface link_props {
    label: string;
    url: string;
    new_window?: boolean;
}

const Link = ({label, url, new_window}: link_props) => {
    return (
        // Ternary condition to add target="_blank" if new_window is set to true
        new_window === true ?
         <a href={url} target="_blank">{label}</a> :
         <a href={url}>{label}</a>
    )
}

export default Link;