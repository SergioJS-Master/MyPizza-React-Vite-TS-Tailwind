import { FC } from 'react';
import Pizza from '../../../models/Pizza';
import SinglePizzas from '../../SinglePizza/SinglePizzas';

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {
  return (
    <>
    <div>
        {pizzasList.length > 0 && (
        <div className="border-t-4 border-red-700 rounded-full my-[20px] w-[450px]"></div>
      )}
    </div>
    <div className="flex flex-col items-center">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizzas
            deletePizza={deletePizza}
            key={pizza.id}
            pizza={pizza}
            updatePizza={updatePizza}
          />
        );
      })}
    </div>
    </>
  );
};

export default DisplayPizzas;
