import * as React from "react";

export interface IAppProps {
  item: {
    name: string,
    img: string
  }
}

const Products: React.FC<IAppProps> = ({ item }) => {
  console.log(item);
  
  return (
    <div className="w-full h-[250px] bg-[#D9D9D9]">
      <img src={item?.img} alt="" />
      <h1>{item?.name}</h1>
    </div>
  )
}

export default Products;
