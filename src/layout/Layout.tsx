import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";

interface LayoutProps {
}

type Layout = {
   children: React.ReactNode;
}
const Layout = ({ children }: Layout) => {
   return (
      <div className={'w-full h-screen fixed top-0 left-0 bg-white z-50 flex items-center justify-center'}>
         <h1>Сайт не работает из-за выплаты!</h1>
         {/* <Header />
         <main>
            {children}
         </main>
         <Footer /> */}
      </div>
   );
}

export default Layout;