import React, { useState } from 'react';
    import Header from './components/Header';
    import ManeuverScore from './components/ManeuverScore';
    import Penalties from './components/Penalties';
    import Navigation from './components/Navigation';
    import './App.css';

    function App() {
      const [obstacle, setObstacle] = useState(1);
      const [score, setScore] = useState(0);
      const [appliedPenalties, setAppliedPenalties] = useState(0);

      const handleScoreChange = (newScore) => {
        setScore(newScore);
      };

      const handlePenaltyChange = (penalty) => {
        setAppliedPenalties(appliedPenalties + penalty);
      };

      const handleNextObstacle = () => {
        setObstacle(obstacle + 1);
        setScore(0);
        setAppliedPenalties(0);
      };

      const handlePreviousObstacle = () => {
        if (obstacle > 1) {
          setObstacle(obstacle - 1);
          setScore(0);
          setAppliedPenalties(0);
        }
      };

      return (
        <div className="app">
          <Header obstacle={obstacle} />
          <div className="content">
            <ManeuverScore score={score} onScoreChange={handleScoreChange} />
            <Penalties
              onPenaltyChange={handlePenaltyChange}
              appliedPenalties={appliedPenalties}
            />
          </div>
          <Navigation
            onNext={handleNextObstacle}
            onPrevious={handlePreviousObstacle}
          />
        </div>
      );
    }

    export default App;
