import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AllJobs,
  AddJob,
  Stats,
  Admin,
  Profile,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          { path: 'stats', element: <Stats /> },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },

          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ],
      },
    ]
  },
  // {
  //   path: '/register',
  //   element: <Register />,
  // },
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  // {
  //   path: '/dashboard',
  //   element: <DashboardLayout />,
  // },

]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;