import { createBrowserRouter } from "react-router-dom";

import { Main } from "./pages/Main/Main";
import { Form } from "./pages/Form";
import { Entrar } from "./pages/Entrar";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/form',
        element: <Form />
    },
    {
        path: '/entrar',
        element: <Entrar />
    }
])