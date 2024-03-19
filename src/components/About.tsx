interface about_props {
    title: string;
    body: string;
}

const About = ({title, body}: about_props) => {
    return (
        <section id="about" className="card-container">
            <h2>{title}</h2>
            <div className="image-placeholder"></div>
            <p>{body}</p>
        </section>
    )
}

export default About;