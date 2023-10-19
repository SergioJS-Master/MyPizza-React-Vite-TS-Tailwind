import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className="w-[100%] -mt-[25px] bg-[#D81921] flex justify-between px-[20px] py-[20px] items-center sticky left-0 top-0 z-999">
                <Link to="/">
                    <h1 className='text-[20px] opacity-100'>My PIZZA</h1>
                </Link>
            <div className="flex gap-4 items-center">
                <h1 className="text-white text-[20px]">О нас</h1>
                <Link to='menu'>
                    <h1 className="text-white text-[20px] opacity-100">Меню</h1>
                </Link>
            </div>
        </header>
    )
}