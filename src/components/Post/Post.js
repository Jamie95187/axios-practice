import React from 'react';
// import { withRouter } from 'react-router-dom';
import './Post.css';

// withRouter makes this component Route aware, to access the props from Posts

const post = (props) => (
  <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
          <div className="Author">{props.author}</div>
      </div>
  </article>
);

// export default withRouter(post);

export default post;
