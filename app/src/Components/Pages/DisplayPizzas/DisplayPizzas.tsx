import { FC, useState } from 'react';
import Pizza from '../../../models/Pizza';
import SinglePizzas from '../SinglePizza/SinglePizzas';
import Pagination from '../Pagination/Pagination';

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {

  const [currentPage, setCurrentPage] = useState <number>(1)
  const [postsPerPage] = useState <number>(3)


  const lastPostIndex = currentPage * postsPerPage //переменная для индекса последнего поста
  const firstPostIndex = lastPostIndex - postsPerPage //переменная для индекса первого поста 
  const currentPosts = pizzasList.slice(firstPostIndex, lastPostIndex) //обрезание ненужных карточек на странице
  
  
  return (
    <>
    <div>
        {pizzasList.length > 0 && (
        <div className="border-t-4 border-red-700 rounded-full my-[20px] w-[450px]"></div>
      )}
    </div>
    <div className="flex items-center justify-center gap-14">
      {currentPosts.map((pizza) => {
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
    <Pagination postsPerPage={postsPerPage} totalPosts={pizzasList.length} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
  );
};

export default DisplayPizzas;
