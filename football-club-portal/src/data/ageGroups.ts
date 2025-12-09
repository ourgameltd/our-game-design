import { AgeGroup } from '../types';

export const sampleAgeGroups: AgeGroup[] = [
  {
    id: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    clubId: '8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b',
    name: '2014s',
    code: '2014',
    level: 'youth',
    season: '2024/25',
    description: 'Under-11 age group for players born in 2014',
    coordinatorIds: ['staff-1']
  },
  {
    id: '2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e',
    clubId: '8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b',
    name: '2013s',
    code: '2013',
    level: 'youth',
    season: '2024/25',
    description: 'Under-12 age group for players born in 2013',
    coordinatorIds: ['staff-1']
  },
  {
    id: '3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f',
    clubId: '8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b',
    name: '2012s',
    code: '2012',
    level: 'youth',
    season: '2024/25',
    description: 'Under-13 age group for players born in 2012',
    coordinatorIds: ['staff-3']
  },
  {
    id: '4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a',
    clubId: '8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b',
    name: 'Amateur',
    code: 'amateur',
    level: 'amateur',
    season: '2024/25',
    description: 'Adult amateur teams for recreational players',
    coordinatorIds: ['staff-4']
  },
  {
    id: '5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b',
    clubId: '8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b',
    name: 'Reserves',
    code: 'reserves',
    level: 'reserve',
    season: '2024/25',
    description: 'Reserve team competing in local leagues',
    coordinatorIds: ['staff-1']
  },
  {
    id: '6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c',
    clubId: '8f4e9a2b-1c3d-4e5f-6a7b-8c9d0e1f2a3b',
    name: 'Senior',
    code: 'senior',
    level: 'senior',
    season: '2024/25',
    description: 'First team representing the club at the highest level',
    coordinatorIds: ['staff-1']
  }
];

export const getAgeGroupsByClubId = (clubId: string): AgeGroup[] => {
  return sampleAgeGroups.filter(group => group.clubId === clubId);
};

export const getAgeGroupById = (id: string): AgeGroup | undefined => {
  return sampleAgeGroups.find(group => group.id === id);
};

export const getAgeGroupByCode = (clubId: string, code: string): AgeGroup | undefined => {
  return sampleAgeGroups.find(group => group.clubId === clubId && group.code === code);
};
