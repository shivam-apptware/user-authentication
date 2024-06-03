import React from 'react';
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-r4kyksqkmkn8b710.us.auth0.com"
    clientId="XKvgcjWNKUC3StNbfHs3g2IJs0orWMzm"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);