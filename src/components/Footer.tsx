import Image from "next/image";

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

   return (
      <footer className="w-full mt-[100px] bg-[#BBBBBB]">
         <div className="container mx-auto px-6 py-[70px]">
            <h1>footer</h1>
         </div>
      </footer>
   );
}

export default Footer;