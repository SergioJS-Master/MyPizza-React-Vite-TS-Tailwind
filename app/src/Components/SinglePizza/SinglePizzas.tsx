import { FC, useState } from "react"
import Pizza from "../../models/Pizza"
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import Modal from "../Pages/Modal/Modal"
import FormEditPizza from "../Pages/FormEditPizza/FormEditPizza"
import DetailPizza from "../Pages/DetailPizza/DetailPizza"

interface SinglePizzasProps {
    pizza: Pizza
}

const SinglePizzas: FC<SinglePizzasProps> = ({pizza}) => {
    const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false)
    const [isOpenModalDetail, setIsOpenModalDetail] = useState<boolean>(false)

    const closeModalEdit = () => {
        setIsOpenModalEdit(false)
    }
    const openModalEdit = () => {
        setIsOpenModalEdit(true)
    }

    const closeModalDetailPizza = () => {
        setIsOpenModalDetail(false)
    }
    const openModalDetailPizza = () => {
        setIsOpenModalDetail(true)
    }

    return (
        <div className="flex flex-col gap-2 mt-[30px] mb-[30px] shadow-md rounded-lg p-6 px-10">
            <img onClick={openModalDetailPizza} className="w-[225px] h-[225px]" src={`../../../public/images/${pizza.img}`} alt={pizza.title} />
            <h2 className="font-semibold">{pizza.title}</h2>
            <p className="font-semibold">{pizza.price}<span>Rub</span> </p>
            <div className="flex justify-between">
                <AiFillEdit onClick={openModalEdit} size='25' color='black'/>
                <AiFillDelete size='25' color='black'/>
            </div>
            <Modal isOpen={isOpenModalEdit} closeHandler={closeModalEdit}>
                <FormEditPizza pizza={pizza}/>
            </Modal>
            <Modal isOpen={isOpenModalDetail} closeHandler={closeModalDetailPizza}>
                <DetailPizza pizzaData={pizza}/>
            </Modal>
        </div>
    )
}

export default SinglePizzas