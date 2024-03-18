const About = ({title, body}) => {
    return (
        <aside>
            <h2>{title}</h2>
            <div className="about-image-placeholder"></div>
            <p>{body}</p>
        </aside>
    )
}

export default About;