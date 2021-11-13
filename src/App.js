
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Products from './Components/Pages/Products/Products';
import Purchase from './Components/Pages/Purchase/Purchase';
import Register from './Components/Pages/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Shared/Footer/Footer';
import Navigation from './Components/Shared/Navigation/Navigation';
import Review from './Components/Shared/Review/Review';

function App() {

  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/dashboard">
           <Dashboard></Dashboard>
          </Route>
          <PrivateRoute path="/products">
            <Products></Products>
          </PrivateRoute>
          <Route path="/purchase/:cycleId">
            <Purchase></Purchase>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
