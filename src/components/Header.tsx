import Image from "next/image";
import Link from "next/link";
import { BiSearch } from 'react-icons/bi'

interface HeaderProps {
}
const Header: React.FC<HeaderProps> = ({ }) => {

   return (
      <header className="w-full bg-[#BBBBBB]">
         <div className="container mx-auto px-[100px] py-7 flex items-center justify-between bg-[#BBBBBB]">
            <div className="">
               <Link href={'/'}>
                  <Image src={'/images/logo.png'} width={170} height={45} alt="logo" />
               </Link>
            </div>
            <div className="flex items-center">
               <div className="relative">
                  <BiSearch size={15} className="absolute top-1 left-1" />
                  <input type="text" className="max-w-[180px] w-full px-6 border-b border-[#000] bg-transparent outline-transparent" />
               </div>
            </div>
            <div className="">
               <nav>
                  <ul className="flex gap-8">
                     <li className="font-medium text-[#474747]">
                        <Link href={'/catalog'}>Каталог</Link>
                     </li>
                     <li className="font-medium text-[#474747]">
                        <Link href={'#'}>Водителям</Link>
                     </li>
                     <li className="font-medium text-[#474747]">
                        <Link href={'#'}>О компании</Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className="">
               <h1 className="font-bold text-[#E31E24]">+998 91 123 32 33</h1>
            </div>
            <div className="">
               <select className="font-medium uppercase bg-transparent">
                  <option>ru</option>
                  <option>uz</option>
               </select>
            </div>
            <div className="">
               <button className="px-6 py-2 bg-[#E31E24] text-white">Сделать заказ</button>
            </div>
         </div>
      </header>
   );
}

export default Header;