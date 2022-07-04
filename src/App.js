import './App.css';

import Header from './Components/layouts/Header/Header';

import Contact from './Components/pages/Contact/Contact';
import Home from './Components/pages/Home/Home';
import Messages from './Components/pages/Messages/Messages';
import Profile from './Components/pages/Profile/Profile';
import Settings from './Components/pages/Settings/Settings';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(props) {

  return (

    <BrowserRouter class="App">
      <Header />
      <div className='mainContent'>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/messages'} element={<Messages data={props.state.messagesPage} />} />
          <Route path={'/profile'} element={<Profile data={props.state.profilePage} />} />
          <Route path={'/settings'} element={<Settings />} />
          <Route path={'/messages/*'} element={<Messages data={props.state.messagesPage} />} />
        </Routes>
      </div>

    </BrowserRouter> 

  );

}

export default App;
