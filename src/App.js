import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import SingUp from './SingUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Login></Login>}></Route>
        <Route path='/order' element={<SingUp></SingUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
