import React from 'react';
    import {
      RedoDot,
      Minus,
      ChevronsRight,
      Disc,
      Frame,
      TextCursor,
      Waypoints,
      MoreHorizontal,
      RectangleVertical,
      Waves,
      ShoppingBag,
      Spline,
      RotateCcw,
      Milestone,
      PersonStanding,
      TrafficCone,
      Dice1,
      Route,
    } from 'lucide-react';
    import Card from '../components/Card';
    import NavBar from '../components/NavBar';
    import './ObstaclesPage.css';
    
    function generateGradientColor(hexColor) {
      const color = hexColor.substring(1);
      const r = parseInt(color.substring(0, 2), 16);
      const g = parseInt(color.substring(2, 4), 16);
      const b = parseInt(color.substring(4, 6), 16);
    
      const newR = (r + 50) % 255;
      const newG = (g + 50) % 255;
      const newB = (b + 50) % 255;
    
      const newColor = `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
      return newColor;
    }

    const obstacles = [
      { name: 'Ride over poles', icon: <RedoDot />, color: '#f8e71c' },
      { name: 'Jump', icon: <Minus />, color: '#d50000' },
      { name: 'Sidepass', icon: <ChevronsRight />, color: '#d81b60' },
      { name: 'Lime Circle', icon: <Disc />, color: '#00c853' },
      { name: 'Square', icon: <Frame />, color: '#0091ea' },
      { name: 'Gate', icon: <TextCursor />, color: '#651fff' },
      { name: 'Back through', icon: <Waypoints />, color: '#ff6d00' },
      { name: 'Bridge', icon: <MoreHorizontal />, color: '#ffab00' },
      { name: 'Water Hazard', icon: <RectangleVertical />, color: '#00b0ff' },
      { name: 'Simulated Water', icon: <Waves />, color: '#40c4ff' },
      { name: 'Carrying Object', icon: <ShoppingBag />, color: '#7c4dff' },
      { name: 'Drag or Pull', icon: <Spline />, color: '#ea80fc' },
      { name: 'Slicker', icon: <RotateCcw />, color: '#64dd17' },
      { name: 'Mailbox', icon: <Milestone />, color: '#ffd600' },
      { name: 'Ground Tie', icon: <PersonStanding />, color: '#ff6e40' },
      { name: 'Serpentine', icon: <TrafficCone />, color: '#00b8d4' },
      { name: 'Jog-around', icon: <Dice1 />, color: '#00e676' },
      { name: 'Jog-through', icon: <Route />, color: '#ff5252' },
    ];

    function ObstaclesPage() {
      return (
        <div>
          <NavBar />
          <div className="obstacles-page">
            {obstacles.map((obstacle) => (
              <Card
                key={obstacle.name}
                title={obstacle.name}
                icon={obstacle.icon}
                color={obstacle.color}
                gradientColor={generateGradientColor(obstacle.color)}
              />
            ))}
          </div>
        </div>
      );
    }

    export default ObstaclesPage;
