import { Formation } from '../types/index';

export const sampleFormations: Formation[] = [
  {
    id: 'f1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6',
    name: '4-4-2 Classic',
    system: '4-4-2',
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'LB', x: 20, y: 25 },
      { position: 'CB', x: 40, y: 20 },
      { position: 'CB', x: 60, y: 20 },
      { position: 'RB', x: 80, y: 25 },
      { position: 'LM', x: 20, y: 55 },
      { position: 'CM', x: 40, y: 50 },
      { position: 'CM', x: 60, y: 50 },
      { position: 'RM', x: 80, y: 55 },
      { position: 'ST', x: 35, y: 80 },
      { position: 'ST', x: 65, y: 80 }
    ],
    description: 'Traditional 4-4-2 formation with two strikers and flat midfield',
    tactics: [
      'Direct play through the middle',
      'Wide play using full-backs',
      'Two strikers working in partnership'
    ]
  },
  {
    id: 'f2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7',
    name: '4-3-3 Attack',
    system: '4-3-3',
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'LB', x: 20, y: 25 },
      { position: 'CB', x: 40, y: 20 },
      { position: 'CB', x: 60, y: 20 },
      { position: 'RB', x: 80, y: 25 },
      { position: 'CDM', x: 50, y: 40 },
      { position: 'CM', x: 35, y: 55 },
      { position: 'CM', x: 65, y: 55 },
      { position: 'LW', x: 15, y: 75 },
      { position: 'ST', x: 50, y: 85 },
      { position: 'RW', x: 85, y: 75 }
    ],
    description: 'Attacking 4-3-3 with wingers and central striker',
    tactics: [
      'Width provided by wingers',
      'Central striker as focal point',
      'Defensive midfielder shields back four'
    ]
  },
  {
    id: 'f3c4d5e6-f7a8-b9c0-d1e2-f3a4b5c6d7e8',
    name: '3-5-2',
    system: '3-5-2',
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'CB', x: 30, y: 20 },
      { position: 'CB', x: 50, y: 15 },
      { position: 'CB', x: 70, y: 20 },
      { position: 'LWB', x: 15, y: 45 },
      { position: 'CM', x: 35, y: 50 },
      { position: 'CM', x: 50, y: 45 },
      { position: 'CM', x: 65, y: 50 },
      { position: 'RWB', x: 85, y: 45 },
      { position: 'ST', x: 40, y: 80 },
      { position: 'ST', x: 60, y: 80 }
    ],
    description: 'Three at the back with wing-backs providing width',
    tactics: [
      'Wing-backs push high',
      'Central midfield control',
      'Two strikers partnership'
    ]
  },
  {
    id: 'f4d5e6f7-a8b9-c0d1-e2f3-a4b5c6d7e8f9',
    name: '4-2-3-1',
    system: '4-2-3-1',
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'LB', x: 20, y: 25 },
      { position: 'CB', x: 40, y: 20 },
      { position: 'CB', x: 60, y: 20 },
      { position: 'RB', x: 80, y: 25 },
      { position: 'CDM', x: 40, y: 40 },
      { position: 'CDM', x: 60, y: 40 },
      { position: 'LM', x: 20, y: 60 },
      { position: 'CAM', x: 50, y: 65 },
      { position: 'RM', x: 80, y: 60 },
      { position: 'ST', x: 50, y: 85 }
    ],
    description: 'Modern formation with two holding midfielders and attacking midfielder',
    tactics: [
      'Double pivot in midfield',
      'Attacking midfielder supports striker',
      'Wide players cut inside'
    ]
  }
];

export const getFormationById = (id: string): Formation | undefined => {
  return sampleFormations.find(formation => formation.id === id);
};
