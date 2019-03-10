# iFood / SpotiFood

[![CircleCI](https://circleci.com/gh/fabriciofrontarolli/spotifood.svg?style=svg)](https://circleci.com/gh/fabriciofrontarolli/spotifood)

### Tech

iFood SpotiFood uses a number of open source projects to work properly:

* [ReactJS] - As frontend lib!
* [Redux] - A Predictable State Container for JS Apps
* [ParcelJS] - A seamless packer to interpret SASS, JAX, ES6, etc...
* [Bootstrap] - Great UI Framework for modern web apps

### Running the Project

iFood SpotiFood requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd spotifood
$ npm install
$ npm start
```

- The app will start at port 15000

### Test Coverage
To get the code coverage for the frontend run:

```sh
$ cd spotifood
$ npm install
$ npm run test
```

### Demo

- **Demo Link** A live version of the app is available at https://spotifood-cf4c0.firebaseapp.com/

# **Login Page**

![Login Page](https://i.imgur.com/pg9eRRs.png)

# **Landing Page**

![Landing Page](https://i.imgur.com/mOBEIaw.png)

### Consideradions

### Workflow

-- **Branching**: Used one single branch (master)
-- **Architecture**: I started building the boilerplate to prepare the overall codebase to develop the app. (1. Setup the app boilerplate (modules, actions, reducers, etc..) 2. Setup the services (REST requests, etc..)
-- **Layout**: Created the overall template to build the app (Login and Landing page)
-- **Integration**: Studied/Learned how to authenticate and interact with the Spotify API and adjusted the service code to integrate with the API.
-- **Refinements**: With the overall functionality working, started fine-tunning and organizing the app.
-- **Tests**: Created tests for the functionlity build - not proud to do tests after development x) but took this approach because I had to first figure out the overall REST integrations and Spotify authentication, and figure out how the components would be abstracted.

- I decided not to have a BFF (Backend for Frontend) because Spotify made an integration available in which I didnt have to expose the secret key. By just having assets as deliverable it was easy for me to CI/CD to Firebase Hosting.

### CI/CD

- I setup CI with CircleCI. It has 1 workflow: 
--- **build**: This job build and install dependencies, packs the application and deploy the assets to Firebase Hosting.
- **Continuous Delivery**: The app is Continuously Delivered to Firebase after each successfull commit on master.




### TODOs
 - Frontend
    - Add PropTypes to each component
    - Write Tests for the components
    - Write Tests for services
    - Write integration tests
    - Add Validations
    - Improve Layout
    - Write more tests
    - Properly document (JSDoc) each component, service, etc...

License
----
MIT
