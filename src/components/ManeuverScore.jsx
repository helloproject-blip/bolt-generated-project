import React from 'react';
    import PenaltyDisplay from './PenaltyDisplay';
    import './ManeuverScore.css';

    function ManeuverScore({ score, onScoreChange, penalties, onRemovePenalty }) {
      const handleIncrement = () => {
        onScoreChange(score + 0.5);
      };

      const handleDecrement = () => {
        onScoreChange(score - 0.5);
      };

      return (
        <div className="maneuver-score">
          <h3>Maneuver Score - Obstacle 1</h3>
          <div className="score-controls">
            <button onClick={handleDecrement}>-</button>
            <span>{score.toFixed(1)}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <PenaltyDisplay penalties={penalties} onRemovePenalty={onRemovePenalty} />
        </div>
      );
    }

    export default ManeuverScore;
