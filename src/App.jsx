import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import ItemDetailContainer from "./components/ItemDetailContainer";
import StateComponent from "./context/StateComponent";
import Cart from "./components/Cart";



const App = () => {
  return (
    <StateComponent>
      <ChakraProvider>
        <div className="NavBar">
          <NavBar />
        </div>
        <Routes>
          <Route exact path="/catalogo" element={<ItemListContainer />} />
          <Route
            exact
            path="category/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/" element={<Welcome />} />
         <Route exact path="/cart" element={<Cart/>}/>
        
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          
        </Routes>
      </ChakraProvider>
    </StateComponent>
  );
};

export default App;
