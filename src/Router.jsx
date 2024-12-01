import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// importing url Names
import {homeRouteBase, chatRoute, profileRouteBase, legalAndPoliciesRouteBase}  from "./utilities/frontendRoutes"

// Pages imports
import BaseApp from "./BaseApp";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import LegalAndPolicies from "./pages/LegalAndPolicies"

export const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="" element={<BaseApp />}>
          <Route path={homeRouteBase} element={<Home />} />
          <Route path={chatRoute} element={<Chat />} />
          <Route path={profileRouteBase} element={<Profile />} />
          <Route path={legalAndPoliciesRouteBase} element={<LegalAndPolicies />} />
        </Route>
      ])
)