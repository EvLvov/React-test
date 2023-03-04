import React from 'react';
import Header from './components/Header';
import Posts from './components/Posts'
import AddPost from './components/AddPost'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Post One",
          body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio architecto sint, molestias nemo possimus corporis in cumque ipsa consequuntur quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio architecto sint, molestias nemo possimus corporis in cumque ipsa consequuntur quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio architecto sint, molestias nemo possimus corporis in cumque ipsa consequuntur quas.",
          author: "Jhon Snow",
          data: "10.02.2021",
        },
        {
          id: 2,
          title: "Post Two",
          body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio architecto sint, molestias nemo possimus corporis in cumque ipsa consequuntur quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio architecto sint, molestias nemo possimus corporis in cumque ipsa consequuntur quas.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio architecto sint, molestias nemo possimus corporis in cumque ipsa consequuntur quas.",
          author: "Jhon Snow",
          data: "10.02.2021",
        },
      ]
    };
    this.deletePost = this.deletePost.bind(this)
    this.addPost = this.addPost.bind(this)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className='container'>
            <Posts posts={this.state.posts} onDelete={this.deletePost}/>
            <AddPost onAdd={this.addPost}/>
          </div>
        </main>
      </div>
    );
  }

  deletePost(id) {
    this.setState({
      posts: this.state.posts.filter((el) => el.id !== id)
    })
  }
  
  addPost(post) {
    const id = this.state.posts.length + 1;
    this.setState({ posts: [...this.state.posts, {id, ...post}] })
  }
}

export default App;
