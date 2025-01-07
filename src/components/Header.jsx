import React from 'react';
    import './Header.css';

    function Header({ obstacle }) {
      return (
        <div className="header">
          <h2>Gate</h2>
          <p>Obstacle {obstacle} of 10</p>
        </div>
      );
    }

    export default Header;
