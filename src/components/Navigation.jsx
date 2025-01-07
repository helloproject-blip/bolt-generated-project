import React from 'react';
    import './Navigation.css';

    function Navigation({ onNext, onPrevious }) {
      return (
        <div className="navigation">
          <button onClick={onPrevious}>Previous</button>
          <button onClick={onNext}>Next Obstacle</button>
        </div>
      );
    }

    export default Navigation;
