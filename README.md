# TheVelopsAPI
### Prerequisites:
- install nodejs
- install npm
- install yarn

### Running the code in local:
- clone the repository
- in your terminal navigate to /back
- execute 'npm install' to install the package dependencies
- execute 'npm run start' to put your server up on port AAAA
- in another terminal navigate to /front
- execute 'yarn install' to install the package dependencies
- execute 'yarn start'so your app will run at port ----
- to populate your DB just access in your browser 'localhost:AAAA/populate/{n}', n is the number of users you want to add in your DB
- access 'localhost:----' to access your app
    
### API routes:
- '/users':
    - GET: get a JSON of all the users in the DB
    - POST: add a new user in the db
- '/users/{userId}':
    - GET: get a JSON of the user 
    - PUT: update the user information
    - DELETE: delete the user
- '/verify/{userEmail}':
    - GET: get user by its email
-  '/populate/{n}':
    - GET: add n users to the DB
        
### APP routes:
- '/': Home and Login page
- '/user/{userId}': Page of the user
- '/edit/{userId}': Edit the user
- '/password/{userId}': Change user's password