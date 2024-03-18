const BlogPost = ({title, subtitle, body}) => {
    return (
        <article className="card-container post-container">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div className="image-placeholder"></div>
            <p>{body}</p>
        </article>
    )
}

export default BlogPost;