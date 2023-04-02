import React from 'react'
import ItemDetail from './ItemDetail';


const ItemDetailList = ({products}) => {
  return (
    <div className="container">
    {products?.map((product) => {
      return (
        <div key={product.id}>
          <ItemDetail
            precio={product.precio}
            category={product.category}
            disponible={product.disponible}
            id={product.id}
            nombre={product.nombre}
            image={product.image}
            descripcion={product.descripcion}
          />
        </div>
      );
    })}
  </div>
  )
}

export default ItemDetailList