# DevCommunity

DevCommunity is a single page application built using React as frontend, node.js, express.js, socket.io as backend, postgresql as database. It a multi-language, real-time social media app severed by RESTFUL API. It allows users to interact with others. Also, it combines a concise external API with real time location and weather information. 
This is our final project at Lighthouse Labs, Eliza and me we worked together to finish this project from scratch within one week. 
I made following parts of the project,
1. Welcome Page, bilingual translation  and route to home page
2. Side Bar on the home page using to React Router to Navigator each page
3. Nav Bar on the home page using external api to get real time user location and weather information accordingly.
4. Post feeds/ read feeds / like & unlike feeds / delete feeds 
5. Real time experience on new feeds from friends served by socket io server
6. Live Chat Room function.
7. Emoji implementation. 
8. Set up socket io server between backend and frontend and made internal api query data from database.
9. Database design and ERD implement.

## Setup

Install dependencies with `npm install`.

## Running React frontend Development Server

```sh
npm start
```


## Running backend server

```sh
npm run local
```

## Final Product

!["screenshot of welcome page with bilingual option"](https://github.com/maggiezhao11/devCommunity/blob/master/doc/welcomePage%20bilingual%20option.png)

!["screenshot of home page Nav with real time location and weather"](https://github.com/maggiezhao11/devCommunity/blob/master/doc/topNavBar%20location%20and%20weather%20information.png)

!["screenshot of home page post likes"](https://github.com/maggiezhao11/devCommunity/blob/master/doc/post%20likes.png)
!["screenshot of home page post delete alert"](https://github.com/maggiezhao11/devCommunity/blob/master/doc/delete%20alert.png)
!["screenshot of home page post emoji"](https://github.com/maggiezhao11/devCommunity/blob/master/doc/post%20emoji.png)
!["screenshot of home page post live chat room login"](https://github.com/maggiezhao11/devCommunity/blob/master/doc/livechatroom%20login.png)
!["screenshot of home page post live chat room realtime chat"](https://github.com/maggiezhao11/devCommunity/blob/master/doc/realtime%20live%20chat.png)
!["screenshot of home page post event and upcoming event"](https://github.com/maggiezhao11/devCommunity/blob/master/doc/event%20and%20upcoming%20event.png)
!["screenshot of home page post group page"](https://github.com/maggiezhao11/devCommunity/blob/master/doc/groups%20page.png)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:3005/> for App.
3. Start a second terminal for the API web server using the `npm run local` command. The backend server will be served at <http://localhost:3002/> for API.
4. Keep postgresql database ready while having both terminal open running two servers.
5. Open another browser window in order to experience the realtime experience with socket io server for tracking new posts from friends as well as chat in the LIVE CHAT ROOM.
6. Give browser authentication to get your location in order to experience the real time location, and weather information shows up on the right side of Nav bar. 


## Dependencies
- axios
- Node 12.x or above
- react
- react-dom
- react-scripts
- nvm
- normalize.css
- classnames



## Function
- Offer bilingual version for user to explore
- Display user greeting, location, real time weather information
- Post new feed
- Read, like & unlike friends feeds
- Delete user self's feeds not any one else
- Offer realtime experience to multiple users on new post
- Offer realtime experience to multiple users on LIVE CHAT ROOM service
- Join new events and have upcoming events reminder
- Join groups for private events
