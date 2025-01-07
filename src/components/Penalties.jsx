import React from 'react';
    import './Penalties.css';

    function Penalties({ onPenaltyChange }) {
      const penalties = [0.5, 1, 3, 5];

      return (
        <div className="penalties">
          <h3>Penalties</h3>
          <div className="penalty-buttons">
            {penalties.map((penalty) => (
              <button key={penalty} onClick={() => onPenaltyChange(penalty)}>
                {penalty}
              </button>
            ))}
          </div>
          <div className="penalty-info">
            <button className="disqualify-button">Disqualify Entry</button>
          </div>
        </div>
      );
    }

    export default Penalties;
