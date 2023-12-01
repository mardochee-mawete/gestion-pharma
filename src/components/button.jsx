import { useNavigate } from "react-router-dom" //Nous permet de naviguer entre pages

export default function Button({linkValue, buttonValue}){
    const navigate = useNavigate()

    const handleclick = ()=>{
        navigate(linkValue)
    }

    return(
        <button onClick={handleclick}>
                {buttonValue}
        </button>
    )
}