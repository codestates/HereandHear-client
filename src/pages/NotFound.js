import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
  console.log(props)
  return (
    <div className="NotFound">
      <h1>Not Found Page</h1>
      <div className="NotFoundBtn">
        <Link className="textLink" to="/">
          Here & Hear
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
