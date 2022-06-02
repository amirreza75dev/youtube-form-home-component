import Header from "./Header";
import Video from "./video";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Search from "./Search";
import Form from "./Form";
import { useState } from "react";


function App() {
  const [toggle,setToggle] =useState(false)
  return (
    <div className="App">
      <Router>
      <Header toggle={toggle} setToggle={setToggle}/>
      <Switch>
        <Route exact path="/">
          <div className="container">
          <Video />
          <Sidebar toggle={toggle}/>
            
          
          </div>
        </Route>
        <Route exact path="/search/:whatever">
        <div className="container">
          <Search />
          <Sidebar toggle={toggle}/>
            
          
          </div>

        </Route>
        <Route exact path="/form">
        <div className="container">
              <Form />
            
          
          </div>

        </Route>
      </Switch>

      
      
      </Router>
    </div>
  );
}

export default App;
