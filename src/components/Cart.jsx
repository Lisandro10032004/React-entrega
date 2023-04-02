import React, { useState, useContext } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/StateComponent";

const ItemDetail = ({ precio, nombre, image, id, descripcion }) => {
  const { sumarProds } = useContext(CounterContext);

  const handleComprarClick = () => {
    sumarProds();
  };
  
  // Resto del código de ItemDetail
};

const Cart = () => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const { resetProds } = useContext(CounterContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <form onSubmit={handleSubmit}>
          <Flex direction="column">
            <FormControl id="nombre" isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
            </FormControl>
            <FormControl id="mail" isRequired mt={4}>
              <FormLabel>mail</FormLabel>
              <Input
                placeholder="Ingresa tu mail"
                value={mail}
                onChange={(event) => setMail(event.target.value)}
              />
            </FormControl>
          </Flex>
        </form>
        <Button onClick={resetProds} mt={4} colorScheme="blue">
          <Link to="/catalogo">Enviar</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;

