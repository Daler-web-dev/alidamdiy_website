import Image from "next/image";
import Link from "next/link";
import Context from "./useTranslate";
import { ItranslateData } from "./Types/Types";
import { useContext } from "react";

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
   const translation = useContext<ItranslateData>(Context)
   return (
      <footer className="w-full mt-[90px] max-lg:mt-20 max-md:mt-10 max-sm:mt-7 rounded-t-[16px] bg-[#BBBBBB]">
         <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 py-[70px] max-lg:py-[60px] flex max-md:flex-col items-start gap-20 max-lg:gap-14 max-md:gap-5 max-sm:gap-0">
            <div className="w-1/2 h-full flex max-md:justify-start max-md:mb-5">
               <Image className="" src={'/images/logo.svg'} width={391} height={105} alt="logo" />
            </div>
            <div className="w-2/4 max-xl:w-3/5 max-lg:w-full">
               <nav className="grid grid-cols-3 max-sm:grid-cols-2 gap-10 max-md:gap-20 max-sm:gap-5">
                  <ul className="flex flex-col gap-3">
                     <li className="text-2xl font-bold">{ translation?.footer.menu }</li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>{ translation?.header.catalog }</Link>
                     </li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>{ translation?.header.drivers }</Link>
                     </li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>
                        { translation?.questions.questionText }
                        </Link>
                     </li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>
                        { translation?.header.company }
                        </Link>
                     </li>
                  </ul>
                  <ul className="flex flex-col gap-3">
                     <li className="text-2xl font-bold">{ translation?.footer.company }</li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>{ translation?.footer.rules }</Link>
                     </li>
                     <li className="hover:underline underline-offset-2">
                        <Link href={'#'}>{ translation?.footer.terms }</Link>
                     </li>
                  </ul>
                  <ul className="flex flex-col gap-3">
                     <li className="text-2xl font-bold">{ translation?.footer.media }</li>
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