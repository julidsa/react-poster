import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import './index.css';
import RootLayout from './routes/RootLayout';
import Posts, {loader as postLoader } from './routes/Posts';
import NewPost, {action as newPostAction } from './routes/NewPost'

const router = createBrowserRouter([
  { path: '/', 
  element: <RootLayout />,
  children: [
    {
      path: '/', 
      element: <Posts />,
      loader: postLoader, 
      children: [{path: '/create-post', element: <NewPost />, action: newPostAction}]
    },
  ],
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
