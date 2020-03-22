import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import './Blog.css';

// Using Link means we only rerender where its needed oppose to an <a> tag.
// Use NavLink to style links (and active links to style only links that are active)

class Blog extends Component {
    render () {
      console.log(this.props)
        return (
            <div>
              <header className="Blog">
                  <nav>
                    <ul>
                      <li><NavLink
                        to="/"
                        exact
                        activeClassName="my-active"
                        activeStyle={{
                          color: '#fa923f',
                          textDecoration: 'underline'
                        }}>Home</NavLink></li>
                      {/*can build dynamic path like this
                        pathname: this.props.match.url + '/new-post'
                        (appends path to current path)
                        this is a relative path */}
                      <li><NavLink to={{
                        pathname: '/new-post',
                        hash: '#submit',
                        search: '?quick-submit=true'
                      }}>New Post</NavLink></li>
                    </ul>
                  </nav>
              </header>
              {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
               <Route path="/" render={() => <h1>Home 2</h1>}/> */}
              <Route path="/" exact component={Posts} />
              <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;
