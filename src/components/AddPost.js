import React from "react";

const nowDate = new Intl.DateTimeFormat("ru", {day: "numeric", month: "numeric", year: "numeric"}).format(new Date()).replace(0,  "")

class AddPost extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: "",
      author: "",
      data: "" ,
    }
  }

  postAdd = {}

  render() {
    return(
      <div>
        <form ref={(el) => this.myForm = el}>
          <input placeholder="Title" onChange={(e) => this.setState({title: e.target.value})} />
          <textarea placeholder="Your post" onChange={(e) => this.setState({body: e.target.value})} rows={7}></textarea>
          <input placeholder="Author" onChange={(e) => this.setState({author: e.target.value})}/>
          <button type="button" onClick={() => {
            this.myForm.reset();
            this.postAdd = {
              title: this.state.title,
              body: this.state.body,
              author: this.state.author,
              data: `${nowDate}` 
            }
            this.props.onAdd(this.postAdd);
            this.setState({title: ""});
            this.setState({body: ""});
            this.setState({author: ""});
            this.setState({data: ""});
          }}>Add Post</button>
        </form>
      </div>
    )
  }
  
}

export default AddPost;
