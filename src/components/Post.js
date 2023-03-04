import React from "react";
import { FiX } from "react-icons/fi";


class Post extends React.Component {

  post = this.props.post

  
  render() {
    return(
      <div className="post">
        <div className="post-header">
          <h3>{this.post.title}</h3>
          <span>
            <FiX className="icon" onClick={() => {this.props.onDelete(this.post.id)}}/>
          </span>
        </div>
        <p>{this.post.body}</p>
        <div className="post-info">
          <span>{this.post.author}</span>
          <span>{this.post.data}</span>
        </div>
      </div>
    )
  }
  
}

export default Post;
