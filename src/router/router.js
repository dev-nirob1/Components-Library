import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/MainLayout/Main";
import ButtonPage from "../components/Buttons/ButtonPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App
    },
    {
        path: '/components',
        Component: Main,
        children: [
            {
                path: 'button',
                Component: ButtonPage
            }
        ]
    }
])