# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Env vars are not necessary to run the react app for local development, but you can overrride the 
API server scheme, host and port in a `.env` file like so:

```
REACT_APP_API_SCHEMD=https
REACT_APP_API_HOST=someurl
REACT_APP_API_PORT=4000
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### Apollo GraphQL Client
Apollo Client Docs: https://www.apollographql.com/docs/react/

Client side GraphQL operations are defined at: `frontend/src/graphql/operations.ts`. After
adding or changing those defs, run `npm run gql` in `frontend` to generate new typescript
definitions and hooks boilerplate for the frontend. See `frontend/src/pages/AddUser.tsx`
for example uses of Query and Mutation hooks usage.

### Tailwind CSS
Tailwind docs: https://tailwindcss.com/docs

Tailwind is a nice css utility library that make *most* styling trivial without writing any CSS and
helps us prevent CSS sprawl. See examples:

```
<div class="container mx-auto px-4">
  <!-- ... -->
</div>
```

```
<div class="flex ...">
  <div class="flex-grow w-16 h-16 ...">
    <!-- This item will grow or shrink as needed -->
  </div>
  <div class="flex-shrink w-64 h-16 ...">
    <!-- This item will shrink -->
  </div>
  <div class="flex-grow w-16 h-16 ...">
    <!-- This item will grow or shrink as needed -->
  </div>
</div>
```

Tailwind styles are imported here `frontend/src/styles/index.css` and we have a watcher that will regenerate
`frontend/src/styles/tailwind.css` whenever we change style information. That files is added to
our app at `frontend/src/index.tsx:3`.

### Ant Design React Component

Ant Design Docs: https://ant.design/components/overview/

See Ant design in action here: `frontend/src/pages/AddUser.tsx`.

### Create React App

Create React App docs: https://create-react-app.dev/

We use Facebook's Create React App util. You don't really have to know anything about it for most use cases here.
But it's important to know if you are changing any configs or incorporating new libs that don't work out of the box
with it. It's pretty slow, but very widely used. If you find it too slow for development, let me know and I can rip it
out in favor of something faster.
