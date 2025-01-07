import React from 'react';
    import { X } from 'lucide-react';
    import './PenaltyDisplay.css';

    function PenaltyDisplay({ penalties, onRemovePenalty }) {
      // Count the occurrences of each penalty
      const penaltyCounts = {};
      penalties.forEach((penalty) => {
        penaltyCounts[penalty] = (penaltyCounts[penalty] || 0) + 1;
      });

      return (
        <div className="penalty-display">
          <h4>Applied Penalties:</h4>
          <div className="penalty-list">
            {/* Display each penalty with its count and a removal button */}
            {Object.entries(penaltyCounts).map(([penalty, count]) => (
              <div key={penalty} className="penalty-item">
                <span>
                  {penalty} x {count}
                </span>
                <button
                  className="remove-penalty"
                  onClick={() => onRemovePenalty(parseFloat(penalty))}
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
          {/* Display the total of all penalties */}
          <div className="total-penalty">
            Total: <span>{penalties.reduce((a, b) => a + b, 0).toFixed(1)}</span>
          </div>
        </div>
      );
    }

    export default PenaltyDisplay;
