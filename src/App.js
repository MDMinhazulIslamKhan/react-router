import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import ErrorPath from './components/ErrorPath/ErrorPath';
import Header from './Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/friend/:id' element={<FriendDetails />}></Route>
        <Route path='*' element={<ErrorPath />}></Route>
      </Routes>
    </div>
  );
}

export default App;
