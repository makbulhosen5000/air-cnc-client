import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Signup/Signup';
import RoomDetails from '../Pages/RoomDetails/RoomDetails';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import AddRoom from '../Pages/Dashboard/AddRoom';
import { getRoom } from '../api/room';
import ErrorMessage from '../Pages/Error/ErrorMessage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorMessage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/add-room",
        element: <AddRoom />,
      },
    ],
  },
]);
