import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Slider } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { Search } from "@/components/Search";
import Products from "@/components/Products";
import Item from "@/components/children/Item";

export interface IAppProps {}

export default function Catalog(props: IAppProps) {
  const cars: any = [
    {
      id: uuidv4(),
      name: "Chevrolet Lacetti",
      type: "Hatchback",
      price: "50",
      img: "images/Cars/lacetti.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Аveo",
      type: "Sedan",
      price: "70",
      img: "images/Cars/nexia-ravon3.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Orlando",
      type: "Minivan",
      price: "30",
      img: "images/Cars/orlando.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Lacetti",
      type: "Hatchback",
      price: "50",
      img: "images/Cars/lacetti.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Аveo",
      type: "Sedan",
      price: "70",
      img: "images/Cars/nexia-ravon3.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Orlando",
      type: "Minivan",
      price: "30",
      img: "images/Cars/orlando.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Lacetti",
      type: "Hatchback",
      price: "50",
      img: "images/Cars/lacetti.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Аveo",
      type: "Sedan",
      price: "70",
      img: "images/Cars/nexia-ravon3.svg",
      desc: "lorem ipsum dolor sit amet",
    },
    {
      id: uuidv4(),
      name: "Chevrolet Orlando",
      type: "Minivan",
      price: "30",
      img: "images/Cars/orlando.svg",
      desc: "lorem ipsum dolor sit amet",
    },
  ];

  const [data, setData] = useState<any>(cars);
  const [arr, setArr] = useState<any>();

  const filteredData = (arg: string) => {
    setData(
      cars.filter((item: any) => {
        if (arg === item.type) {
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
      <Search />
	  <div className="grid grid-cols-4 gap-[30px] mt-[45px] px-24">
	          {
	        	[1,2,3,4,5,6,7,8].map((i) => <Item />)
	          }
	  </div>
    </>
  );
}
