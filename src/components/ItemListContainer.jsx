import { useEffect, useState } from "react"
import "../css/ItemListContainer.css"
import { getProductos, productos } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, where, query, addDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemListContainer = (props) => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const { type } = useParams()

    //FIREBASE
    useEffect(() => {
        setLoader(true)
        //conectarnos con nuestros productos
        const productsCollection = type
            ? query(collection(db, "productos"), where("category", "==", type))
            : collection(db, "productos")
        getDocs(productsCollection)
            .then((res) => {

                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setData(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))
    }, [type])


    return (

       
        <>
            {
                loader ? <LoaderComponent />
                    : <div className='contenedor-saludo'>
                        <h1>{props.saludo}{type && <span>{type}</span>}</h1>
                        <ItemList data={data} />
                    </div>
            }
        </>
    )
}

export default ItemListContainer