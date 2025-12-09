I am generating a responsive, mobile first web portal for football clubs (soccer) across the world to manage their club and makr the it less of a burden to manage. I want this to include details of the club e.g. colour, logo, names, locations, history etc and its ethos, principles. I would like this to include all age groups and associated teams of all abilities from kids up through the amateurs and first teams. Each age group/team grouping should contain a list of players which can be assigned to teams within that agre group/team. This should allow you to manage players with their preferred positions and abilities which can be reviewed by coaches of the team, staff and certifications, kit orders, match reports, training sessions. 

This should follow a tree structure like this:

Dashboard
- Clubs (list the clubs I have access to in icons in a grid)   
  - Club/{clubId}/{clubName}
    - Club overview (breakdown of teams, players, upcoming matches, recent results etc)
    - Consititution and principles/Ethos of the club
    - Club/{clubId}/{clubName}/Teams (list the teams I have access too in icons in a grid these teams should be grouped by agre group e.g. 2014, 2015, Amateur, Reserve, Senior etc team names would be e.g. Regs, Blues, Whites etc)
        - Team overview
        - Club/{clubId}/{clubName}/Teams/{teamId}/{teamGroupName}/{teamName}
            - Team overview (upcoming matches, recent results, top performers, struggling players etc)
            - Squad Management (list of players in the team with ability to add/remove players)
                - Player overview (details of player, position, abilities, stats etc)
                - Club/{clubId}/{clubName}/Teams/{teamId}/{teamGroupName}/{teamName}/Players/{playerId}/{playerName}
                    - Player growth (chart of abilities over time, progress made, areas to work on) 
                    - Sponsors
                - Match Reports
                    - Goal scorers, assists, bookings, substitutions, player ratings, men of match
                - Training Sessions linking to global shareable training sessions across club
                - Report cards
                    - Similar players in profesional game to focus on for improvement
                - individual training plans
                - Formations linking to global shareable formations across club
            - Kit orders
            - Messages/Notifications
        - Messages/Notifications           
- Formations & Tactics (list of all formations and tactics stored globally)
    - Formation 1
    - Formation 2
- Training Sessions (list of all training sessions across all clubs/teams I have access to)
    - Training Session 1
    - Training Session 2

Things like formations and systems/tactics should be stored globally and can be assigned to a team for a match or training session. Matches should be able to be scheduled with details of opposition, location, date/time, weather conditions etc. Training sessions should also be schedulable with details of focus areas, drills to be used, duration, location etc. There is a drill builder and session manager component to help coaches plan and organize training sessions effectively. 

It will also be able to generate report cards and improvemnt plans for players based on their performance in matches and training sessions and review by coaches. This will directly tie in to the abilities tracked and updated by coaches over a period of time to show improvement and areas to work on.

The website will allow fans to signup and follow their favorite clubs, get notifications on match days, view match reports, player statistics, and club news. Parents can also be assigned to kids added to the system to manage their profiles and receive updates.

In future we would like this have a mobile app component as well, which can be used by players, staff and fans to access the same features on the go, and be notified in real time of important updates, games, training sessions, and club news, and also pay any fees associated with club membership, kit orders, and events.

This repo is responsible for generating HTML for this web portal and planning the journeys through the application from a demo perspective, and should include sample data to demonstrate the various features of the application. No backend functionality is required at this stage, just the front end HTML, CSS and JavaScript to demonstrate the user journeys and features of the application.

I also need login pages, registration pages, password reset pages, and user profile management pages to be included in the web portal. These pages should be designed with user experience in mind, ensuring that they are easy to navigate and use. Anyone creting an account should not have to defin which type of account they have. This will be invite only and the system will assign roles based on the invite link used to register when they are added to the system by an admin based on their role in the club or association with the club.

I would like the design to be simple and clean, with a focus on usability and accessibility. The color scheme should be neutral and professional, with the ability to customize the colors based on the club's branding from the #file:../docs/images/vale-crest.jpg. The consitition of the club can be found here #file:../docs/club-consitituion.md, but the wording and laguage does not need to be as formal as this document, and should be inclusive as a community football club for all ages and abilities which welcomes everyone.