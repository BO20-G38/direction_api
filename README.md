# First time setup of API Move service
## Intro
The API service is responsible for handling upload of images used to run predictions on. The setup process, packages and requirements for running the service can be found below.

### Project files
- index.js
- upload.js
- router.js
- pySpawn.js
- package.json
- .babelrc

## Requirements
The following must be installed on the system in order to run the service.
Package manager NPM can optionally be used instead of Yarn.

- Node version 10 or higher
- Yarn

## Installation of required packages
Dependencies are listed in package.json, installed using yarn.

```
yarn install
```

## Running the service
The service will run on localhost port 3000 and handle POST requests to base route.

```
yarn start
