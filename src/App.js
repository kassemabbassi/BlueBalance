import logo from './logo.svg';
import './App.css';

import Quiz from './composants/Quiz';
import NavBar from './composants/NavBar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomePage from './composants/HomePage';
import Story from './composants/story';
function App() {
  return (
    <div className="App overflow-ellipsis">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path ='/story' element={<Story/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
