import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
//import arrayProductos from "./json/arrayProductos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    
    /* useEffect(() => {

        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000)       
        });
        promesa.then((data) => {
            setItems(data);
        })
    }, [id]); */

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filtro = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filtro).then((snapshot) => {
            setItems(snapshot.docs.map((doc) =>({id:doc.id, ...doc.data()})));
        });
    }, [id]);

    return (
        <div className="container py-5">
                <ItemList items={items}/>                
        </div>
    )
}

export default ItemListContainer;