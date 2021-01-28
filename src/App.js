import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widget"
import Login from "./Login"
import {useStateValue} from "./StateProvide"

function App() {
  const userr=null;
  const [{user},dispatch]=useStateValue();
  return (
    <div className="App">
      {!user? (
        <Login/>
      ) : (    
        <> {/*Fragment koyuyoruz */}
        <Header></Header>
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets/>
      </div>
      </>
      )}

    </div>
  );
}

export default App;
