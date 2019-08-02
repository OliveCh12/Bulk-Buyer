import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Cryptos from "./components/Cryptos";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SettingBar from "./components/SettingBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-md-12">
              <Route path="/" exact component={Cryptos} />
            </div>
            <div className="col-md-3" />
          </div>
        </div>
        <SettingBar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
