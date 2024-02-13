import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Welcome from './components/Pages/Welcome';
import Stay from './components/Pages/Stay';
import Contact from './components/Pages/Contact.jsx';
import Footer from './components/Footer';
import './App.scss';

const content = {
  "welcome": {
    title: "Welcome"
  },
  "stay": {
    title: "Stay"
  },
  "contact": {
    title: "Contact"
  }
}

const barSet = shuffle([
  './img/photos/bar1.jpg',
  './img/photos/bar2.jpg',
  './img/photos/bar3.jpg',
  './img/photos/bar4.jpg',
  './img/photos/bar5.jpg',
  './img/photos/bar6.jpg'
]);

const roomSet = shuffle([
  './img/rooms/daisy.jpg',
  './img/rooms/iris.jpg',
  './img/rooms/lily.jpg',
  './img/rooms/pansy.jpg',
  './img/rooms/rose.jpg'
]);

const pubSet = shuffle([
  './img/photos/pub1.jpg',
  './img/photos/pub2.jpg',
  './img/photos/pub3.jpg'
]);

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export default function App() {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')) || false);

  function saveMode() {
    localStorage.setItem('mode', JSON.stringify(!mode));
    setMode(!mode);
  }

  return (
    <div className='app'>
      <Router basename='/'>
        <Header />
        <Nav
          names={[content.welcome.title, content.stay.title, content.contact.title]}
        />
        <Routes>
          <Route path='/welcome' element={
            <Welcome
              key={'page' + content.welcome.title}
              title={content.welcome.title}
              imageSet={barSet}
            />
          } />
          <Route path='/stay' element={
            <Stay
              key={'page' + content.stay.title}
              title={content.stay.title}
              imageSet={roomSet}
            />
          } />
          <Route path='/contact' element={
            <Contact
              key={'page' + content.contact.title}
              title={content.contact.title}
              imageSet={pubSet}
            />
          } />
          <Route path='/' element={
            <Navigate to='/welcome' />
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
