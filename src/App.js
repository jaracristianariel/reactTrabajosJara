import React from "react";
import Futer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import Promo from "./components/Promo";

function App() {
  return (
    <div >
      <Navbar />
      <ItemListContainer greeting={"No Voten Al kirchnerismo"}/>
      <Promo />
      <Futer />
      
    </div>

  );
}

export default App;
