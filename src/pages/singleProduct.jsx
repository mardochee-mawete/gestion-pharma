import { useParams } from "react-router-dom" //Pour récupérer les paramètres ou props passés en lien


export default function SingleProduct(){
    const {id} = useParams()  // "id" voir App.jsx dans les routes
    return(
        <h1>Single Product {id}</h1>
    )
}