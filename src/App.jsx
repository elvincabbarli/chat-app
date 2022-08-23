import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/registr' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
