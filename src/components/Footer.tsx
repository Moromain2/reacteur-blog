import Link from './Link';

interface footer_props {
    tool_name: string;
    tool_url: string;
    school_name: string;
    school_url: string;
    student_name: string;
    student_url: string;
}

const Footer = ({tool_name, tool_url, school_name, school_url, student_name, student_url}: footer_props) => {
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