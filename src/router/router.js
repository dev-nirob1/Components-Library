import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/MainLayout/Main";
import Button from "../components/CssComponents/Button";

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
                Component: Button
            }
        ]
    }
])