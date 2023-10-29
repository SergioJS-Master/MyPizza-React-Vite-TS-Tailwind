/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react"
import Pizza from "../../../models/Pizza"
import { useParams } from "react-router-dom";


const DetailPizza: FC = () => {
    const [pizza, setPizza] = useState<Pizza | null>(null);
    const { detailPizzaId } = useParams();
  
    useEffect(() => {
      const pizzaState = localStorage.getItem('pizzasState');
      console.log(pizzaState);
  
      const pizzasList = JSON.parse(pizzaState || '[]');
      console.log(pizzasList);
  
      const detailPizzaIdParseInt = parseInt(detailPizzaId || '0');
  
      if (pizzasList.length > 0 && detailPizzaIdParseInt > 0) {
        const currentPizza = pizzasList.find((p: Pizza) => p?.id === detailPizzaIdParseInt);
        setPizza(currentPizza);
        console.log(pizza);
      }
    }, []);
  
    // console.log('detailPizzaId>>>', detailPizzaId);
      

    return (
        <div className="flex flex-col justify-center items-center min-h-[100vh]">
                <h1 className="text-[55px]">{pizza?.title}</h1>
            <div className="flex flex-col gap-2 mt-[30px] mb-[30px] bg-white shadow-md rounded-lg p-6 px-10">
                <img className="w-[250px] h-[250px]" src={`../../../../public/images/${pizza?.img}`} alt="" />
                <h2 className="text-[25px]">Цена: {pizza?.price}₽</h2> 
            </div>
            <div className="border-t-4 border-red-700 rounded-full my-[20px] w-[450px]"></div>
            <h1>The best pizza in town!</h1>
        </div>
    )
}

export default DetailPizza