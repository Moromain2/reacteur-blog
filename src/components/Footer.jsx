import Link from './Link';

const Footer = ({tool_name, tool_url, school_name, school_url, student_name, student_url}) => {
    return (
        <footer>
            <div className="container">
                Made with <Link label={tool_name} url={tool_url} new_window={true}/>{` `}
                at <Link label={school_name} url={school_url} new_window={true}/>{` `}
                by <Link label={student_name} url={student_url} new_window={true}/>
            </div>
        </footer>
    )
}

export default Footer;