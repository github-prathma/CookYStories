# CookYStories App
Web application that provides users to showcase their recipes and connect with other users and can share their recipes and ideas among themselves.

## Project Requirements:
* JDK/Java > 8.0 installed
* Node.js installed (Refer: https://www.youtube.com/playlist?list=PLBBog2r6uMCQN4X3Aa_jM9qVjgMCHMWx6)
* IntelliJ or Eclipse IDE required for running backend
* MongoDB Compass for mongo connection
* MongoDB services on device

## How to start Frontend:
* Clone the repository (Using: git clone *project url*)
* Go to folder CookYStories_Frontend, remove node_modules folders if any
* Run **npm install** 
* Run **npm start** 
* This will start your local development server for website on https://localhost:3000
* Make sure <i>uri</i> host address in <b>index.js</b> matches with your device IP address.

## How to start Backend:
* Open CookYStories_Backend folder project in IntelliJ
* Run the project using IntelliJ (play button)
* Once the server starts, you can check the website on browser running with backend server.

## Project Navigation:

### Backend:
* Click on CookYStories_Backend folder to navigate to backend code
* Click on <i>src</i> folder to refer to whole code structure
* Now, navigate to folder <i>main</i>, then finally java/com/cookystoriesspring/CookYStories
* To refer to a code related to particular feature, open the folder related to it.
   
   For example,
  
   <b>Authentication:</b> This folder contains the code related to signup/login feature
   
   <b>Post:</b> This folder contains everything related to Post that user can post in our website

* Each folder categorized into three folders: Models, MongoRepositories and Resolvers

    i.e.,
    
    - <b>Models: </b> Database entities with different attributes
    
    - <b>MongoRepositories: </b> Classes that handles the query to the database
    
    - <b>Resolvers:</b> Classes that handles the functionalities for the communication between client and server
    
### Frontend:
* Click on CookYStories_Frontend folder to navigate to frontend code
* Click on <i>src</i> folder to refer to whole code structure
*  <b>backend</b> folder consists of all the network call implementations corresponding to the feature in application.
* To refer to a code related to particular feature, open the folder related to it.

   For example,
  
   <b>userFeed:</b> This folder contains the code related to feed of the user.
* Further, each feature folder is divided into 3 categories: components, css and pages.

   i.e.,
   
   - <b>components</b> represents views and functionalities code related to corresponding action on the page
   
   - <b>css</b> represents the stylesheets related to the feature
   
   - <b>pages</b> represents the code related to main feature. Example, userFeed has Feed.jsx which represents the main page of userFeed feature.
