import { createBrowserRouter } from "react-router-dom";

import { Main } from "./pages/Main/Main";
import { Form } from "./pages/Form";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/form',
        element: <Form />
    }
])