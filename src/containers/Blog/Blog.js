import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import './Blog.css';

// Using Link means we only rerender where its needed oppose to an <a> tag.
// Use NavLink to style links (and active links to style only links that are active)
// Switch allows to only render one of the routes

class Blog extends Component {
    render () {
        return (
            <div>
              <header className="Blog">
                  <nav>
                    <ul>
                      <li><NavLink
                        to="/posts/"
                        exact
                        activeClassName="my-active"
                        activeStyle={{
                          color: '#fa923f',
                          textDecoration: 'underline'
                        }}>Posts</NavLink></li>
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
               <Switch>
                <Route path="/new-post" component={NewPost} />
                <Route path="/posts" component={Posts} />
                <Redirect from="/" to="/posts/" />
                {/* <Route path="/" component={Posts} /> */}
              </Switch>
            </div>
        );
    }
}

export default Blog;
