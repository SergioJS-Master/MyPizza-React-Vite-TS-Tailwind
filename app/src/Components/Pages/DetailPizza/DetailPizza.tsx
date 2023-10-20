import { FC } from "react"
import Pizza from "../../../models/Pizza"

interface PizzaDataProps {
    pizzaData: Pizza
}
const DetailPizza: FC<PizzaDataProps> = ({pizzaData}) => {


    return (
        <div className="flex flex-col gap-2 mt-[30px] mb-[30px] bg-white shadow-md rounded-lg p-6 px-10">
            <img src={`../../../../public/images/${pizzaData.img}`} alt="" />
            <h1>{pizzaData.price}</h1>
            <p>{pizzaData.title}</p>
        </div>
    )
}

export default DetailPizza