import Image from "next/image";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = ({ }) => {

   return (
      <header className="w-full bg-[#BBBBBB]">
         <div className="container mx-auto px-6 py-7 bg-[#BBBBBB]">
            <h1>header</h1>
         </div>
      </header>
   );
}

export default Header;