import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import Link from "next/link";

interface ItemProps {}

const Item: React.FC<ItemProps> = () => {
  const [hide, setHide] = useState<boolean>(false);

  return (
    <Link
      href={"/qctw"}
      onMouseEnter={() => setHide(true)}
      onMouseLeave={() => setHide(false)}
      className="relative rounded-[15px] ease-in duration-100 hover:shadow-[0_0_15px_#00000050] bg-white"
    >
      <div className="px-[15px] py-2 text-[#474747]">
        <h3 className="text-xl font-bold leading-[190%] tracking-[-0.011em]">
          Chevrolet Lacetti
        </h3>
        <p className="leading-[190%] tracking-[-0.011em]">Хэтчбэк</p>
      </div>
      <div className="">
        <Image
          className="w-full h-full object-cover"
          src={"/images/cars/lacetti.svg"}
          width={100}
          height={100}
          alt="car"
        />
      </div>
      <div className="flex items-center justify-between px-[20px] pt-[15px] pb-[24px] border-t border-[#C6C6C6]">
        <div className="flex gap-[6px]">
          <Image
            className="w-auto"
            src={"/images/icons/seat.png"}
            width={18}
            height={24}
            alt="seat"
          />
          <p className="leading-[190%] tracking-[-0.011em] text-[#474747]">
            4 места
          </p>
        </div>
        <div className="">
          <p className="text-xl font-semibold leading-[190%] tracking-[-0.011em] text-[#FC0202]">
            25$/сутки
          </p>
        </div>
      </div>
      <div
        className={`bg-white w-full rounded-b-[15px] px-[20px] pb-[17px] absolute -bottom-36 left-0 z-10 shadow-[0_14px_15px_#00000050] ${
          hide ? "block" : "hidden"
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