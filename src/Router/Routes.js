import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTasks from "../Pages/Home/AddTasks";
import CompletedTasks from "../Pages/Home/CompletedTasks";
import Home from "../Pages/Home/Home";
import MyTasks from "../Pages/Home/MyTasks";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'mytasks',
                element: <MyTasks/>
            },
            {
                path: 'addtasks',
                element: <AddTasks/>
            },
            {
                path: 'completedtasks',
                element: <CompletedTasks/>
            }
        ]
    }
])