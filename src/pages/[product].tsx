import Button from "@/components/children/Button";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import * as React from "react";

export interface IAppProps {}

export default function product(props: IAppProps) {
  const desc = [
    {
      title: 'Двигатель',
      value: 'Турбодвигатель с выприском топлива'
    },
    {
      title: 'Количество, расположение цилиндров',
      value: '3 подряд'
    },
    {
      title: 'Рабочий объём (куб.см)',
      value: '1.2л'
    },
    {
      title: 'Максимальная мощность (л.с. при об/мин)',
      value: '180 км/ч (1.2л) 11,1 сек'
    },
    {
      title: 'Максимальный крутящий момент (Нм при об/мин)',
      value: '190 при 2000-4000 rpm'
    },
    {
      title: 'Тип передачи',
      value: 'Автоматическая, 6-ступенчетая'
    },
  ]
  return (
    <div className="container mx-auto px-24 mt-4 max-2xl:px-12">
      <h1 className='text-3xl font-["MyFont"] mb-2'>Chevrolet Orlando</h1>
      <p className="mb-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum error,
        mollitia
      </p>
      <div className="w-full flex gap-6 max-2xl:justify-between max-2xl:gap-0 bg-red-500">
        <div className="w-6/12 max-2xl:w-1/10 max-xl:w-w48">
          <div className="w-full h-h42 rounded-xl bg-[#D9D9D9] mb-8">
            <Image
              alt="car"
              width={1000}
              height={1000}
              src="/images/Cars/orlando.svg"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-48 h-32 bg-[#D9D9D9] rounded-xl">
              <Image
                alt="car"
                width={1000}
                height={1000}
                src="/images/Cars/orlando.svg"
              />
            </div>
            <div className="w-48 h-32 bg-[#D9D9D9] rounded-xl">
              <Image
                alt="car"
                width={1000}
                height={1000}
                src="/images/Cars/orlando.svg"
              />
            </div>
            <div className="w-48 h-32 bg-[#D9D9D9] rounded-xl">
              <Image
                alt="car"
                width={1000}
                height={1000}
                src="/images/Cars/orlando.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-5/12 bg-green-500">
          <h1 className='text-3xl font-["MyFont"] mb-4'>Параметры</h1>
          <form action="">
            <div className="w-full flex items-center justify-between mb-2">
              <h1>Водитель</h1>
              <div className="flex items-center gap-3">
                <button className="px-3 py-2 bg-[#D9D9D9] rounded-md">Да</button>
                <button className="px-3 py-2 rounded-md">Нет</button>
              </div>
            </div>
            <hr className="border-0 h-px bg-[#858585] mb-4" />
            <div className="w-full flex items-center justify-between mb-2">
              <h1>Багаж</h1>
              <div className="flex items-center gap-3">
                <button className="px-3 py-2 bg-[#D9D9D9] rounded-md">Да</button>
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
              <h1 className='font-["MyFont"] text-3xl'>Стоимость:</h1>
              <h1 className='font-["MyFont"] text-3xl text-[#E31E24]'>250$</h1>
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
          <button className="px-3 py-2 h-9 bg-[#D9D9D9] rounded-md">Характеристики</button>
          <hr className="w-5 border-0 h-px bg-[#858585] rotate-90" />
          <button className="px-3 py-2 rounded-md">Описание</button>
        </div>
        <hr className="border-0 h-px bg-[#858585] mb-4" />
      </div>
      <div className="w-full mt-8 h-fit bg-[#fffffe] max-xl:overflow-y-scroll">
          <div className="max-xl:w-[1240px]">
          <div className="w-full h-14 bg-[#f5f5f5] py-4">
              <h1 className="text-center">Двигатель и трансмиссия</h1>
          </div>
          {
            desc.map((i) => <div className="flex items-center">
            <div className="w-3/5 h-14 border py-4 px-4">
                <h1>{i.title}</h1>
            </div>
            <div className="w-3/5 h-14 border border-l-0 py-4 px-4">
              <h1 className="text-center">{i.value}</h1>
            </div>
        </div>)
          }
          </div>
      </div>
    </div>
  );
}