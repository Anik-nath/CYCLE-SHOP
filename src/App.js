
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <h2>header</h2>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
