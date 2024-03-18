const BlogPost = ({title, subtitle, body}) => {
    return (
        <article className="post-container">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div className="post-image-placeholder"></div>
            <p>{body}</p>
        </article>
    )
}

export default BlogPost;