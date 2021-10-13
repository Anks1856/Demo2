import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

//
// Defaults can be overriden in a .env file at the root of the project like so:
//
// REACT_APP_API_SCHEME=https
// REACT_APP_API_HOST=rx-api-dev.bluerabbit.vet
// REACT_APP_API_PORT=443
export const API_PORT = Number(process.env.REACT_APP_API_PORT || 4000);
export const API_HOST = process.env.REACT_APP_API_HOST || "localhost";
export const API_SCHEME = process.env.REACT_APP_API_SCHEME || "http";

const cache = new InMemoryCache();

const client = new ApolloClient({
  //
  // Please don't hard code this url, use the env vars referenced above
  // uri: `${API_SCHEME}://${API_HOST}:${API_PORT}/graphql`,
  cache,
  link: createUploadLink({
    // uri: `${API_SCHEME}://${API_HOST}:${API_PORT}/graphql`,
    uri: "https://rx-api-dev.bluerabbit.vet/graphql",
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("Site-Wrapper")
);

reportWebVitals();
