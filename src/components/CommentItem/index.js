// Write your code here
const CommentItem = () => {
  const {eachitem} = props
  const {name, comment, id} = eachitem
  let initial = name.slice(0, 1)
  return (
    <li>
      <p clasName="initial-name">{initial}</p>
      <h1 clasName="commenter-name">{name}</h1>
      <p clasName="commenter-comment">{comment}</p>
    </li>
  )
}

export default CommentItem
