import React, { lazy, Suspense } from 'react'
import './App.css';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom'
const Home = lazy(() => import('./components/Home'))
const Route2 = lazy(() => import('./components/Route2'))
const DuplicateNum = lazy(() => import('./components/DuplicateNum'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <ReactRoutes>
            <Route path="/" element={<Home/>} />
            <Route path="/duplicatenumber" element={<DuplicateNum/>}/>
            <Route path="/route2" element={<Route2/>} />
          </ReactRoutes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;


/**
 * Create project by create react app with typescript template
 *
 * 1. Render user list
 *    - get json data from "https://random-data-api.com/api/users/random_user?size=5"
 *    - create a list component
 *    - display user list by showing username, first_name and last_name
 * 2. Create fetch more button
 *    - add new data to list when click "fetch more" button
 * 3. Create a search input box, which search by username, first_name and last_name
 *    - display filtered user list by a search input box data
 * 4. Unintentional renders
 *    - create a user component for displaying more information eg. address
 *    - create event on click user component to select username to render on top
 *    - make sure a user component does not re-render on search
 *    - make sure a list does not re-render on click a user component
 * 5. Create router for page switching
 *    - implement lazy load on route
 *
 */