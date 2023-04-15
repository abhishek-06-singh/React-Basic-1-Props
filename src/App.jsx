import React from 'react';
import Cards from './Cards';
import Navbar from './Navbar';
import data from "./data";
import "./index.css";

function App() {
  return (
    <>
      <Navbar src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png" />
      <div className="App">
        {data.map((val) => (
          <Cards
            key={val.id}
            imgs={val.img}
            title={val.name}
            genra={val.gen}
            rating={val.rate}
          />
        ))}
      </div>
    </>
  );
}

export default App;
