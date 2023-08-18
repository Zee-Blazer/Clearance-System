
// React router dom and routing
import { createBrowserRouter } from 'react-router-dom';

// Route screens
import { LoginScreen } from './Screens/login.screen';
import { FillDetailsScreen } from './Screens/fill-details.screen';
import { HomeScreen } from './Screens/home.screen';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeScreen />,
        errorElement: <div>There was an error loading this page</div>
    },
    {
        path: '/login',
        element: <LoginScreen />
    },
    {
        path: '/fill-info',
        element: <FillDetailsScreen />
    }
])
