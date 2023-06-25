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
          className="w-full max-sm:h-full flex max-sm:flex-col justify-between items-center max-sm:items-start border-b border-[grey] pb-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-sm:h-full w-1/2 max-xl:w-3/5 max-md:w-3/4 max-sm:w-full flex max-sm:justify-between max-sm:flex-col-reverse gap-4 items-center max-sm:items-start">
            <div className="w-2/5 max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center">
              <Image className="w-full h-full max-sm:w-3/4 object-contain" alt="car" width={170} height={170} src={`/${item.img[0]}`} />
            </div>
            <div className="w-3/5 max-sm:w-full flex flex-col gap-2">
              <h1 className="text-xl max-md:text-base max-sm:text-sm font-bold">{item.name}</h1>
              <p className="max-md:text-sm max-sm:text-xs">{item.name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-sm:gap-1">
            <h1 className="">
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
