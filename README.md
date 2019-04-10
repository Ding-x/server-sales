This project is the **Client side Front-end** of server request system. Clients in city hall can request their server services through this system.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##Technology Stack

This proejtc was built with react, [react-router](https://reacttraining.com/react-router/), and [react-redux](https://react-redux.js.org/)

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

#### Code Splitting

This section has moved [here](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved [here]( https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved [here](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved [here]( https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved [here](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved [here]( https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## What's next?

#### 1. Management side Front-end of server request system
We need a dashboard (management side Front-end) to manage the request system. Administators can modify services with their attributes in
the dashboard. You can develop the dashboard within the client side front-end project, or in a new project folder. Both ok.

#### 2. Back-end and Database Development
I would like to recommend to use Node.js with its framework Express.js to develop the Back-end. 
In terms of database, MonggoDB is a good option due to its flexibility. I've already defined the database 
schema in Front-end. It's in the root folder. This schema is just one solution (may not the best), just take
it as an option.

#### 3. API Implement in Front-end
It's easy to use Restful API to communicate between Front-end and Back-end. Once Back-end and Database done,
you need to implement the API request in Front-end/redux/ActionCreators.js file to replace the fake data. 

