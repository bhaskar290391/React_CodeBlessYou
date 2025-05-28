import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routings/Routing";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="app_main">
        <Routing></Routing>
      </main>
    </div>
  );
};

export default App;
