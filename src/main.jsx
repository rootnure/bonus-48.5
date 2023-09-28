import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root'
import Home from './Home/Home'
import ErrorPage from './ErrorPage/ErrorPage'
import JobDetails from './JobDetails/JobDetails'
import AppliedJobs from './AppliedJobs/AppliedJobs'
import { HelmetProvider } from 'react-helmet-async'
import AllFeaturedJobs from './AllFeaturedJobs/AllFeaturedJobs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <AllFeaturedJobs></AllFeaturedJobs>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json') // only load the data you need. do not load all the data
      },
      {
        path: '/job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json') // do not load all data. load only what is needed
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
