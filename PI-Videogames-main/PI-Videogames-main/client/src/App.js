import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/landing';
import './App.css';
import Header from './components/Header/header';


// Aca Renderizamos la Mainapp, a la que accedemos luego de Ingresar en la landing page.
const MainApp = () => {
  return (
    <div className='Background'>
      <Header />
    </div>
  );
};

// Aca se renderiza la landing page con background y Boton de Ingresar.
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={MainApp} />
        {/* Otras rutas según sea necesario */}
      </Switch>
    </Router>
  );
};


export default App;