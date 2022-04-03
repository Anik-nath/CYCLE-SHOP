import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import AuthProvider from "./Components/Context/AuthProvider";
import Dashboard from "./Components/Dashboard/Dashboard";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Products from "./Components/Pages/Products/Products";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Register from "./Components/Pages/Register/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from "./Components/Shared/Footer/Footer";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Review from "./Components/Shared/Review/Review";
import ScrollTop from "react-scrolltop-button";
import Test from "./Components/Test/Test";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <ScrollTop
  distance={600}
  breakpoint={2000}
  style={{ backgroundColor:"#f1f1f1",padding:"4px 4px",border:"1px solid #ccc", borderRadius:"50%", textTransform:"uppercase" }}
  className="scroll-your-role z-10 border-0"
  speed={500}
  target={75}
/>
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
            <Route path="/test">
              <Test></Test>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/products">
              <Products></Products>
            </PrivateRoute>
            <Route path="/purchase/:cycleId">
              <Purchase></Purchase>
            </Route>
          </Switch>
          <NewsLetter></NewsLetter>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
