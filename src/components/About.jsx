const About = ({title, body}) => {
    return (
        <section id="about" className="card-container">
            <h2>{title}</h2>
            <div className="image-placeholder"></div>
            <p>{body}</p>
        </section>
    )
}

export default About;