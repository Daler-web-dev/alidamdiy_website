import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";


export interface IAppProps {
  item: {
    id: number;
    name: string;
    type: string;
    countOfPlaces: number;
    price: number;
    img: string;
  };
}

export function SearchResult({ item }: IAppProps) {
  
  return (
    <>
      <Link href={`/${item.id}`}>
        <div
          className="w-full flex justify-between items-center border-b border-[grey] pb-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex gap-4 items-center">
            <Image alt="car" width={170} height={170} src={`/${item.img[0]}`} />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">{item.name}</h1>
              <p>{item.name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1>
              {item.countOfPlaces < 5
                ? item.countOfPlaces + " места"
                : item.countOfPlaces + " мест"}
            </h1>
            <h1 className="text-[#FC0202] font-semibold">
              {item.price}$/сутки
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
}
