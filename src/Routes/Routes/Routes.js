import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home"
import Login from "../../Pages/Login/Login"
import SignUp from "../../Pages/Login/SignUp"
import ErrorPage from "../../Pages/Shared/ErrorPage"

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
      ],
    },
  ])
  
  export default router;