import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetailList from './ItemDetailList';

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
 

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "productos");
    getDocs(itemCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProducts(docs);
    
    });
  }, []);

  const idFilter = products.filter((product) => product.id == id)

  return (
    <>
  <div>
      {id ? <ItemDetailList products={idFilter} id={id} /> : <ItemDetailList products={products} />}
    </div>
 
    </>
  );
};

export default ItemDetailContainer;
