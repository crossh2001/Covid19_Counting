import DisplayItems from "./components/DisplayItems";
import Fetchdata from "./components/Fetchdata";
import { useState } from "react";
import CountryPage from "./Page/CountryPage";
import ContinentPage from "./Page/ContinentPage";
import GenericCountry from "./Page/GenericCountry";
import LocationPage from "./Page/LocationPage";
import MainPage from "./Page/MainPage";
import Header from './components/Header'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [data, setData] = useState({});

  return (
    <>
      <Fetchdata setData={setData} />
      {/* <DisplayItems data={data} />; */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/CountryPage">
            <CountryPage data={data} />
          </Route>
          <Route path="/ContinentPage">
            <ContinentPage data={data}/>
          </Route>
          <Route path="/LocationPage">
            <LocationPage data={data}/>
          </Route>
          <Route path="/GenericCountry">
            <GenericCountry />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
