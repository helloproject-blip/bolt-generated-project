import React from 'react';
    import {
      AlertTriangle,
      Anchor,
      Mail,
      ArrowLeft,
      ArrowRight,
      ChevronsRight,
      ChevronsLeft,
      ChevronRight,
      Box,
      Boxes,
      Circle,
      Droplet,
      Flag,
      RotateCcw,
      CloudRain,
      AnchorOff,
      ExternalLink,
    } from 'lucide-react';
    import Card from '../components/Card';
    import './ObstaclesPage.css';

    const obstacles = [
      { name: 'Gate', icon: <AlertTriangle /> },
      { name: 'Bridge', icon: <Anchor /> },
      { name: 'Mailbox', icon: <Mail /> },
      { name: 'Back-through', icon: <ArrowLeft /> },
      { name: 'Sidepass', icon: <ArrowRight /> },
      { name: 'Walk-over poles', icon: <ChevronsRight /> },
      { name: 'Trot-over poles', icon: <ChevronsLeft /> },
      { name: 'Lope-over poles', icon: <ChevronRight /> },
      { name: 'Drag object', icon: <Box /> },
      { name: 'Ground tie', icon: <Boxes /> },
      { name: 'Step-up box or platform', icon: <Circle /> },
      { name: 'Serpentine', icon: <Droplet /> },
      { name: 'Water box', icon: <Flag /> },
      { name: 'Carrying an object', icon: <RotateCcw /> },
      { name: '360-degree turn in a box', icon: <CloudRain /> },
      { name: 'Opening and closing a slicker', icon: <AnchorOff /> },
      { name: 'Hobble mock-up', icon: <AnchorOff /> },
      { name: 'Jump', icon: <ExternalLink /> },
    ];

    function ObstaclesPage() {
      return (
        <div className="obstacles-page">
          {obstacles.map((obstacle) => (
            <Card key={obstacle.name} title={obstacle.name} icon={obstacle.icon} />
          ))}
        </div>
      );
    }

    export default ObstaclesPage;
