import { TrainingSession, Drill } from '../types/index';

export const sampleDrills: Drill[] = [
  {
    id: 'd1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6',
    name: 'Passing Triangle',
    description: 'Three players form a triangle and practice quick one-touch passing',
    duration: 10,
    category: 'technical',
    skillsFocused: ['Passing', 'First Touch', 'Communication'],
    equipment: ['Cones', 'Balls'],
    instructions: [
      'Set up three cones in a triangle, 10 yards apart',
      'One player at each cone with one ball',
      'Pass clockwise, move to next cone',
      'After 5 minutes, switch to counter-clockwise',
      'Progress to two-touch, then one-touch'
    ],
    variations: [
      'Increase distance between cones',
      'Use both feet',
      'Add a defender in the middle'
    ]
  },
  {
    id: 'd2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7',
    name: 'Dribbling Gates',
    description: 'Players dribble through small gates to improve close control',
    duration: 15,
    category: 'technical',
    skillsFocused: ['Dribbling', 'Ball Control', 'Agility'],
    equipment: ['Cones', 'Balls'],
    instructions: [
      'Set up 10-15 small gates (2 cones, 2 yards apart) in area',
      'Each player with a ball',
      'Dribble through as many gates as possible in time limit',
      'Can only go through each gate once',
      'Use different surfaces of foot'
    ]
  },
  {
    id: 'd3c4d5e6-f7a8-b9c0-d1e2-f3a4b5c6d7e8',
    name: '5v5 Possession',
    description: 'Small-sided game focusing on keeping possession',
    duration: 20,
    category: 'tactical',
    skillsFocused: ['Passing', 'Movement', 'Decision Making'],
    equipment: ['Cones', 'Balls', 'Bibs'],
    instructions: [
      'Mark out 30x30 yard area',
      '5v5 in the area',
      'Team scores a point for 10 consecutive passes',
      'Can add neutrals to make easier',
      'Rotate teams every 5 minutes'
    ]
  },
  {
    id: 'd4d5e6f7-a8b9-c0d1-e2f3-a4b5c6d7e8f9',
    name: 'Finishing Circuit',
    description: 'Rotate through different finishing scenarios',
    duration: 20,
    category: 'technical',
    skillsFocused: ['Shooting', 'Finishing', 'Movement'],
    equipment: ['Goals', 'Balls', 'Cones'],
    instructions: [
      'Set up 4 stations around penalty area',
      'Station 1: Through ball and finish',
      'Station 2: Cross and finish',
      'Station 3: Turn and shoot',
      'Station 4: 1v1 with goalkeeper',
      'Players rotate through stations'
    ]
  },
  {
    id: 'd5e6f7a8-b9c0-d1e2-f3a4-b5c6d7e8f9a0',
    name: 'Defensive Shape',
    description: 'Practice maintaining defensive formation',
    duration: 15,
    category: 'tactical',
    skillsFocused: ['Positioning', 'Communication', 'Pressing'],
    equipment: ['Cones', 'Balls', 'Bibs'],
    instructions: [
      'Set up half pitch',
      'Defensive unit (4 or 5 players)',
      'Attackers try to break through',
      'Focus on holding shape and moving as a unit',
      'Coach calls out scenarios'
    ]
  }
];

export const sampleTrainingSessions: TrainingSession[] = [
  // Upcoming sessions
  {
    id: 's1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6',
    teamId: 'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
    date: new Date('2024-12-11T18:00:00'),
    duration: 90,
    location: 'Community Sports Ground',
    focusAreas: ['Tactical Awareness', 'Set Pieces'],
    drillIds: ['d3c4d5e6-f7a8-b9c0-d1e2-f3a4b5c6d7e8', 'd5e6f7a8-b9c0-d1e2-f3a4-b5c6d7e8f9a0'],
    notes: 'Focus on defensive organization ahead of weekend match'
  },
  {
    id: 's2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7',
    teamId: 't3e4f5a6-b7c8-9d0e-1f2a-3b4c5d6e7f8a',
    date: new Date('2024-12-09T17:30:00'),
    duration: 75,
    location: 'Community Sports Ground',
    focusAreas: ['Technical Skills', 'Finishing'],
    drillIds: ['d1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6', 'd2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7', 'd4d5e6f7-a8b9-c0d1-e2f3-a4b5c6d7e8f9']
  },
  {
    id: 's3c4d5e6-f7a8-b9c0-d1e2-f3a4b5c6d7e8',
    teamId: 't2b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6',
    date: new Date('2024-12-10T17:00:00'),
    duration: 60,
    location: 'Community Sports Ground',
    focusAreas: ['Passing', 'Movement'],
    drillIds: ['d1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6', 'd2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7']
  },
  
  // Past sessions with attendance
  {
    id: 's4d5e6f7-a8b9-c0d1-e2f3-a4b5c6d7e8f9',
    teamId: 'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
    date: new Date('2024-12-04T18:00:00'),
    duration: 90,
    location: 'Community Sports Ground',
    focusAreas: ['Attacking Play', 'Finishing'],
    drillIds: ['d3c4d5e6-f7a8-b9c0-d1e2-f3a4b5c6d7e8', 'd4d5e6f7-a8b9-c0d1-e2f3-a4b5c6d7e8f9'],
    attendance: [
      { playerId: 'p21a3b4c-5d6e-7f8a-9b0c-1d2e3f4a5b6c', present: true },
      { playerId: 'p22b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d', present: true },
      { playerId: 'p23c5d6e-7f8a-9b0c-1d2e-3f4a5b6c7d8e', present: true, notes: 'Left early - minor injury' },
      { playerId: 'p24d6e7f-8a9b-0c1d-2e3f-4a5b6c7d8e9f', present: false, notes: 'Illness' }
    ],
    notes: 'Good intensity. Martinez and Robinson showed excellent finishing.'
  },
  {
    id: 's5e6f7a8-b9c0-d1e2-f3a4-b5c6d7e8f9a0',
    teamId: 't4f5a6b7-c8d9-0e1f-2a3b-4c5d6e7f8a9b',
    date: new Date('2024-12-03T19:00:00'),
    duration: 75,
    location: 'Community Sports Ground',
    focusAreas: ['Possession', 'Transition'],
    drillIds: ['d1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6', 'd3c4d5e6-f7a8-b9c0-d1e2-f3a4b5c6d7e8'],
    attendance: [
      { playerId: 'p18d0e1f-2a3b-4c5d-6e7f-8a9b0c1d2e3f', present: true },
      { playerId: 'p19e1f2a-3b4c-5d6e-7f8a-9b0c1d2e3f4a', present: true },
      { playerId: 'p20f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b', present: true }
    ]
  },
  {
    id: 's6f7a8b9-c0d1-e2f3-a4b5-c6d7e8f9a0b1',
    teamId: 't2b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6',
    date: new Date('2024-12-03T17:00:00'),
    duration: 60,
    location: 'Community Sports Ground',
    focusAreas: ['Dribbling', 'Control'],
    drillIds: ['d2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7'],
    attendance: [
      { playerId: 'p9a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5', present: true },
      { playerId: 'p10b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d', present: true },
      { playerId: 'p11c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e', present: true },
      { playerId: 'p12d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f', present: true },
      { playerId: 'p13e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a', present: true }
    ],
    notes: 'All players showed great attitude. Ethan particularly impressive with ball control.'
  },
  {
    id: 's7a8b9c0-d1e2-f3a4-b5c6-d7e8f9a0b1c2',
    teamId: 't1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6',
    date: new Date('2024-11-29T16:30:00'),
    duration: 45,
    location: 'Community Sports Ground',
    focusAreas: ['Fun Games', 'Basic Skills'],
    drillIds: ['d1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6'],
    attendance: [
      { playerId: 'p1a1b2c3-d4e5-f6a7-b8c9-d0e1f2a3b4c5', present: true },
      { playerId: 'p2b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6', present: true },
      { playerId: 'p3c3d4e5-f6a7-b8c9-d0e1-f2a3b4c5d6e7', present: true },
      { playerId: 'p4d4e5f6-a7b8-c9d0-e1f2-a3b4c5d6e7f8', present: false },
      { playerId: 'p5e5f6a7-b8c9-d0e1-f2a3-b4c5d6e7f8a9', present: true },
      { playerId: 'p6f6a7b8-c9d0-e1f2-a3b4-c5d6e7f8a9b0', present: true },
      { playerId: 'p7a7b8c9-d0e1-f2a3-b4c5-d6e7f8a9b0c1', present: true },
      { playerId: 'p8b8c9d0-e1f2-a3b4-c5d6-e7f8a9b0c1d2', present: true }
    ],
    notes: 'Great energy from the group. Kept it fun and engaging.'
  }
];

export const getTrainingSessionsByTeamId = (teamId: string): TrainingSession[] => {
  return sampleTrainingSessions.filter(session => session.teamId === teamId);
};

export const getUpcomingTrainingSessions = (): TrainingSession[] => {
  const now = new Date();
  return sampleTrainingSessions
    .filter(session => session.date > now)
    .sort((a, b) => a.date.getTime() - b.date.getTime());
};

export const getDrillById = (id: string): Drill | undefined => {
  return sampleDrills.find(drill => drill.id === id);
};
