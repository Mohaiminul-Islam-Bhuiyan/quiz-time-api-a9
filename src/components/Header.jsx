import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link 
          to ="/" 
          className="btn btn-ghost normal-case text-xl">Quiz Time</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link to ="/topic">Topic</Link></li>
            <li><Link to ="/stat">Statistics</Link></li>
            <li><Link to ="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default Header;