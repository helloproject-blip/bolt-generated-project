import React from 'react';
    import { Link } from 'react-router-dom';
    import './NavBar.css';

    function NavBar() {
      return (
        <nav className="navbar">
          <Link to="/">Judging App</Link>
          <Link to="/obstacles">Obstacles</Link>
        </nav>
      );
    }

    export default NavBar;
