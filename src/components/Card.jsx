import React from 'react';
    import './Card.css';
    
    function Card({ title, icon, color, gradientColor }) {
      const gradientStyle = {
        background: `linear-gradient(to bottom, ${color}80, ${gradientColor}80)`,
      };
    
      return (
        <div className="card" style={gradientStyle}>
          <div className="card-pattern" />
          <div className="card-icon">{icon}</div>
          <div className="card-title">{title}</div>
        </div>
      );
    }
    
    export default Card;
