import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
// Want to import NewPost to load it dynamically only when its needed (Lazy Loading). Loaded when needed
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

// React 16.6.0 and above. User can use a lazy loader to render only when necessary. Async loading and rendering
// const Posts = React.lazy(() => import('./Posts/Posts'));
// import Suspence from React
// <Route path='/posts' render={() => <Suspence fallback={<div>Loading...</div>}><Posts /></Suspence>} />

const AsyncNewPost = asyncComponent(() => {
  // only importing this when './NewPost/NewPost' is needed
  return import('./NewPost/NewPost');
});

// Using Link means we only rerender where its needed oppose to an <a> tag.
// Use NavLink to style links (and active links to style only links that are active)
// Switch allows to only render one of the routes

// You work with the react router by controlling the way you render its components.
// If the route isn't rendered, you can't reac that route, the definition isn't rendered
// so the component connected to it can't be loaded.

class Blog extends Component {
  state = {
    auth: true
  }
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
                {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                <Route path="/posts" component={Posts} />
                {/*This should catch all the unknown paths and render the not found message. Good to use to catch 404 error routes*/}
                <Route render={() => <h1>Not found</h1>}/>
                {/*<Redirect from="/" to="/posts/" />*/}
                {/* <Route path="/" component={Posts} /> */}
              </Switch>
            </div>
        );
    }
}

export default Blog;
