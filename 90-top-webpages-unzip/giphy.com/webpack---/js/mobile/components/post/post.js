import decode from 'decode-html'
export const PostTitle = ({ post }) => <h1> {post.title} </h1>

export const PostAuthor = ({ post }) => (
    <p>
        BY
        <span className="post-author"> {post.author.display_name} </span>
    </p>
)

export const PostBody = ({ post: { content } }) => (
    <div
        dangerouslySetInnerHTML={{
            __html: decode(content),
        }}
    />
)
