import React from "react";
import Post from "./Post";

class Posts extends React.Component {

  render() {
    
    if (this.props.posts.length > 0) {
      return (
      <div className="posts" >
        {this.props.posts.map((el) => (
          <Post onDelete={this.props.onDelete} post={el} key={el.id} />
        ))}
      </div>
      );
    } else {
      return(
        <div className="posts">
          <h4>Add post</h4>
        </div>
      )
      
    }
  }
}

export default Posts;
