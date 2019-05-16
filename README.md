#Young at Heart

## Overview
Users can create an account which will allow them to create a vacation plan. Once a vacation plan has been created, a list of available parks will be presented for them to choose from which will dictate the information available to them pulled from the various APIs with information concerning wait times, restaurant options, the ride availability for each day in their vacation so that they can plan which days to spend where. Users can save their vacation planning calendar and review it as their vacation draws closer in order to make any changes based on updated information concerning availability and wait times at the parks they choose. 

## Usage

This app is deployed on heroku. If you would like to try it out, it is available at http://young-at-heart.herokuapp.com

## Features
Pulls information from https://touringplans.com/api

### Data Layout

- User 
    - username
    - password
    - email
    - first name
    - last name
    - phone number
    - address
    - city
    - state
    - zip
    - date_created
    - date_modified
    - id
- Vacation
    - nickname
    - start date
    - end date
    - user_id
    - date_created
    - date_modified
    - id
- VacationDay
    - park_id
    - vacation_id
    - date_created
    - date_modified
    - id
- Parks 
    - name
    - id
    - date_added
    - date_modified
    - description
    - address
    - phone_number
    - id



### Data Served

    Per User
        User Information
        List of vacations saved
        Park chosen for each day in vacation

    Per Park
        Ride Schedule
        Wait Times
        Restaurants available

## Storyboard
Mockups can be found at at https://balsamiq.cloud/sll8t3b/pfy4g8u/

## Development


# Create React App Notes
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
