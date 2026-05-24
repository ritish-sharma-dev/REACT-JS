const CommentItem = ({text}) => {
  return (
    <>
       <div style={ {backgroundColor:"white",padding:"0.1rem",margin:"0.3rem"}  }>
        <p>{text}</p>
       </div>
    </>
  )
}

export default CommentItem