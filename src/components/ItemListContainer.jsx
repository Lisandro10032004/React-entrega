import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "productos");
    getDocs(itemCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProducts(docs);
    });
  }, []);

  const productFilter = products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      {category ? (
        <ItemList products={productFilter} category={category} />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
