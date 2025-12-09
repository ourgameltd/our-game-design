import type { Meta, StoryObj } from '@storybook/react';
import PlayerCard from '../components/player/PlayerCard';

const meta: Meta<typeof PlayerCard> = {
  title: 'Components/Player/PlayerCard',
  component: PlayerCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlayerCard>;

export const Youth: Story = {
  args: {
    player: {
      id: 'player-1',
      firstName: 'Oliver',
      lastName: 'Smith',
      dateOfBirth: new Date('2016-05-12'),
      preferredPositions: ['CF', 'ST'],
      abilities: [
        { name: 'Passing', rating: 7, lastUpdated: new Date(), updatedBy: 'coach-1' },
        { name: 'Shooting', rating: 8, lastUpdated: new Date(), updatedBy: 'coach-1' },
        { name: 'Dribbling', rating: 8, lastUpdated: new Date(), updatedBy: 'coach-1' },
      ],
      teamIds: ['team-1'],
    },
  },
};

export const Adult: Story = {
  args: {
    player: {
      id: 'player-21',
      firstName: 'Sarah',
      lastName: 'Martinez',
      dateOfBirth: new Date('1996-12-11'),
      preferredPositions: ['ST', 'CF'],
      abilities: [
        { name: 'Passing', rating: 9, lastUpdated: new Date(), updatedBy: 'coach-5' },
        { name: 'Shooting', rating: 9, lastUpdated: new Date(), updatedBy: 'coach-5' },
        { name: 'Dribbling', rating: 8, lastUpdated: new Date(), updatedBy: 'coach-5' },
      ],
      teamIds: ['team-5'],
    },
  },
};

export const Goalkeeper: Story = {
  args: {
    player: {
      id: 'player-8',
      firstName: 'Isabella',
      lastName: 'Davis',
      dateOfBirth: new Date('2016-12-03'),
      preferredPositions: ['GK'],
      abilities: [
        { name: 'Shot Stopping', rating: 7, lastUpdated: new Date(), updatedBy: 'coach-1' },
        { name: 'Distribution', rating: 6, lastUpdated: new Date(), updatedBy: 'coach-1' },
        { name: 'Positioning', rating: 8, lastUpdated: new Date(), updatedBy: 'coach-1' },
      ],
      teamIds: ['team-1'],
    },
  },
};
