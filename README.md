# React Redux Template

Lightweight app template for kickstarting personal projects.

*This is intended for my personal use only. It's not actively managed or maintained.*

## Setup

1. Clone repo `git clone git@github.com:webroo/react-redux-template.git project-name`
2. Remove git history `rm -rf .git`
3. Modify the `name` `description` and `repository` fields in `package.json` to reflect new project
4. Modify package dependencies if necessary
5. Modify settings in `webpack/webpack.config.babel.js` if necessary
6. Run `npm install`
7. Run `npm run serve` and navigate to `http://localhost:8080`

## Run scripts

Run scripts are handled by npm using the `scripts` field in `package.json`.

`npm run serve` - Serves a development version of the app at `http://localhost:8080`

`npm run serve-tests` - Serves a test runner at `http://localhost:8081`

`npm run serve-prod` - Serves a production version at `http://localhost:8080`

`npm run build-dev` - Builds a dev version of the app and writes the files to the `build` folder

`npm run build-prod` - Builds a prod version of the app and writes the files to the `build` folder

`npm run build-tests` - Builds the test suite and writes the files to the `build` folder

`npm run test` - Runs the test suite in Node

`npm run test-watch` - Runs the test suite in Node and watches for file changes

## Folder structure

Brief overview of the folder structure. Use this to decide where to add new files.

```js
├── build // Build version ends up here
├── src
│   ├── components // Presentational components
│   │   └── SearchForm // Should contain all assets (css, images, tests, etc)
│   │       ├── SearchForm.js
│   │       ├── SearchForm.spec.js
│   │       ├── SearchForm.css
│   │       └── icon.png
│   ├── containers // Container components (connecting components, actions, selectors)
│   │   └── ProductSearchForm
│   │       ├── ProductSearchForm.js
│   │       └── ProductSearchForm.spec.js
│   ├── reducers // Redux reducers
│   │   ├── rootReducer.js // Top-level reducer, given to the Redux store
│   │   ├── productReducer.js
│   │   └── productReducer.spec.js
│   ├── selectors // Reselect selectors
│   │   ├── productSelector.js
│   │   └── productSelector.spec.js
│   └── utils // Misc utilities
│       ├── immutableUtils.js
│       └── reactUtils.js
└── webpack // Webpack config files
```

## Dependencies

Brief overview of dependencies. Use this to decide what features can be trimmed for the project.

```js
"dependencies": {
  "babel-polyfill" // Babel polyfills for the browser
  "immutable" // Immutable.js
  "react" // React
  "react-dom" // React DOM rendering utilities
  "react-redux" // React Redux bindings
  "react-router" // React router
  "react-router-redux" // Utilities to sync the router and Redux
  "redux" // Redux
  "redux-logger" // Logger middleware for Redux
  "redux-thunk" // Thunk middleware for writing async actions in Redux
  "reselect" // Reselect
},
"devDependencies": {
  "autoprefixer" // Applies vendor prefixes to css, used by webpack
  "babel-loader" // Webpack loader for babel
  "babel-plugin-transform-object-rest-spread" // Additional babel plugin
  "babel-preset-es2015" // Default babel preset
  "babel-preset-react" // Babel preset for React
  "babel-register" // Compilation hook for Mocha when running tests in Node
  "chai" // Assertion library for Mocha
  "chai-immutable" // Add-on for Chai to support Immutable data structures
  "css-loader" // Webpack loader that handles css imports
  "eslint" // Base ESLint library
  "eslint-loader" // Webpack loader for ESLint
  "eslint-plugin-react" // React specific linting rules for ESLint
  "extract-text-webpack-plugin" // Webpack plugin used for extracting css
  "html-webpack-plugin" // Webpack plugin that creates an HTML file
  "mocha" // Mocha testing library
  "mocha-loader" // Webpack loader for Mocha
  "postcss-loader" // Webpack loader for PostCSS
  "postcss-nesting" // PostCSS plugin that enables css-next nesting
  "sinon" // Sinon library for testing
  "style-loader" // Webpack style loader
  "url-loader" // Webpack url loader
  "webpack" //  Webpack itself
  "webpack-dev-server" // Webpack dev server for running on localhost
}
```
