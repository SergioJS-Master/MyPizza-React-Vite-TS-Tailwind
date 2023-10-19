import { FC, useState } from "react"
import Pizza from "../../models/Pizza"
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import Modal from "../Pages/Modal/Modal"
import FormEditPizza from "../Pages/FormEditPizza/FormEditPizza"

interface SinglePizzasProps {
    pizza: Pizza
}

const SinglePizzas: FC<SinglePizzasProps> = ({pizza}) => {
    const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false)

    const closeModal = () => {
        setIsOpenModalEdit(false)
    }

    const openModal = () => {
        setIsOpenModalEdit(true)
    }

    return (
        <div className="flex flex-col gap-2 mt-[30px] mb-[30px] shadow-md rounded-lg p-6 px-10">
            <img className="w-[225px] h-[225px]" src={`../../../public/images/${pizza.img}`} alt={pizza.title} />
            <h2 className="font-semibold">{pizza.title}</h2>
            <p className="font-semibold">{pizza.price}<span>Rub</span> </p>
            <div className="flex justify-between">
                <AiFillEdit onClick={openModal} size='25' color='black'/>
                <AiFillDelete size='25' color='black'/>
            </div>
            <Modal isOpen={isOpenModalEdit} closeHandler={closeModal}>
                <FormEditPizza pizza={pizza}/>
            </Modal>
        </div>
    )
}

export default SinglePizzas