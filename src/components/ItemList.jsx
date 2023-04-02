import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="container">
        {products?.map((product) => {
          return (
            <div key={product.id}>
              <Item
                precio={product.precio}
                category={product.category}
                disponible={product.disponible}
                id={product.id}
                nombre={product.nombre}
                image={product.image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
