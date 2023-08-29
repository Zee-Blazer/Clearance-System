
// App styleing
import './app.css';

// Context provider
import { DataContextProvider } from './Services/data.context';

// React router dom and routing
import { RouterProvider } from 'react-router-dom';

// Router component
import { router } from './routing';

function App() {
  return (
    <div className='screen__styling'>
      <DataContextProvider>
        <RouterProvider router={router} />
      </DataContextProvider>
    </div>
  );
}

export default App;
