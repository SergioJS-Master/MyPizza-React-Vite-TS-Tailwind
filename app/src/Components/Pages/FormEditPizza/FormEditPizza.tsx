import { FC, useState } from "react";
import { TEInput, TERipple } from 'tw-elements-react';
import Pizza from "../../../models/Pizza"


interface SinglePizzaFormProps {
    pizza: Pizza
    updatePizza: (newPizza: Pizza) => void
    closeHandler: () => void
}

const FormEditPizza: FC<SinglePizzaFormProps> = ({pizza, updatePizza, closeHandler}) => {
  const [editPizza, serEditPizza] = useState<Pizza>(pizza)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    serEditPizza({
      ...editPizza,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza)
      closeHandler()
    }
  };

    return (
        <div className="block max-w-sm rounded-lg bg-white p-[50px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <form onSubmit={handleSubmit} className='relative z-1'>
            <div className="grid grid-cols-2 gap-4">
              <TEInput
                name="title"
                type="text"
                label="Название"
                className="mb-6"
                onChange={handleChange}
                value={editPizza.title}
              ></TEInput>

              <TEInput
                name="price"
                type="text"
                label="Стоимость"
                className="mb-6 bg-red-600"
                onChange={handleChange}
                value={editPizza.price}
              ></TEInput>
            </div>

            <TEInput
              name="img"
              type="text"
              label="Изображение"
              className="mb-6"
              onChange={handleChange}
              value={editPizza.img}
            ></TEInput>

            {/* <!--Submit button--> */}
            <TERipple rippleColor="light" className="w-full">
              <button
                type="submit"
                className="block w-full rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase 
                leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
                hover:bg-[#c1030a] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                focus:bg-[#c1030a] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                focus:outline-none focus:ring-0 active:bg-[#c1030a] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
              >
                Принять изменения
              </button>
            </TERipple>
          </form>
        </div>
    )
}

export default FormEditPizza