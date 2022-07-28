import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppRoutes from './routes'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
