import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/landing';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import VideoGamesCards from './components/VideoGameCards/videogamescards';
import About from './components/About/about';
import './App.css';


function App() {
  return (
    <div className='Background'>
      <React.Fragment>
          <Route exact path="/" component={Landing} />
          <Route exact path="/App" component={Header} />
          <Route exact path="/App" component={Navbar} />
          <Route path="/App" component={VideoGamesCards}/>
          <Route path="/about" component={About}/> 
      </React.Fragment>
  </div>
  );
};

export default App;






// Aca Renderizamos la Mainapp, a la que accedemos luego de Ingresar en la landing page.
// const MainApp = () => {

//   return (
//     <Router> 
//     <div className='Background'>
//       <Header />
//       <Navbar />
//       <Switch>
//       <Route path="/app" component={VideoGamesCards} />
//       </Switch>
//     </div>
//     </Router>
//   );
// };

