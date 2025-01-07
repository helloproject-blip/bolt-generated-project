import React from 'react';
    import './Penalties.css';

    function Penalties({ onPenaltyChange, appliedPenalties }) {
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
            <p>Applied Penalties: <span className="penalty-total">Total: {appliedPenalties.toFixed(1)}</span></p>
            <button className="disqualify-button">Disqualify Entry</button>
          </div>
        </div>
      );
    }

    export default Penalties;
