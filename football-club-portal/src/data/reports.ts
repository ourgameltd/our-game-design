import { PlayerReport } from '../types/index';

export const sampleReports: PlayerReport[] = [
  {
    id: 'r1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6',
    playerId: 'p21a3b4c-5d6e-7f8a-9b0c-1d2e3f4a5b6c',
    period: {
      start: new Date('2024-09-01'),
      end: new Date('2024-11-30')
    },
    overallRating: 8.5,
    strengths: [
      'Excellent finishing ability with both feet',
      'Strong movement off the ball',
      'Good positioning in the box',
      'Effective at holding up play',
      'Confident on the ball under pressure'
    ],
    areasForImprovement: [
      'Aerial ability needs development',
      'Defensive contribution when team doesn\'t have the ball',
      'Decision making in final third could be quicker',
      'Physical conditioning - stamina in latter stages of games'
    ],
    developmentPlan: {
      goals: [
        'Improve aerial duel success rate by 20%',
        'Increase pressing actions per game',
        'Complete individual conditioning program',
        'Work on first-time finishing'
      ],
      actions: [
        'Additional heading practice sessions twice per week',
        'Study video analysis of pressing systems',
        'Follow personalized fitness plan with strength coach',
        'Practice shooting drills focusing on one-touch finishes'
      ],
      targetDate: new Date('2025-02-28')
    },
    coachComments: 'Carlos has been exceptional this term with 12 goals in 10 games. His natural finishing ability is outstanding, and he\'s showing great maturity in his link-up play. The focus now should be on becoming a more complete forward by improving his aerial game and defensive work rate. If he can add these elements to his game, he has the potential to play at a higher level.',
    createdBy: 'c0d1e2f3-a4b5-6c7d-8e9f-0a1b2c3d4e5f',
    createdAt: new Date('2024-12-01'),
    similarProfessionalPlayers: [
      {
        name: 'Gabriel Jesus',
        team: 'Arsenal',
        position: 'Striker',
        reason: 'Similar style of mobile striker who works well in combination play. Good model for pressing and defensive work rate.'
      },
      {
        name: 'Ollie Watkins',
        team: 'Aston Villa',
        position: 'Striker',
        reason: 'Excellent movement off the ball and finishing ability. Shows how a striker can contribute defensively while maintaining goal threat.'
      }
    ]
  },
  {
    id: 'r2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7',
    playerId: 'p22b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d',
    period: {
      start: new Date('2024-09-01'),
      end: new Date('2024-11-30')
    },
    overallRating: 8.0,
    strengths: [
      'Outstanding dribbling ability',
      'Creative in tight spaces',
      'Excellent vision and passing range',
      'Strong work ethic',
      'Good defensive contribution'
    ],
    areasForImprovement: [
      'End product - needs to increase goals and assists',
      'Can be too individualistic at times',
      'Decision making on when to pass vs. dribble',
      'Physical strength to hold off defenders'
    ],
    developmentPlan: {
      goals: [
        'Increase goal contributions to 1 per game',
        'Improve team play in final third',
        'Develop physical strength',
        'Better shot selection'
      ],
      actions: [
        'Finish training sessions with shooting drills',
        'Video analysis of when to pass vs. dribble',
        'Strength and conditioning program',
        'Study professional wingers\' decision making'
      ],
      targetDate: new Date('2025-02-28')
    },
    coachComments: 'Jake is a joy to watch with the ball at his feet. His technical ability is among the best in the league. The challenge now is to turn those dribbles and chances created into tangible goals and assists. He needs to understand when to beat his man and when to play the simple pass. With better decision making, he can be a match-winner.',
    createdBy: 'c0d1e2f3-a4b5-6c7d-8e9f-0a1b2c3d4e5f',
    createdAt: new Date('2024-12-01'),
    similarProfessionalPlayers: [
      {
        name: 'Phil Foden',
        team: 'Manchester City',
        position: 'Winger/Attacking Midfielder',
        reason: 'Similar technical ability and dribbling style. Good example of combining individual skill with team play and end product.'
      },
      {
        name: 'Cole Palmer',
        team: 'Chelsea',
        position: 'Winger/Attacking Midfielder',
        reason: 'Shows excellent decision making and has developed into a prolific goal scorer while maintaining creative abilities.'
      }
    ]
  },
  {
    id: 'report-3',
    playerId: 'player-9',
    period: {
      start: new Date('2024-09-01'),
      end: new Date('2024-11-30')
    },
    overallRating: 7.5,
    strengths: [
      'Excellent ball control for his age',
      'Brave on the ball',
      'Good spatial awareness',
      'Positive attitude and coachability',
      'Improving passing accuracy'
    ],
    areasForImprovement: [
      'Use of weaker foot',
      'Speed of decision making',
      'Physical development',
      'Positioning without the ball'
    ],
    developmentPlan: {
      goals: [
        'Use left foot in games regularly',
        'Improve reaction time in small-sided games',
        'Build confidence in defensive positions',
        'Continue technical development'
      ],
      actions: [
        'Left foot only drills in warm-ups',
        'Play more small-sided games',
        'Practice positional awareness exercises',
        'Individual ball mastery homework'
      ],
      targetDate: new Date('2025-03-31')
    },
    coachComments: 'Ethan has made excellent progress this term. His technical ability is very good for his age group, and he\'s starting to understand the game better. He\'s a pleasure to coach due to his attitude and willingness to learn. Focus on developing both feet and game understanding will help him continue to improve.',
    createdBy: 'staff-3',
    createdAt: new Date('2024-12-01'),
    similarProfessionalPlayers: [
      {
        name: 'Bukayo Saka',
        team: 'Arsenal',
        position: 'Winger',
        reason: 'Good example of a technically gifted young player who developed through consistent work on fundamentals and both feet.'
      }
    ]
  },
  {
    id: 'report-4',
    playerId: 'player-14',
    period: {
      start: new Date('2024-09-01'),
      end: new Date('2024-11-30')
    },
    overallRating: 7.8,
    strengths: [
      'Natural leadership qualities',
      'Strong in the tackle',
      'Good reading of the game',
      'Vocal and organizes teammates',
      'Competitive mentality'
    ],
    areasForImprovement: [
      'Distribution under pressure',
      'Speed of play',
      'Technical ability with ball',
      'Composure in possession'
    ],
    developmentPlan: {
      goals: [
        'Improve passing accuracy to 80%+',
        'Develop comfort on the ball',
        'Enhance decision making speed',
        'Continue leadership development'
      ],
      actions: [
        'Extra passing and control sessions',
        'Rondos and possession drills',
        'Video analysis of modern defenders',
        'Captain\'s responsibilities in matches'
      ],
      targetDate: new Date('2025-03-31')
    },
    coachComments: 'Oliver is a natural leader and his defensive instincts are excellent. He reads the game well and is brave in the tackle. To progress to the next level, he needs to become more comfortable on the ball and improve his distribution. Modern defenders need to be able to play out from the back, and this is an area we\'re working on with him.',
    createdBy: 'staff-2',
    createdAt: new Date('2024-12-02'),
    similarProfessionalPlayers: [
      {
        name: 'John Stones',
        team: 'Manchester City',
        position: 'Centre Back',
        reason: 'Shows how a defender can be strong defensively while being comfortable on the ball and contributing to team play.'
      }
    ]
  }
];

export const getReportsByPlayerId = (playerId: string): PlayerReport[] => {
  return sampleReports.filter(report => report.playerId === playerId)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

export const getLatestReportForPlayer = (playerId: string): PlayerReport | undefined => {
  const reports = getReportsByPlayerId(playerId);
  return reports.length > 0 ? reports[0] : undefined;
};
