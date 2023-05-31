import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Slider } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import Products from "@/components/Products";
import Item from "@/components/children/Item";
import Search from "@/components/Search";
import Image from "next/image";

export interface ICarsProducts {
  id: string;
  name: string;
  type: string;
  price: number;
  img: string;
  desc: string;
}

const Catalog: React.FC<ICarsProducts> = () => {
  const cars = [
    {
      id: uuidv4(),
      name: "Chevrolet Lacetti",
      type: "Hatchback",
      price: 50,
      img: "images/Cars/lacetti.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Аveo",
      type: "Sedan",
      price: 70,
      img: "images/Cars/nexia-ravon3.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Orlando",
      type: "Minivan",
      price: 30,
      img: "images/Cars/orlando.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Lacetti",
      type: "Hatchback",
      price: 20,
      img: "images/Cars/lacetti.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Аveo",
      type: "Sedan",
      price: 30,
      img: "images/Cars/nexia-ravon3.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Orlando",
      type: "Minivan",
      price: 90,
      img: "images/Cars/orlando.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Lacetti",
      type: "Hatchback",
      price: 100,
      img: "images/Cars/lacetti.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Аveo",
      type: "Sedan",
      price: 70,
      img: "images/Cars/nexia-ravon3.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Orlando",
      type: "Minivan",
      price: 30,
      img: "images/Cars/orlando.svg",
      desc: "lorem ipsum dolor sit amet",
    },
  ];

  const [data, setData] = useState<any>(cars);
  const filteredData = (arg: { mark: string; type: string; range: string }) => {
    setData(
      cars.filter((item: any) => {
        if (arg.type === item.type && arg.range == item.price) {
          return item;
        } else if (arg.type === "All") {
          return item;
        }
      })
    );
  };

  return (
    <>
      <div
        className="w-full h-[425px] px-24 py-6"
        style={{
          backgroundImage: "url('/images/car-bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex flex-col justify-between">
          <div></div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white font-['MyFont'] text-4xl ">
              Каталог авто
            </h1>
            <h1 className="text-white text-xl">Главная страница / Каталог</h1>
          </div>
        </div>
      </div>
      <Search filteredData={filteredData} />
      {!data.length ? (
        <>
          <div className="w-full px-24 py-6 flex justify-center mt-4">
            <Image
              width={100}
              height={100}
              alt="search"
              src="/images/search.png"
            />
          </div>
          <h1 className="text-center text-xl">Мы не нашли то, что вы искали</h1>
        </>
      ) : null}
      <div className="grid grid-cols-4 gap-[30px] mt-[45px] px-24">
        {data.map((i: ICarsProducts) => (
          <Item key={i.id} item={i} />
        ))}
      </div>
    </>
  );
};
export default Catalog;
