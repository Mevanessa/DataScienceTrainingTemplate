import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-select-search/style.css';
import '@fontsource/poppins';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import RootMenu from './RootMenu';
// import MatchApp from './apps/match/MatchApp';
import 'react-material-symbols/rounded';
import { registerSW } from 'virtual:pwa-register';
import React from 'react';



// Automatically reloads the page a second time to update the SW
registerSW();

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <RootMenu />,
            },
            // {
            //     path: 'match',
            //     element: <MatchApp />,
            // },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
