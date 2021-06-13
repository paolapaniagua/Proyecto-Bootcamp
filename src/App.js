import React  from 'react';
import routes from './Routes/routes';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home'

function App() {

  return (
    <BrowserRouter>
    <div className="app-container">
      <h1>Post-It App</h1>
      <div className="app-container__inner">
        <Switch>
          <Route exact path={`${routes.HOME}`} component={Home} />
          <Route render={() => <h1>404 - No se encontró</h1>} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>

  );
}

export default App;