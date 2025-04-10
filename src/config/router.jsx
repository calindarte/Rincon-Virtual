import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import Cuento from "../pages/Cuento";
import Video from "../pages/Video";
import Juegos from "../pages/Juegos";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutPublic/>,
        children: [
            {
                index:true,
                element: <Home/>,
            },
            {
                path:"/cancion",
                element: <Video/>
            },
            {
                path:"/cuento",
                element: <Cuento/>
            },
            {
                path:"/juegos",
                element: <Juegos/>
            }
            
        ]
    }
])