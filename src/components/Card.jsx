import React from 'react';
    import './Card.css';

    function Card({ title, icon }) {
      return (
        <div className="card">
          <div className="card-icon">{icon}</div>
          <div className="card-title">{title}</div>
        </div>
      );
    }

    export default Card;
