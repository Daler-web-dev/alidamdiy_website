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
      <>
         {/* <h1>Сайт не работает из за не уплаты!</h1> */}
         <Header />
         <main>
            {children}
         </main>
         <Footer />
      </>
   );
}

export default Layout;