import React, { useContext } from "react";
import CardWidget from "./CardWidget";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/StateComponent";

const NavBar = () => {
  const { prods } = useContext(CounterContext);

  return (
    <>
      <Link to={"/"}>
        <h1 className="titulo">Celumundo</h1>
      </Link>

      <div className="menu">
        <Link to={"/catalogo"}>
          <Button colorScheme="blue">Catalogo</Button>
        </Link>

        <Menu>
          <MenuButton
            className="cat"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            categorías
          </MenuButton>
          <MenuList>
            <Link to={`/category/${"celulares"}`}>
              <MenuItem>celulares</MenuItem>
            </Link>
            <Link to={`/category/${"netbooks"}`}>
              <MenuItem>netbooks</MenuItem>
            </Link>
            <Link to={`/category/${"tablets"}`}>
              <MenuItem>tablets</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
      <Button colorScheme="blue">
        <Link to={"/cart"}>
          <CardWidget valor={prods} />
        </Link>
      </Button>
    </>
  );
};

export default NavBar;
