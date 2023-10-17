import { FC } from "react"
import Pizza from "../../../models/Pizza"

interface DisplayPizzasProps {
    pizzasList: Pizza[]
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList}) => {
    return (
        <div className="">
            {pizzasList.map((pz) => {
                return (
                 <div className="flex flex-col items-center">
                     <h1>{pz.title}</h1>
                 </div>   
                )
             
            })}
        </div>
    )
}

export default DisplayPizzas