[![CircleCI](https://circleci.com/gh/dipiash/react-apollo-github-top-js-repos/tree/master.svg?style=svg&circle-token=a7b001f9d52feda71c8de756a65e00a71494ea63)](https://circleci.com/gh/dipiash/react-apollo-github-top-js-repos/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/dipiash/react-apollo-github-top-js-repos/badge.svg)](https://coveralls.io/github/dipiash/react-apollo-github-top-js-repos)

# react-apollo-github-top-js-repos
This project allow you explore repositories created with Java Script language for last month from today.
You can filter repositories by license. Also you can search repository by name.

# Before start

Please create `.env.local` file and setup env variable as is in `.env.example`.

```dotenv
REACT_APP_GITHUB_TOKEN=SOME_TOKEN_FROM_GITHUB
REACT_APP_GITHUB_API_ENDPOINT=https://api.github.com/graphql
```

For create GitHub access token please visit [link](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### TODO

- [x] `#task1` Render list of repositories which created last month and sorting by stars
- [x] `#task2` Add filter by license
- [x] `#task3` Add search field
- [x] `#task4` Add tests
- [x] `#task5` Add pagination
- [x] `#task6` Add loader
- [x] `#task6` Add responsive
