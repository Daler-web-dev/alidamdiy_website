import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Button from "../children/button";

interface ItemProps {
  item?: {
    id?: number;
    name?: string;
    type?: string;
    priceWithDriver?: number;
    img: any;
    desc?: string;
    countOfPlaces: number;
  };
}
const Item: React.FC<ItemProps> = ({ item }) => {
  const [hide, setHide] = useState<boolean>(false);
  return (
    <Link
      href={`/${item?.id}`}
      onMouseEnter={() => setHide(true)}
      onMouseLeave={() => setHide(false)}
      className="relative flex flex-col justify-between rounded-[15px] ease-in duration-100 hover:shadow-[0_0_15px_#00000050] bg-white"
    >
      <div className="px-[15px] py-2 text-[#474747]">
        <h3 className="text-xl max-xl:text-lg font-bold leading-[190%] tracking-[-0.011em]">
          {item?.name || "Chevrolet Lacetti"}
        </h3>
        <p className="leading-[190%] tracking-[-0.011em]">
          {item?.type || "Хэтчбек"}
        </p>
      </div>
      <div className="w-full">
        <Image
          className="w-full h-full object-cover"
          src={`/${item?.img[0]}`}
          width={100}
          height={100}
          alt="car"
        />
      </div>
      <div className="flex items-center justify-between px-[20px] pt-[15px] pb-[24px] border-t border-[#C6C6C6]">
        <div className="flex items-center gap-[6px]">
          <div className="w-[18px] h-[24px]">
            <Image
              className=""
              src={"/images/icons/seat.png"}
              width={100}
              height={100}
              alt="seat"
            />
          </div>
          <p className="leading-[190%] tracking-[-0.011em] text-[#474747]">
            {item?.countOfPlaces} мест
          </p>
        </div>
        <div className="">
          <p className="text-xl max-xl:text-sm max-md:text-base font-semibold leading-[190%] tracking-[-0.011em] text-[#FC0202]">
            {item?.priceWithDriver || 25}$/сутки
          </p>
        </div>
      </div>
      <div
        className={`bg-white w-full rounded-b-[15px] px-[20px] pb-[17px] absolute top-[95%] left-0 z-10 shadow-[0_14px_15px_#00000050] ${hide ? "block" : "hidden"
          }`}
      >
        <div className="mb-[10px]">
          <ul>
            <li className=" leading-[190%] tracking-[-0.011em] text-[#474747]">
              ·&ensp; Аренда на 24 часа
            </li>
            <li className=" leading-[190%] tracking-[-0.011em] text-[#474747]">
              ·&ensp; Сопровождение водителя
            </li>
            <li className=" leading-[190%] tracking-[-0.011em] text-[#474747]">
              ·&ensp; Чистый салон
            </li>
          </ul>
        </div>
        <div>
          <Button>Подробнее</Button>
        </div>
      </div>
    </Link>
  );
};
export default Item;
