import { Formation } from '../types/index';

export const sampleFormations: Formation[] = [
  // 11-a-side formations
  {
    id: 'f1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6',
    name: '4-4-2 Classic',
    system: '4-4-2',
    squadSize: 11,
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
    squadSize: 11,
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
    squadSize: 11,
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
    squadSize: 11,
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
  },
  
  // 9-a-side formations
  {
    id: 'f5e6f7a8-b9c0-d1e2-f3a4-b5c6d7e8f9a0',
    name: '3-3-2',
    system: '3-3-2',
    squadSize: 9,
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'CB', x: 30, y: 22 },
      { position: 'CB', x: 50, y: 18 },
      { position: 'CB', x: 70, y: 22 },
      { position: 'LM', x: 25, y: 50 },
      { position: 'CM', x: 50, y: 48 },
      { position: 'RM', x: 75, y: 50 },
      { position: 'ST', x: 40, y: 80 },
      { position: 'ST', x: 60, y: 80 }
    ],
    description: 'Solid 9-a-side formation with three defenders and two strikers',
    tactics: [
      'Strong defensive shape',
      'Midfield control in center',
      'Two strikers partnership'
    ]
  },
  {
    id: 'f6f7a8b9-c0d1-e2f3-a4b5-c6d7e8f9a0b1',
    name: '2-3-3',
    system: '2-3-3',
    squadSize: 9,
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'CB', x: 35, y: 22 },
      { position: 'CB', x: 65, y: 22 },
      { position: 'LM', x: 25, y: 50 },
      { position: 'CM', x: 50, y: 48 },
      { position: 'RM', x: 75, y: 50 },
      { position: 'LW', x: 25, y: 75 },
      { position: 'ST', x: 50, y: 82 },
      { position: 'RW', x: 75, y: 75 }
    ],
    description: 'Attacking 9-a-side formation with wide players',
    tactics: [
      'Width in attack',
      'Two solid center backs',
      'Central striker supported by wingers'
    ]
  },
  {
    id: 'f7a8b9c0-d1e2-f3a4-b5c6-d7e8f9a0b1c2',
    name: '3-2-3',
    system: '3-2-3',
    squadSize: 9,
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'CB', x: 30, y: 22 },
      { position: 'CB', x: 50, y: 18 },
      { position: 'CB', x: 70, y: 22 },
      { position: 'CM', x: 40, y: 48 },
      { position: 'CM', x: 60, y: 48 },
      { position: 'LW', x: 25, y: 75 },
      { position: 'ST', x: 50, y: 82 },
      { position: 'RW', x: 75, y: 75 }
    ],
    description: 'Balanced 9-a-side with three at the back',
    tactics: [
      'Three center backs for stability',
      'Two central midfielders',
      'Attacking width with wingers'
    ]
  },
  
  // 7-a-side formations
  {
    id: 'f8b9c0d1-e2f3-a4b5-c6d7-e8f9a0b1c2d3',
    name: '2-3-1',
    system: '2-3-1',
    squadSize: 7,
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'CB', x: 35, y: 25 },
      { position: 'CB', x: 65, y: 25 },
      { position: 'LM', x: 25, y: 52 },
      { position: 'CM', x: 50, y: 50 },
      { position: 'RM', x: 75, y: 52 },
      { position: 'ST', x: 50, y: 82 }
    ],
    description: 'Classic 7-a-side formation with two defenders and lone striker',
    tactics: [
      'Two solid defenders',
      'Strong midfield presence',
      'Support striker from midfield'
    ]
  },
  {
    id: 'f9c0d1e2-f3a4-b5c6-d7e8-f9a0b1c2d3e4',
    name: '2-2-2',
    system: '2-2-2',
    squadSize: 7,
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'CB', x: 35, y: 25 },
      { position: 'CB', x: 65, y: 25 },
      { position: 'CM', x: 40, y: 52 },
      { position: 'CM', x: 60, y: 52 },
      { position: 'ST', x: 40, y: 82 },
      { position: 'ST', x: 60, y: 82 }
    ],
    description: 'Balanced 7-a-side with two strikers',
    tactics: [
      'Balanced shape throughout',
      'Two strikers working together',
      'Central midfield partnership'
    ]
  },
  {
    id: 'fad1e2f3-a4b5-c6d7-e8f9-a0b1c2d3e4f5',
    name: '3-2-1',
    system: '3-2-1',
    squadSize: 7,
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'CB', x: 30, y: 25 },
      { position: 'CB', x: 50, y: 22 },
      { position: 'CB', x: 70, y: 25 },
      { position: 'CM', x: 40, y: 52 },
      { position: 'CM', x: 60, y: 52 },
      { position: 'ST', x: 50, y: 82 }
    ],
    description: 'Defensive 7-a-side with three at the back',
    tactics: [
      'Three defenders for security',
      'Two central midfielders',
      'Lone striker'
    ]
  },
  
  // 5-a-side formations
  {
    id: 'fbe2f3a4-b5c6-d7e8-f9a0-b1c2d3e4f5a6',
    name: '1-2-1',
    system: '1-2-1',
    squadSize: 5,
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'CB', x: 50, y: 30 },
      { position: 'CM', x: 35, y: 55 },
      { position: 'CM', x: 65, y: 55 },
      { position: 'ST', x: 50, y: 82 }
    ],
    description: 'Classic 5-a-side diamond formation',
    tactics: [
      'One defender sweeps behind',
      'Two midfielders control center',
      'Lone striker up front'
    ]
  },
  {
    id: 'fcf3a4b5-c6d7-e8f9-a0b1-c2d3e4f5a6b7',
    name: '2-1-1',
    system: '2-1-1',
    squadSize: 5,
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'CB', x: 35, y: 30 },
      { position: 'CB', x: 65, y: 30 },
      { position: 'CM', x: 50, y: 55 },
      { position: 'ST', x: 50, y: 82 }
    ],
    description: 'Defensive 5-a-side with two defenders',
    tactics: [
      'Two defenders provide cover',
      'Central midfielder links play',
      'Target striker'
    ]
  },
  {
    id: 'fda4b5c6-d7e8-f9a0-b1c2-d3e4f5a6b7c8',
    name: '1-1-2',
    system: '1-1-2',
    squadSize: 5,
    positions: [
      { position: 'GK', x: 50, y: 5 },
      { position: 'CB', x: 50, y: 30 },
      { position: 'CM', x: 50, y: 55 },
      { position: 'ST', x: 40, y: 82 },
      { position: 'ST', x: 60, y: 82 }
    ],
    description: 'Attacking 5-a-side with two strikers',
    tactics: [
      'Single defender',
      'Midfielder supports attack',
      'Two strikers partnership'
    ]
  }
];

export const getFormationById = (id: string): Formation | undefined => {
  return sampleFormations.find(formation => formation.id === id);
};

export const getFormationsBySquadSize = (squadSize: number): Formation[] => {
  return sampleFormations.filter(formation => formation.squadSize === squadSize);
};
