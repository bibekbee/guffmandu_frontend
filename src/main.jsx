// Importing from React
import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";

// Importing third-party libraries
import { RouterProvider } from "react-router-dom";
import store from './reduxStore/store'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// Importing required Css
import "./lookout-css/lookout-base.css"
import "./lookout-css/lookout-components.css"
import "./lookout-css/lookout-utilities.css"
import "./lookout-css/lookout-buttons.css"
import "./lookout-css/lookout-animations.css"

import './index.css'

// Importing additional stuffs
import { router } from './Router';
import AuthenticationHandler from "./authentication/AuthProvider"


const queryClient= new QueryClient()

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthenticationHandler >
          <RouterProvider router={router}/>
        </AuthenticationHandler>
      </QueryClientProvider>
    </Provider>
  // </StrictMode>,
)