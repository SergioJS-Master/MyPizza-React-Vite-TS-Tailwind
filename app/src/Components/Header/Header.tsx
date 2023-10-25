import { Link, NavLink } from 'react-router-dom'

export function Header() {
    return (
        <header className="w-[100%] -mt-[25px] bg-[#D81921] flex justify-between px-[20px] py-[20px] items-center sticky left-0 top-0 z-999">
                <Link to="/">
                    <h1 className='text-[20px] opacity-100'>My PIZZA</h1>
                </Link>
            <div className="flex gap-4 items-center">
                <NavLink className={({isActive}) => isActive ? 'text-amber-500' : 'text-white'} to='about'>
                    <h1 className='text-[20px] '>О нас</h1>
                </NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-amber-500' : 'text-white'} to='menu'>
                    <h1 className='text-[20px] '>Меню</h1>
                </NavLink>
            </div>
        </header>
    )
}