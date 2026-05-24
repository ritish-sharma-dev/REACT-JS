import CommentItem from "./CommentItem"
const PostCard = ({post,key})=>{
    return (
        <>
        <div style={{backgroundColor:"pink",padding:"2rem",margin:"1rem",borderRadius:"12px"}} id={key}>
        <h1>{post.username}</h1>
        <p>{post.content}</p>
        <p style={{ color: post.likes > 50 ? "red" : "inherit" }} >Likes : {post.likes}</p>
        <hr />
        <div>
            <h4>USER COMMENTS</h4>
            {
                post.comments.map((comment)=>{
                    return (
                        <CommentItem text={comment}/>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}

export default PostCard