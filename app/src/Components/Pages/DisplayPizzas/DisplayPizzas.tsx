import { FC } from "react"
import Pizza from "../../../models/Pizza"
import SinglePizzas from "../../SinglePizza/SinglePizzas"

interface DisplayPizzasProps {
    pizzasList: Pizza[]
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList}) => {
    return (
        <div className="">
            {pizzasList.map((pizza) => {
                return <SinglePizzas key={pizza.id} pizza={pizza}/>
             
            })}
        </div>
    )
}

export default DisplayPizzas