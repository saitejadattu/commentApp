import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}
  onSubmit = event => {
    event.preventDefault()
    const {name, comment, commentList} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    onAddName = event => {
      this.setState({name: event.target.value})
    }
    onAddComment = event => {
      this.setState({comment: event.target.value})
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }
  render() {
    const {name, comment, commentList} = this.state
    return (
      <div className="bg-container">
        <form className="input-form-container" onClick={this.onSubmit}>
          <h1 className="heading">Comments</h1>
          <p className="para">Say somthing about 4.0 Technologies</p>
          <div>
            <input
              value={name}
              className="name-input"
              placeholder="Your Name"
              onChange={this.onAddName}
            />
          </div>
          <textarea
            cols="50"
            rows="10"
            value={comment}
            className="comment-input"
            placeholder="Your Comment"
            onChange={this.onAddComment}
          ></textarea>
          <div>
            <button type="submit">Add Comment</button>
          </div>
          <hr className="line" />
          <div className="para">
            <p className="para">
              <p className="ancor-text">0</p> Comments {name}
              {comment}
            </p>
          </div>
        </form>
        <ul className="un-ordered-list">
          {commentList}
        </ul>
      </div>
    )
  }
}
// commentList.map(eachitem => (
//             <CommentItem key={eachitem.id} eachitem={eachitem} />
//           ))
export default Comments
