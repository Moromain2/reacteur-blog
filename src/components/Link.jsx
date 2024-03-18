const Link = ({label, url, new_window, header_link}) => {
    if (new_window === true) {
        return <a href={url} target="_blank">{label}</a>
    } else {
        return <a href={url}>{label}</a>
    }
}

export default Link;