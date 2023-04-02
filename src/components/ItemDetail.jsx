import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Image,
  Heading,
  Stack,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CounterContext } from "../context/StateComponent";
import { Link } from "react-router-dom";

const ItemDetail = ({ precio, nombre, image, id, descripcion }) => {
  const { sumar, restar, counter, sumarProds } = useContext(CounterContext);

  const handleComprarClick = () => {
    sumarProds();
  };

  return (
    <>
      <Card className="card" maxW="sm">
        <CardBody>
          <Image className="img-product" src={image} alt="" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>
            <Text>
              <b>Descripción: </b>
              {descripcion}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              ${precio}
            </Text>
            <Text>
              <b>Cantidad: </b>
              <p>{counter}</p>
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link to={"/catalogo"}>
            <Button onClick={()=>sumarProds()} variant="solid" colorScheme="blue">
             Agregar 
            </Button>
            </Link>
            <Button onClick={() => restar()} variant="solid" colorScheme="blue">
              -
            </Button>
            <Button onClick={() => sumar()} variant="solid" colorScheme="blue">
              +
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default ItemDetail;