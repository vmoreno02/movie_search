# Movie Search Project
This project is for the OIT coding challenge. It's a simple app that uses a Vue frontend and a Node backend to access the Movie Database and search for movies.

## Instructions
### Prerequisites
Currently, both of the parts of this app run on localhost. Because of this, there are some CORS issues to work around. Unfortunately, I did not have time to figure out any kind of remote hosting.
- Use Chrome.
- Install the Allow CORS extension (https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf).
- Add this extension to the toolbar.
- Click on the icon---it should be gray.
- Click on the "toggle on/off" button. The icon should turn colorful.

- Additionally, make sure that no other processes are using ports 3000 or 3002.

### Launch the backend
- Once you have cloned the project, open a terminal.
- Navigate to the movie_search directory.
- Run the command 
```
node webservice/index.js
```

### Launch the frontend
- Open another terminal.
- Navigate to the movie_search directory.
- Run these commands:
```
cd webapp
npm run dev dev
```

## Things to fix:
- The backend does not work when you press the enter button on the keyboard instead of the search button
- Right now, the backend runs on localhost:3002 and the frontend runs on localhost:3000. This introduces CORS issues. In Chrome, the only way to resolve this is with an extension that can allow CORS.
- Use Bootstrap to make the page look cleaner and more professional.

## Things to add in a fully-functional app
- Log in/register
- Save searches
- Favorite movies
- Share favorite movies with other users