import React from 'react';
import {Route, Routes,} from 'react-router-dom';
import Home from './container/Home/Home';
import AboutUs from './container/AboutUs/AboutUs';
import Contacts from './container/Contacts/Contacts';
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <header>
        <Navigation/>
      </header>
      <main className="containd-fluid">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}/>
          <Route path="/about-us" element={(
            <AboutUs/>

          )} />
          <Route path="/contacts" element={(
            <Contacts />
          )}/>
          <Route path="*" element={(<h1>Content will be soon!</h1>)}/>
        </Routes>
      </main>
    </>
  );
}


export default App;
