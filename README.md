Welcome to Jarvis. App for tracking job applicants

## Context
Generally the way it works is you login and depending on user type(aoplicant or manager), you will either be taken to an employee page, an application page, or the manager view to look at the application and the associated status's..
## todo:
- some state persistance ie closing browser, refreshing page and still having data you had previously
- upload resume
- resume view in manager page
- some styling tweaks
## Bugs
- Manager View: CORS issue preventing call to API service. The only place its happening for some reason
- Manager View: More than the one checked box at a time in the status column


## Tech uses to build
- React
- create-react-app -- used to build boiler plat react project

## Requirements
```
npm
lastest chrome or safari browser
```
## Getting started
```
-  access your email and get the zipnand unzip into directoy of choice
- cd into jarvis
- run npm i
- run npm start
```


running npm start will start the app in development mode and automatically open your web browaser at:

http://localhost:3000

You will be presented with a login screen. 

username: george@upwave.com,
password: F!sdsna$sdasd%0

One more thing:
```
don't forget to grab the user id from the users table and place into the data structure I mentioned in the API project. 

Once you seed the db, you will have a new id that will be different for both users. You must take the new ids created when you created the user and replace the one in that data structure on in the server code.
```