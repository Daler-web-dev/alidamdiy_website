import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Slider } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import Products from "@/components/Products";
import Item from "@/components/children/Item";
import Search from "@/components/Search";
import Image from "next/image";
import Context from "@/components/useTranslate";
import { ItranslateData } from "@/components/Types/Types";

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
      id: 1,
      name: "Chevrolet Lacetti",
      type: "Hatchback",
      price: 50,
      img: [
        { firstImg: "images/Cars/lacetti.svg" },
        { secondImg: "images/Cars/lacetti.svg" },
      ],
      description: "lorem ipsum dolor sit amet",
      countOfPlaces: 4,
      carNumber: "30D993AA",
      withDriver: true,
      fuel: 15,
      carInfo: [
        {
          engine: 'text',
          engine2: 'text',
          engine3: 'text',
          engine4: 'text',
          engine5: 'text',
          engine6: 'text',
        }
      ]
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

  const translation = useContext<ItranslateData>(Context);
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
        className="w-full h-[425px] py-6"
        style={{
          backgroundImage: "url('/images/car-bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container m-auto w-full h-full flex flex-col justify-between px-24 max-xl:px-14 max-lg:px-5">
          <div></div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white font-['MyFont'] text-4xl max-lg:text-3xl max-md:text-2xl">
              {translation?.catalogPage.mainText}
            </h1>
            <h1 className="text-white text-xl max-md:text-sm">
              {translation?.catalogPage.linkText}
            </h1>
          </div>
        </div>
      </div>
      <Search
        filteredData={filteredData}
        text={translation?.catalogPage.btn}
        typeOfCar={translation?.catalogPage.typeOfCar}
      />
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
          <h1 className="text-center text-xl">
            {translation?.catalogPage.notFoundText}
          </h1>
        </>
      ) : null}
      <div className="container m-auto grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[30px] max-lg:gap-5 mt-[45px] px-24 max-xl:px-14 max-lg:px-5">
        {data.map((i: ICarsProducts) => (
          <Item key={i.id} item={i} />
        ))}
      </div>
    </>
  );
};
export default Catalog;