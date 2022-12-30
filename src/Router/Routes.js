import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTasks from "../Pages/Home/AddTasks";
import CompletedTasks from "../Pages/Home/CompletedTasks";
import Home from "../Pages/Home/Home";
import MyTasks from "../Pages/Home/MyTask/MyTasks";
import Signin from "../Pages/Registration/Signin";
import Signup from "../Pages/Registration/Signup";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <PrivateRoutes><Home/></PrivateRoutes>
            },
            {
                path: 'mytasks',
                element: <PrivateRoutes><MyTasks/></PrivateRoutes>
            },
            {
                path: 'addtasks',
                element: <AddTasks/>
            },
            {
                path: 'completedtasks',
                element: <CompletedTasks/>
            },
            {
                path: 'signin',
                element: <Signin/>
            },
            {
                path: 'signup',
                element: <Signup/>
            }
        ]
    }
])