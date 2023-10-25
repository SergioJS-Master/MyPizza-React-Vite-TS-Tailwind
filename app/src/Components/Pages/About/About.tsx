import { FC, useState } from "react"

interface ProductInt {
    name: string;
    price: number;
    discount: number;
    dateAdded: string
}



const productsData: ProductInt[] = [
    { name: "Product A", price: 100, discount: 10, dateAdded: "01/01/2021" },
    { name: "Product B", price: 200, discount: 20, dateAdded: "02/01/2021" },
    { name: "Product C", price: 150, discount: 5, dateAdded: "03/01/2021" },
  ];
  
const About: FC = () => {
    const [productData, setProductData] = useState<ProductInt[]>(productsData)
  
    const sortPrice = (): void => {
      const cloneProductData: ProductInt[] = [...productsData]
      cloneProductData.sort((a, b) => a.price - b.price)
      
      setProductData(cloneProductData)
    }
  
    const sortDiscount = (): void => {
      const cloneProductData: ProductInt[] = [...productsData]
      cloneProductData.sort((a, b) => b.discount - a.discount)
      
      setProductData(cloneProductData)
    }
  
    const sortDate = (): void => {
      const cloneProductData = [...productsData]
      cloneProductData.sort((a: ProductInt, b: ProductInt) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime())
      
      setProductData(cloneProductData)
    }
  
    const brakeSort = () => {
      setProductData(productsData)
    }


    
  
    return (
      <div className="min-h-[100vh] mt-[40px] flex justify-center items-center">
        <div className="flex flex-col">
            <div className="flex justify-center items-center gap-4 mb-[15px]">
                <button onClick={sortPrice} className="shadow-md rounded-lg p-6 px-10">по цене</button>
                <button onClick={sortDiscount} className="shadow-md rounded-lg p-6 px-10">по скидке</button>
                <button onClick={sortDate} className="shadow-md rounded-lg p-6 px-10">по дате </button>
                <button onClick={brakeSort} className="shadow-md rounded-lg p-6 px-10 bg-red-700">сброс</button>
            </div>
        
            <div className="flex gap-4">{productData.map((el: ProductInt, index: number) => {
            return (
                <div className="shadow-md rounded-lg p-6 px-10" key={index}>
                    <h2>{el.name}</h2>
                    <p>Цена: {el.price}₽</p>
                    <p>Скидка: {el.discount}%</p>
                    <p>Дата добавления: {el.dateAdded}</p>
                </div>
            )
            })}</div>
        </div>
      </div>
    )
}

export default About