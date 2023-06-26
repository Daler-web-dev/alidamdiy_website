import Image from "next/image";
import * as React from "react";

export interface IAppProps {
  item: {
    name: string,
    img: string
  }
}

const Products: React.FC<IAppProps> = ({ item }) => {

  return (
    <div className="w-full h-[250px] bg-[#D9D9D9]">
      <Image src={item?.img} alt="smth" width={1000} height={1000} />
      <h1>{item?.name}</h1>
    </div>
  )
}

export default Products;
