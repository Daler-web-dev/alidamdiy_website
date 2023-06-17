import React, { useContext, useState } from "react";
const Item = dynamic(() => import('@/components/children/Item'))
const Search = dynamic(() => import('@/components/Search'))
import Image from "next/image";
import Context from "@/components/useTranslate";
import { ItranslateData } from "@/components/Types/Types";
import axios from "axios";
import HeadMeta from "@/components/HeadMeta";
import { Router, useRouter } from "next/router";
import dynamic from "next/dynamic";

export interface ICarsProducts {
  id: string;
  name: string;
  type: string;
  price: number;
  img: string;
  desc: string;
}


export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}`);
  const data = await res.data
  return {
   props: {
    data2: data.cars
   }
  } 
}
const Catalog: React.FC<ICarsProducts> = ({ data2 }: any) => {
  const translation = useContext<ItranslateData>(Context);
  const [data, setData] = useState<any>(data2);
  const filteredData = (arg: { mark: string; type: string; range: string }) => {
    setData(
      data2.filter((item: any) => {
        if (arg.type === item.type && arg.range == item.price) {
          return item;
        } else if (arg.type === "All") {
          return item;
        }
      })
    );
  };
  const router = useRouter();
  const { locale } = router;

  return (
    <>
    <HeadMeta title={locale == 'ru' ? 'Alidamdiy - Каталог' : locale == 'uz' ? 'Alidamdiy - Katalog' : 'Alidamdiy - Catalog'} />
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
        {data.map((i: any) => (
          <Item key={i.id} item={i} />
        ))}
      </div>
    </>
  );
};
export default Catalog;