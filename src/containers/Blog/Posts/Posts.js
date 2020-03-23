import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

// Navigate programmatically by using the push method to push to the history stack
// of the props from posts (inside postSelectedHandler)

class Posts extends Component {
  state = {
    posts: []
  }

  postSelectedHandler = (id) => {
    this.props.history.push("/posts/" + id)
    // this.props.history.push({pathname: '/posts/' + id})
  }

  componentDidMount () {
    console.log(this.props)
    // Happens asynchronously
    // const post = axios.get('https://jsonplaceholder.typicode.com/posts') wont work
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return{
            ...post,
            author: 'Jamie'
          }
        })
        this.setState({posts: updatedPosts})
        //console.log(response);
      })
      .catch(error => {
        console.log(error);
        // this.setState({error: true})
      })
  }

  render(){
      let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
      if(!this.state.error){
        posts = this.state.posts.map(post => {
            return(
            // <Link to={'/posts/' + post.id} >
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}/>
            // </Link>
          );
        });
      return(
        <div>
          <section className="Posts">
            {posts}
          </section>
            <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
        </div>
      );
    }
  };

};

export default Posts;
