import React from 'react';
    import './ScoreRow.css';

    function ScoreRow({ maneuverScores, totalPenalty, finalScore }) {
      const numObstacles = Math.max(...Object.keys(maneuverScores).map(Number), 5); // Default to 5 obstacles if none are defined yet

      return (
        <div className="score-row">
          {/* Render obstacle columns with scores or placeholders */}
          {Array.from({ length: numObstacles }, (_, i) => i + 1).map((obstacleNum) => (
            <div key={obstacleNum} className="score-column">
              <div className="obstacle-label">Obstacle {obstacleNum}</div>
              <div className="obstacle-score">
                {maneuverScores[obstacleNum] !== undefined ? (
                  maneuverScores[obstacleNum].toFixed(1)
                ) : (
                  <span className="placeholder">--</span>
                )}
              </div>
            </div>
          ))}
          {/* Render penalty total column */}
          <div className="score-column">
            <div className="obstacle-label">Penalty Total</div>
            <div className="obstacle-score">
              {totalPenalty > 0 ? (
                totalPenalty.toFixed(1)
              ) : (
                <span className="placeholder">--</span>
              )}
            </div>
          </div>
          {/* Render final score column */}
          <div className="score-column">
            <div className="obstacle-label">Overall Score</div>
            <div className="obstacle-score final-score">
              {finalScore !== 0 ? (
                finalScore.toFixed(1)
              ) : (
                <span className="placeholder">--</span>
              )}
            </div>
          </div>
        </div>
      );
    }

    export default ScoreRow;
