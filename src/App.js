
// App styleing
import './app.css';

// React router dom and routing
import { RouterProvider } from 'react-router-dom';

// Router component
import { router } from './routing';

function App() {
  return (
    <div className='screen__styling'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
