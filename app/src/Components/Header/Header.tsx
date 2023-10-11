import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div className="w-[100%] h-[100%] bg-[#D81921] flex justify-between px-[20px] py-[40px]">
            <div>
                <Link to="/">
                    <h1>My PIZZA</h1>
                </Link>
            </div>
            <div className="flex gap-4">
                <div>
                    <h1 className="text-white">О нас</h1>
                </div>
                <div>
                    <Link to='menu'>
                        <h1 className="text-white">Меню</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}