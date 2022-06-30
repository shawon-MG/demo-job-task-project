import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='max-w-7xl mx-auto h-screen'>

      <Routes>

        <Route path='/' element={<Home />}> </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
