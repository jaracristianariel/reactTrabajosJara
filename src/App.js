import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Futer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/NavBar";
import Promo from "./components/Promo";
import Error404 from "./components/Error404";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404/>} />
        </Routes>
        
        <Promo />
        <Futer />
      </BrowserRouter>
    </div>

  );
}

export default App;
