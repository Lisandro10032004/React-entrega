import React from "react";
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
import { Link } from "react-router-dom";

const Item = ({ precio, nombre, image, id }) => {
  return (
    <>
      <Card className="card" maxW="sm">
        <CardBody>
          <Image className="img-product" src={image} alt="" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>

            <Text color="blue.600" fontSize="2xl">
              ${precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
           
            <Button variant="solid" colorScheme="blue">
            <Link to={`/item/${id}`}>ver</Link>
            </Button>
            
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
