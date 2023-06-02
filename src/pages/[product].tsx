import Button from "@/components/children/Button";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import * as React from "react";
import Description from "@/components/Description";

export interface IAppProps {}

export default function product(props: IAppProps) {
  const [isActive, setIsActive] = React.useState<string>("characteristic");
  return (
    <div className="container mx-auto px-24 max-xl:px-14 max-lg:px-5 mt-4">
      <h1 className='text-3xl max-lg:text-2xl font-["MyFont"] mb-2'>
        Chevrolet Orlando
      </h1>
      <p className="max-md:text-sm mb-2 text-[#474747]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum error,
        mollitia
      </p>
      <div className="w-full flex max-lg:flex-col gap-8 justify-between">
        <div className="w-1/2 max-lg:w-full">
          <div className="w-full rounded-xl bg-[#D9D9D9] mb-8">
            <Image
              alt="car"
              width={1000}
              height={1000}
              src="/images/Cars/orlando.svg"
            />
          </div>
          <div className="w-full flex items-center justify-between gap-7 max-lg:gap-6 max-md:gap-4">
            <div className="w-full bg-[#D9D9D9] rounded-xl">
              <Image
                alt="car"
                width={1000}
                height={1000}
                src="/images/Cars/orlando.svg"
              />
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-xl">
              <Image
                alt="car"
                width={1000}
                height={1000}
                src="/images/Cars/orlando.svg"
              />
            </div>
            <div className="w-full bg-[#D9D9D9] rounded-xl">
              <Image
                alt="car"
                width={1000}
                height={1000}
                src="/images/Cars/orlando.svg"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 max-lg:w-full">
          <h1 className='text-3xl font-["MyFont"] mb-4'>Параметры</h1>
          <form action="">
            <div className="w-full flex items-center justify-between mb-2">
              <h1>Водитель</h1>
              <div className="flex items-center gap-3">
                <button className="px-3 py-2 bg-[#D9D9D9] rounded-md">
                  Да
                </button>
                <button className="px-3 py-2 rounded-md">Нет</button>
              </div>
            </div>
            <hr className="border-0 h-px bg-[#858585] mb-4" />
            <div className="w-full flex items-center justify-between mb-2">
              <h1>Багаж</h1>
              <div className="flex items-center gap-3">
                <button className="px-3 py-2 bg-[#D9D9D9] rounded-md">
                  Да
                </button>
                <button className="px-3 py-2 rounded-md">Нет</button>
              </div>
            </div>
            <hr className="border-0 h-px bg-[#858585] mb-4" />
            <div className="w-full flex items-center justify-between mb-2">
              <h1>Пассажирские места</h1>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-[#D9D9D9] rounded-md">6</button>
              </div>
            </div>
            <hr className="border-0 h-px bg-[#858585] mb-4" />
            <div className="w-full flex items-center justify-between mb-2">
              <h1>Расход топлива</h1>
              <button className="h-9 rounded-md">15 л/км</button>
            </div>
            <hr className="border-0 h-px bg-[#858585] mb-4" />
            <div className="w-full flex items-center justify-between mb-2">
              <h1 className='font-["MyFont"] text-3xl max-lg:text-2xl max-md:text-xl'>
                Стоимость:
              </h1>
              <h1 className='font-["MyFont"] text-3xl max-lg:text-2xl max-md:text-xl text-[#E31E24]'>
                250$
              </h1>
            </div>
            <hr className="border-0 h-px bg-[#858585]" />
            <div className="flex items-center gap-3 mt-9">
              <Button> Сделать заказ </Button>
              <button className="font-medium px-6 py-2 rounded-md border border-[#E31E24] ">
                Консультация
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full mt-8">
        <div className="flex items-center  gap-3 mb-3">
          <button
            className="px-3 py-1 h-9 rounded-md"
            style={{
              backgroundColor: isActive === "characteristic" ? "#D9D9D9" : "",
            }}
            onClick={() => setIsActive("characteristic")}
          >
            Характеристики
          </button>
          <hr className="w-5 border-0 h-px bg-[#858585] rotate-90" />
          <button
            className="px-3 py-2 rounded-md"
            style={{
              backgroundColor: isActive === "characteristic" ? "" : "#D9D9D9",
            }}
            onClick={() => setIsActive("description")}
          >
            Описание
          </button>
        </div>
        <hr className="border-0 h-px bg-[#858585] mb-4" />
        <Description isActive={isActive} />
      </div>
    </div>
  );
}
