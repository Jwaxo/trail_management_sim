# Trail Management Sim
A browser-based national park management simulator, made in React.

### Core Concept
This is a browser-based Javascript game, built in React, that simulates the managerial aspects of running a national park. Balancing natural beauty with visitor amenities, players are challenged to bring people to the park in order to gather donations that let the park keep running.

### Main Features
- Mouse-and-grid god-level view
- Endearing 16-bit graphics
- Easy pick-up, play, and put back down gameplay
- Passive management inspires creative solutions and encourages minimal impact
- Erosion, humanity, and piling bills offer challenges
- Management responsibilities and options increase as time goes on (and game is updated)
- Users are taught about natural systems and why nature preservation is beneficial (and difficult)

### Target Platform / Audience
At this time, it is planned for this game to be playable on a PC or Mac-based browser.
Audience is 8+, with easy-to-understand language and gameplay elements, but complexity that hooks all ages.

### Timeline
1.0 release will include:
- All construction and changes are timer-based
- Time passes on a day-to-day basis
- Gameplay:
	- Place Trailheads and designated Trails along the landscape
		- Trails can be created (or upgraded) in several styles with different stats
	- Visitors arrive to test the Trails, provide Feedback, and Donate to keep the park running.
	- Track Erosion and Overgrowth on Trails
	- Sell (and purchase) Resources
	- Create or modify starting maps with a Map Editor
	- Increase your Managerial Level to gain more construction options
- 1 default map that includes a North American temperate coniferous forest Biome

Future releases will include:
- Seasonal changes
- Randomly-generated maps
- Employees to complete designated tasks, instead of timers
- Additional Amenities that improve the rating of the park
- Additional tile types

### Running
To run this game, you need a completed `build` directory. This will not be added to the repo until there is something worthwhile to test in the game's build.

### Building

1. Ensure you are on Node version 18.
1. Run `npm run build` from this main directory.
1. Copy the contents of the `build` directory to the root of your web server.
1. Visit `index.html` from any browser.
