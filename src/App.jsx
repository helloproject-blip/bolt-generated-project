import React, { useState, useEffect } from 'react';
    import Header from './components/Header';
    import ManeuverScore from './components/ManeuverScore';
    import Penalties from './components/Penalties';
    import Navigation from './components/Navigation';
    import NavBar from './components/NavBar';
    import ScoreRow from './components/ScoreRow';
    import './App.css';

    function App() {
      const [currentObstacle, setCurrentObstacle] = useState(1);
      const [currentScore, setCurrentScore] = useState(0);
      const [appliedPenalties, setAppliedPenalties] = useState([]);
      const [maneuverScores, setManeuverScores] = useState({});
      const [totalPenalty, setTotalPenalty] = useState(0);
      const [finalScore, setFinalScore] = useState(0);

      // Calculate final score whenever maneuver scores or total penalty changes
      useEffect(() => {
        const calculateFinalScore = () => {
          const totalManeuverScore = Object.values(maneuverScores).reduce(
            (sum, score) => sum + score,
            0
          );
          const newFinalScore = totalManeuverScore - totalPenalty;
          setFinalScore(newFinalScore);
        };

        calculateFinalScore();
      }, [maneuverScores, totalPenalty]);

      // Handle score changes for the current obstacle
      const handleScoreChange = (newScore) => {
        setCurrentScore(newScore);
        setManeuverScores({ ...maneuverScores, [currentObstacle]: newScore });
      };

      // Add a penalty
      const handleAddPenalty = (penalty) => {
        const newPenalties = [...appliedPenalties, penalty];
        setAppliedPenalties(newPenalties);
        setTotalPenalty(newPenalties.reduce((sum, p) => sum + p, 0));
      };

      // Remove a penalty
      const handleRemovePenalty = (penaltyToRemove) => {
        const newPenalties = appliedPenalties.filter((p) => p !== penaltyToRemove);
        setAppliedPenalties(newPenalties);
        setTotalPenalty(newPenalties.reduce((sum, p) => sum + p, 0));
      };

      // Move to the next obstacle
      const handleNextObstacle = () => {
        setCurrentObstacle(currentObstacle + 1);
        setCurrentScore(maneuverScores[currentObstacle + 1] || 0);
        setAppliedPenalties([]);
      };

      // Move to the previous obstacle
      const handlePreviousObstacle = () => {
        if (currentObstacle > 1) {
          setCurrentObstacle(currentObstacle - 1);
          setCurrentScore(maneuverScores[currentObstacle - 1] || 0);
          setAppliedPenalties([]);
        }
      };

      return (
        <div className="app">
          <NavBar />
          <Header obstacle={currentObstacle} />
          <div className="content">
            <ManeuverScore
              score={currentScore}
              onScoreChange={handleScoreChange}
              penalties={appliedPenalties}
              onRemovePenalty={handleRemovePenalty}
            />
            <Penalties onPenaltyChange={handleAddPenalty} />
          </div>
          <Navigation onNext={handleNextObstacle} onPrevious={handlePreviousObstacle} />
          <ScoreRow
            maneuverScores={maneuverScores}
            totalPenalty={totalPenalty}
            finalScore={finalScore}
          />
        </div>
      );
    }

    export default App;
