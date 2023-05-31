import Image from "next/image";
import Link from "next/link";

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

   return (
      <footer className="w-full mt-[100px] rounded-t-[16px] bg-[#BBBBBB]">
         <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-6 py-[70px] max-lg:py-[60px] flex max-md:flex-col items-start gap-20 max-lg:gap-14 max-md:gap-5 max-sm:gap-0">
            <div className="w-1/2 h-full flex max-md:justify-start max-md:mb-5">
               <Image className="" src={'/images/logo.png'} width={391} height={105} alt="logo" />
            </div>
            <div className="w-2/4 max-xl:w-3/5 max-lg:w-full">
               <nav className="grid grid-cols-3 max-sm:grid-cols-2 gap-10 max-md:gap-20 max-sm:gap-5">
                  <ul className="flex flex-col gap-3">
                     <li className="text-2xl font-bold">Меню</li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>Каталог</Link>
                     </li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>Водителям</Link>
                     </li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>
                           Частые вопросы
                        </Link>
                     </li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>
                           О компании
                        </Link>
                     </li>
                  </ul>
                  <ul className="flex flex-col gap-3">
                     <li className="text-2xl font-bold">Компания</li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>Правила пользователя</Link>
                     </li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>Пользовательское соглашение</Link>
                     </li>
                  </ul>
                  <ul className="flex flex-col gap-3">
                     <li className="text-2xl font-bold">Соц сети</li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>Facebook</Link>
                     </li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>Instagram</Link>
                     </li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>Telegram</Link>
                     </li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>Info@alidamdiy.uz</Link>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </footer>
   );
}

export default Footer;